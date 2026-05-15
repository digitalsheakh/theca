import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { dbConnect, collections } from "@/lib/dbConnect";
import { buildPasswordResetUrl, createPasswordResetToken } from "@/lib/passwordReset";
import { isMailConfigured, sendPasswordResetEmail } from "@/lib/mailer";

export const runtime = "nodejs";

interface User {
 _id: ObjectId;
 email?: string;
 name?: string;
 passwordResetToken?: string;
 passwordResetExpires?: Date;
}

const GENERIC_RESPONSE = {
 message: "If an account exists for that email, a password reset link has been sent.",
};

export async function POST(req: NextRequest) {
 try {
 const { email } = await req.json();

 if (typeof email !== "string" || !email.trim()) {
 return NextResponse.json({ error: "Email is required" }, { status: 400 });
 }

 const normalizedEmail = email.trim().toLowerCase();
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 if (!emailRegex.test(normalizedEmail)) {
 return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
 }

 const usersCollection = await dbConnect<User>(collections.users);
 const user = await usersCollection.findOne({ email: normalizedEmail });
 if (!user?.email) {
 return NextResponse.json(GENERIC_RESPONSE, { status: 200 });
 }

 const { rawToken, hashedToken, expiresAt } = createPasswordResetToken();
 const resetUrl = buildPasswordResetUrl(rawToken);

 await usersCollection.updateOne(
 { _id: user._id },
 {
 $set: {
 passwordResetToken: hashedToken,
 passwordResetExpires: expiresAt,
 updatedAt: new Date(),
 },
 }
 );

 try {
 if (isMailConfigured()) {
 await sendPasswordResetEmail({
 to: user.email,
 name: user.name,
 resetUrl,
 });
 } else if (process.env.NODE_ENV !== "production") {
 return NextResponse.json({
 ...GENERIC_RESPONSE,
 resetUrl,
 }, { status: 200 });
 } else {
 console.error("Forgot password requested but SMTP configuration is missing.");
 }
 } catch (error) {
 await usersCollection.updateOne(
 { _id: user._id },
 {
 $unset: {
 passwordResetToken: "",
 passwordResetExpires: "",
 },
 $set: {
 updatedAt: new Date(),
 },
 }
 );

 console.error("Failed to send password reset email:", error);
 return NextResponse.json({ error: "Failed to send reset email" }, { status: 500 });
 }

 return NextResponse.json(GENERIC_RESPONSE, { status: 200 });
 } catch (error) {
 console.error("Forgot password error:", error);
 return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
 }
}