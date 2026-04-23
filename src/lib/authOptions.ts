import CredentialsProvider from"next-auth/providers/credentials";
import type { AuthOptions } from"next-auth";
import { dbConnect, collections } from"@/lib/dbConnect";
import bcrypt from"bcryptjs";

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
 throw new Error("Missing credentials");
 }

 const { email, password } = credentials;

 const usersCollection = await dbConnect(collections.users);
 const user = await usersCollection.findOne({ email });
 console.log(user)
 if (!user) {
 throw new Error("Invalid email or password");
 }

        // Compare password with hash
 const passwordMatch = await bcrypt.compare(password, user.password);
 if (!passwordMatch) {
 throw new Error("Invalid email or password");
 }
 return {
 id: user._id.toString(),
 name: user.name,
 email: user.email,
 role: user.role,
 profilePhoto: user.profilePhoto,

 };
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
 token.profilePhoto = (user as { profilePhoto?: string }).profilePhoto;
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
 session.user.profilePhoto = token.profilePhoto as string | null | undefined;
 session.user.role = typeof token.role ==="string" ? token.role :"";

 return session;
 },
 },

 secret: process.env.NEXTAUTH_SECRET,
};
