# Database Connection & Dashboard Architecture Guide

## 1. Current Database Connection Setup

### File: `src/lib/dbConnect.ts`
This is your centralized database connection module that uses MongoDB.

**Key Components:**

```typescript
// Collections defined for your application
const collections = {
  services: "services",
  bookings: "bookings",
  users: "users",
  blogs: "blogs",
  videos: "videos",
  shops: "shops",
};
```

**Connection Flow:**
1. Reads `NEXT_PUBLIC_MONGODB_URI` from environment variables
2. Creates a single MongoDB client connection using the global object pattern (prevents multiple connections in development)
3. Provides `dbConnect<T>()` function to access any collection

**Connection Pattern (Global Pattern):**
```
Client Instance → Stored in global._mongoClientPromise → Reused across requests
```

### Environment Variables Required:

```env
# Your .env.local has these:
NEXT_PUBLIC_MONGODB_URI=mongodb+srv://CAR_ADITION_DB:password@cluster0.jxcjqxl.mongodb.net/?appName=Cluster0
MONGODB_NAME=CAR_ADITION_DB
```

---

## 2. How API Routes Use Database

### Example: `src/app/api/(...users)/users/route.ts`

```typescript
import { dbConnect, collections } from "@/lib/dbConnect";

export async function GET(req: NextRequest) {
  // Step 1: Get collection reference
  const usersCollection = await dbConnect(collections.users);
  
  // Step 2: Query the collection
  const users = await usersCollection.find().toArray();
  
  // Step 3: Return response
  return NextResponse.json(users, { status: 200 });
}
```

**Flow:**
1. API Route calls `dbConnect(collections.users)`
2. Returns a MongoDB Collection instance
3. Use standard MongoDB operations (find, findOne, insertOne, updateOne, deleteOne)
4. Return data as JSON response

---

## 3. Authentication & Dashboard

### Authentication Flow: `src/lib/authOptions.ts`

**Provider:** NextAuth.js with CredentialsProvider

1. **User Login:**
   - Email + Password sent to `/api/auth/signin`
   - `authOptions.ts` validates credentials against `users` collection
   - User data stored in JWT token

2. **Session Management:**
   - User info stored in token via JWT callback
   - Session callback populates user data with role, email, profilePhoto, etc.

3. **Middleware Protection:** `src/middleware.ts`
   - Protects dashboard routes: `/dashboard/*`
   - Checks for valid token
   - Verifies user role is "admin"
   - Redirects unauthorized users to `/signin`

### Dashboard Structure:

```
src/app/dashboard/
├── layout.tsx          # Dashboard wrapper with sidebar
├── page.tsx            # Dashboard home (stats & charts)
├── (DashboardComponents)/
│   └── DashboardLayout/DashboardLayout.tsx
├── add-services/       # Add service form
├── services-list/      # Services management
├── customer-directory/ # Customer list
├── bookings/           # Booking management
├── add-shop/           # Shop management
├── add-blog/           # Blog management
├── add-video/          # Video management
└── system-setting/     # Settings
```

**Dashboard Home Page (`page.tsx`):**
- Fetches stats: total bookings, completed, pending, customers
- Displays recent bookings in a table
- Shows quick action buttons

---

## 4. How to Connect a New Database

### Method 1: Add Another Database Connection (Recommended)

**Step 1:** Create a new connection file: `src/lib/dbConnect2.ts`

```typescript
import { MongoClient, ServerApiVersion, Collection, Document } from "mongodb";

const collections2 = {
  newCollection1: "newCollection1",
  newCollection2: "newCollection2",
};

let client2: MongoClient;
let clientPromise2: Promise<MongoClient>;

// Use a NEW URI from environment
const uri2 = process.env.MONGODB_URI_2!; // Add this to .env.local
const dbName2 = process.env.MONGODB_NAME_2!; // Add this to .env.local

if (!uri2) throw new Error("MongoDB URI 2 is not defined");
if (!dbName2) throw new Error("MongoDB name 2 is not defined");

declare global {
  var _mongoClientPromise2: Promise<MongoClient> | undefined;
}

if (!global._mongoClientPromise2) {
  client2 = new MongoClient(uri2, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  global._mongoClientPromise2 = client2.connect();
}
clientPromise2 = global._mongoClientPromise2;

async function dbConnect2<T extends Document = Document>(collectionName: string): Promise<Collection<T>> {
  const client = await clientPromise2;
  return client.db(dbName2).collection<T>(collectionName);
}

export { dbConnect2, collections2 };
```

**Step 2:** Update `.env.local`

```env
# Existing database
NEXT_PUBLIC_MONGODB_URI=mongodb+srv://CAR_ADITION_DB:edZcwRyaYLPC80Yj@cluster0.jxcjqxl.mongodb.net/?appName=Cluster0
MONGODB_NAME=CAR_ADITION_DB

# New database
MONGODB_URI_2=mongodb+srv://USERNAME:PASSWORD@your-new-cluster.mongodb.net/?appName=NewDB
MONGODB_NAME_2=NEW_DB_NAME
```

**Step 3:** Use the new database in API routes

```typescript
import { dbConnect2, collections2 } from "@/lib/dbConnect2";

export async function GET(req: NextRequest) {
  const newCollection = await dbConnect2(collections2.newCollection1);
  const data = await newCollection.find().toArray();
  return NextResponse.json(data);
}
```

---

### Method 2: Use Same MongoDB Connection, Different Database

If your new database is on the same MongoDB Atlas cluster:

**In `src/lib/dbConnect.ts`:**

```typescript
// Add this function
async function dbConnectOtherDB<T extends Document = Document>(
  collectionName: string, 
  dbName: string
): Promise<Collection<T>> {
  const client = await clientPromise;
  return client.db(dbName).collection<T>(collectionName); // Use custom dbName
}

export { dbConnect, dbConnectOtherDB, collections };
```

**Usage:**
```typescript
// Access different database
const collection = await dbConnectOtherDB("myCollection", "OTHER_DB_NAME");
```

---

## 5. Database Operations Reference

### Common MongoDB Operations:

```typescript
// Read
const doc = await collection.findOne({ _id: new ObjectId(id) });
const docs = await collection.find().toArray();
const filtered = await collection.find({ status: "active" }).toArray();

// Create
const result = await collection.insertOne({ name: "John", email: "john@example.com" });

// Update
const updated = await collection.updateOne(
  { _id: new ObjectId(id) },
  { $set: { name: "Jane" } }
);

// Delete
const deleted = await collection.deleteOne({ _id: new ObjectId(id) });
```

---

## 6. Current Collections Schema

Your database has these collections:
- **users**: User accounts with email, password, role, profilePhoto
- **services**: Car services with name, description, price
- **bookings**: Customer bookings linking users, services, vehicles
- **blogs**: Blog posts with content
- **videos**: YouTube video links
- **shops**: Shop/location information

---

## 7. TypeScript Typing for Collections

```typescript
// Create interfaces for type safety
interface User {
  _id: ObjectId;
  email: string;
  password: string;
  name: string;
  role: "admin" | "customer";
  profilePhoto?: string;
}

interface Service {
  _id: ObjectId;
  name: string;
  description: string;
  basePrice: number;
}

// Use in API routes
const usersCollection = await dbConnect<User>(collections.users);
const user = await usersCollection.findOne({ email: "test@example.com" });
// user is typed as User | null
```

---

## Summary

**Database Flow:**
```
API Route → dbConnect(collectionName) → MongoDB Collection → Query/Modify → Return JSON
```

**Dashboard:**
```
Protected Middleware → NextAuth Session → Dashboard Layout → API Routes → Display Data
```

**To add new database:**
1. Create new `dbConnect2.ts` file
2. Add new URIs to `.env.local`
3. Import and use in API routes
4. Keep collections organized

Your setup uses MongoDB Atlas with the global client pattern, which is production-ready and efficient!
