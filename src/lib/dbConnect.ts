import { MongoClient, ServerApiVersion, Collection, Document, MongoClientOptions } from"mongodb";

const collections = {
 services:"services",
 bookings:"bookings",
 users:"users",
 blogs:"blogs",
 videos:"videos",
 shops:"shops",
};

const uri = process.env.MONGODB_URI || process.env.NEXT_PUBLIC_MONGODB_URI;
const dbName = process.env.MONGODB_NAME;

const hasMongoConfig = Boolean(uri && dbName);

const clientOptions: MongoClientOptions = {
 serverApi: {
 version: ServerApiVersion.v1,
 strict: false,
 deprecationErrors: true,
 },
 connectTimeoutMS: 10000,
 serverSelectionTimeoutMS: 10000,
 socketTimeoutMS: 20000,
 maxPoolSize: 10,
 tls: true,
 appName:"the-car-edition-pro",
};

// Extend the global object to include _mongoClientPromise
declare global {
 // eslint-disable-next-line no-var
 var _mongoClientPromise: Promise<MongoClient> | undefined;
}

function createMongoClient() {
 if (!uri) {
 throw new Error("MongoDB URI is not defined in environment variables");
 }

 return new MongoClient(uri, clientOptions);
}

async function getMongoClient() {
 if (!hasMongoConfig || !dbName) {
 throw new Error("MongoDB configuration is missing");
 }

 if (!global._mongoClientPromise) {
 const client = createMongoClient();
 global._mongoClientPromise = client.connect().catch(async(error) => {
 global._mongoClientPromise = undefined;

 try {
 await client.close();
 } catch {
 }

 throw error;
 });
 }

 return global._mongoClientPromise;
}

async function dbConnect<T extends Document = Document>(collectionName: string): Promise<Collection<T>> {
 const client = await getMongoClient();
 return client.db(dbName).collection<T>(collectionName);
}

export { dbConnect, collections, hasMongoConfig };
