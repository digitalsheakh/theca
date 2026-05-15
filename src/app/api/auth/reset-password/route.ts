import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import bcrypt from "bcryptjs";
import { dbConnect, collections } from "@/lib/dbConnect";
import { hashPasswordResetToken } from "@/lib/passwordReset";

export const runtime = "nodejs";

interface User {
 _id: ObjectId;
 password?: string;
 oldPasswords?: string[];
 passwordResetToken?: string;
 passwordResetExpires?: Date;
}

export async function POST(req: NextRequest) {
 try {
 const { token, password } = await req.json();

 if (typeof token !== "string" || !token.trim()) {
 return NextResponse.json({ error: "Reset token is required" }, { status: 400 });
 }

 if (typeof password !== "string" || password.length < 8) {
 return NextResponse.json({ error: "Password must be at least 8 characters long" }, { status: 400 });
 }

 const usersCollection = await dbConnect<User>(collections.users);
 const user = await usersCollection.findOne({
 passwordResetToken: hashPasswordResetToken(token),
 passwordResetExpires: { $gt: new Date() },
 });

 if (!user) {
 return NextResponse.json({ error: "Reset link is invalid or has expired" }, { status: 400 });
 }

 const matchesCurrentPassword = await bcrypt.compare(password, user.password || "");
 if (matchesCurrentPassword) {
 return NextResponse.json({ error: "New password must be different from the current password" }, { status: 400 });
 }

 const oldPasswords = [...(user.oldPasswords || [])];
 if (user.password) {
 oldPasswords.push(user.password);
 }

 const hashedPassword = await bcrypt.hash(password, 10);

 await usersCollection.updateOne(
 { _id: user._id },
 {
 $set: {
 password: hashedPassword,
 oldPasswords,
 updatedAt: new Date(),
 },
 $unset: {
 passwordResetToken: "",
 passwordResetExpires: "",
 },
 }
 );

 return NextResponse.json({ message: "Password reset successfully" }, { status: 200 });
 } catch (error) {
 console.error("Reset password error:", error);
 return NextResponse.json({ error: "Failed to reset password" }, { status: 500 });
 }
}