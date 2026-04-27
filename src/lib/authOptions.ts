import CredentialsProvider from"next-auth/providers/credentials";
import type { AuthOptions } from"next-auth";
import { dbConnect, collections } from"@/lib/dbConnect";
import bcrypt from"bcryptjs";

const MAX_PROFILE_PHOTO_LENGTH = 512;

function normalizeProfilePhoto(profilePhoto?: string | null) {
 if (typeof profilePhoto !== "string") {
 return null;
 }

 const trimmedProfilePhoto = profilePhoto.trim();
 if (!trimmedProfilePhoto || trimmedProfilePhoto.startsWith("data:")) {
 return null;
 }

 return trimmedProfilePhoto.length <= MAX_PROFILE_PHOTO_LENGTH ? trimmedProfilePhoto : null;
}

// Extend Session interface to include custom fields
declare module"next-auth" {
 interface Session {
 user?: {
 id: string;
 name?: string | null;
 email?: string | null;
 profilePhoto?: string | null;
 role: string;
 };
 }
}

export const authOptions: AuthOptions = {
 providers: [
 CredentialsProvider({
 name:"credentials",
 credentials: {
 email: { label:"Email", type:"email", placeholder:"jsmith@gmail.com" },
 password: { label:"Password", type:"password" },
 },
 async authorize(credentials:any) {
 if (!credentials?.email || !credentials.password) {
 console.error("[AUTH] Missing credentials");
 throw new Error("Missing credentials");
 }

 const { email, password } = credentials;

 try {
 const usersCollection = await dbConnect(collections.users);
 const user = await usersCollection.findOne({ email });
 
 if (!user) {
 console.error(`[AUTH] User not found for email: ${email}`);
 throw new Error("Invalid email or password");
 }

        // Compare password with hash
 const passwordMatch = await bcrypt.compare(password, user.password);
 if (!passwordMatch) {
 console.error(`[AUTH] Password mismatch for user: ${email}`);
 throw new Error("Invalid email or password");
 }

 console.log(`[AUTH] User authenticated successfully: ${email}`);
 return {
 id: user._id.toString(),
 name: user.name,
 email: user.email,
 role: user.role,
 profilePhoto: normalizeProfilePhoto(user.profilePhoto),
 };
 } catch (error: any) {
 console.error("[AUTH] Authorization error:", error.message);
 throw error;
 }
 },
 }),
 ],

 pages: {
 signIn:"/signin",
 },

 callbacks: {
 async jwt({ token, user }) {
 if (user) {
 token.id = (user as { id: string }).id;
 token.name = user.name;
 token.profilePhoto = normalizeProfilePhoto((user as { profilePhoto?: string }).profilePhoto);
 token.email = user.email;
 if ('role' in user) {
 token.role = user.role;
 }
 }
 return token;
 },

 async session({ session, token }) {
 if (!session.user) {
 session.user = {
 id:"",
 name: null,
 email: null,
 profilePhoto: null,
 role:"",
 };
 }

 session.user.id = token.id as string;
 session.user.name = token.name;
 session.user.email = token.email;
 session.user.profilePhoto = normalizeProfilePhoto(token.profilePhoto as string | null | undefined);
 session.user.role = typeof token.role ==="string" ? token.role :"";

 return session;
 },
 },

 secret: process.env.NEXTAUTH_SECRET,
};
