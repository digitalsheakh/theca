import { NextRequest, NextResponse } from 'next/server';
import { dbConnect, collections } from '@/lib/dbConnect';
import bcrypt from 'bcryptjs';

export async function POST(req: NextRequest) {
  try {
    const { email, password, name, setupToken } = await req.json();

    // Validate required fields
    if (!email || !password || !name) {
      return NextResponse.json(
        { error: 'Missing required fields: email, password, name' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate password strength
    if (password.length < 8) {
      return NextResponse.json(
        { error: 'Password must be at least 8 characters long' },
        { status: 400 }
      );
    }

    const usersCollection = await dbConnect(collections.users);

    // Check if user already exists
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 409 }
      );
    }

    // Check if this is the first user (should be admin)
    const userCount = await usersCollection.countDocuments();
    const isFirstUser = userCount === 0;

    // If not first user, check setup token
    if (!isFirstUser && setupToken !== process.env.SETUP_TOKEN) {
      return NextResponse.json(
        { error: 'Unauthorized - invalid setup token' },
        { status: 403 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const result = await usersCollection.insertOne({
      email,
      password: hashedPassword,
      name,
      role: isFirstUser ? 'admin' : 'user',
      profilePhoto: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return NextResponse.json(
      {
        message: 'User created successfully',
        userId: result.insertedId,
        role: isFirstUser ? 'admin' : 'user',
        isFirstUser,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Signup error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: `Failed to create user: ${errorMessage}` },
      { status: 500 }
    );
  }
}
