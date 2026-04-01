import { ObjectId } from "mongodb";
import{ dbConnect,  collections } from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import { authorizationCheck } from "@/lib/authorization";

interface User extends Document {
  _id: ObjectId;
  name?: string;
  mobile?: string;
  email?: string;
  role?: string;
  adminPhoto?: string | string[] | null;
  permissions?: string[];
  instituteId?: string;
  password?: string;
  oldPasswords : string[]
}
// Collections will be connected inside route handlers




// PATCH — update student details
export async function PATCH(req: NextRequest) {
  const referer = req.headers.get('referer') || '';
  const refererPath = new URL(referer).pathname;
  
  // Pass referer path to authorization check
  const authResult = await authorizationCheck(refererPath);
  
  if (!authResult.success) {
    return NextResponse.json(
      { error: authResult.error },
      { status: authResult.status }
    );
  }
  try {
    // TODO: Re-enable database connection after deployment
    // const usersCollection = await dbConnect<User>(collections.users);
    const id = req.nextUrl.pathname.split("/").pop();

    if (!id || !ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
    }

    const filter = { _id: new ObjectId(`${id}`) };
    const update = await req.json();

    // TODO: Re-enable database query
    // const user = await usersCollection.findOne(filter);
    const user = { _id: id, password: "temp-password", oldPasswords: [] as string[] };

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
 if(update?.currentPassword !== user?.password){
  return NextResponse.json({ error: "current password doesn't matched" }, { status: 400 });
 }
  const oldPasswords = [...user.oldPasswords];
  oldPasswords.push(update.currentPassword);

    const updateDoc = {
      $set: {
          password: update.newPassword, // "name"
          oldPasswords: oldPasswords,
      }
    };

    // TODO: Re-enable database update
    // const result = await usersCollection.updateOne(filter, updateDoc);
    const result = { modifiedCount: 1 };
 
    return NextResponse.json({ message: "password updated successfully", result }, { status: 200 });
  } catch (error) {
    console.error("Error updating password:", error);
    return NextResponse.json({ error: "Failed to update password" }, { status: 500 });
  }
}


