#!/usr/bin/env ts-node

/**
 * Migration Script: Backfill Blog Slugs
 *
 * This script generates slugs for all existing blogs that don't have them.
 * It handles duplicate titles by appending -2, -3, etc.
 * Safe for production - only updates the slug field, preserves all other data.
 */

import { MongoClient, ObjectId } from 'mongodb';

// Configuration
const MONGODB_URI = process.env.MONGODB_URI || process.env.NEXT_PUBLIC_MONGODB_URI;
const DB_NAME = process.env.MONGODB_NAME;
const COLLECTION_NAME = 'blogs';

if (!MONGODB_URI) {
  console.error('❌ Error: MONGODB_URI not found in environment variables');
  process.exit(1);
}

if (!DB_NAME) {
  console.error('❌ Error: MONGODB_NAME not found in environment variables');
  process.exit(1);
}

/**
 * Convert title to URL-friendly slug
 */
function generateSlug(title: string): string {
  if (!title) return '';

  return title
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Generate unique slug by checking for duplicates
 */
async function generateUniqueSlug(
  title: string,
  existingSlugs: Set<string>,
  excludeId?: string
): Promise<string> {
  const baseSlug = generateSlug(title);

  if (!baseSlug) {
    throw new Error('Cannot generate slug from empty title');
  }

  // Check if base slug is available
  if (!existingSlugs.has(baseSlug)) {
    return baseSlug;
  }

  // Base slug exists, find the next available number
  let counter = 2;
  let uniqueSlug: string;

  do {
    uniqueSlug = `${baseSlug}-${counter}`;

    if (!existingSlugs.has(uniqueSlug)) {
      return uniqueSlug;
    }

    counter++;
  } while (counter <= 1000);

  throw new Error('Could not generate unique slug after 1000 attempts');
}

/**
 * Main migration function
 */
async function backfillBlogSlugs() {
  let client: MongoClient | null = null;

  try {
    console.log('🚀 Starting blog slug backfill migration...\n');

    // Connect to MongoDB
    client = new MongoClient(MONGODB_URI!);
    await client.connect();
    console.log('✅ Connected to MongoDB');

    const db = client.db(DB_NAME!);
    const collection = db.collection(COLLECTION_NAME);

    // Get all blogs that need slug backfill
    const blogsNeedingSlug = await collection.find({
      $or: [
        { slug: { $exists: false } },
        { slug: null },
        { slug: '' }
      ]
    }).toArray();

    if (blogsNeedingSlug.length === 0) {
      console.log('✅ No blogs need slug backfill. All blogs already have slugs!');
      return;
    }

    console.log(`📋 Found ${blogsNeedingSlug.length} blogs needing slug backfill\n`);

    // Get all existing slugs to avoid duplicates
    const allBlogs = await collection.find({}).toArray();
    const existingSlugs = new Set(
      allBlogs
        .map(blog => blog.slug)
        .filter(slug => slug && slug.length > 0)
        .map(slug => slug.toString())
    );

    console.log(`📝 Existing slugs in database: ${existingSlugs.size}\n`);

    // Process each blog
    let updateCount = 0;
    const errors: Array<{ blogId: string; title: string; error: string }> = [];

    for (const blog of blogsNeedingSlug) {
      try {
        const title = (blog.title as string) || 'Untitled Blog';
        const blogId = blog._id.toString();

        // Generate unique slug
        const slug = await generateUniqueSlug(title, existingSlugs);

        // Update only the slug field
        const result = await collection.updateOne(
          { _id: blog._id },
          { $set: { slug } }
        );

        if (result.modifiedCount > 0) {
          // Add to existing slugs set to avoid duplicates in this batch
          existingSlugs.add(slug);

          console.log(`✅ "${title.substring(0, 50)}${title.length > 50 ? '...' : ''}" → "${slug}"`);
          updateCount++;
        } else {
          console.log(`⚠️  No changes made for blog: ${title}`);
        }

      } catch (error) {
        const errorMsg = error instanceof Error ? error.message : 'Unknown error';
        console.error(`❌ Error processing blog "${blog.title}": ${errorMsg}`);
        errors.push({
          blogId: blog._id.toString(),
          title: blog.title,
          error: errorMsg
        });
      }
    }

    // Summary
    console.log('\n' + '='.repeat(60));
    console.log('📊 MIGRATION SUMMARY');
    console.log('='.repeat(60));
    console.log(`✅ Successfully updated: ${updateCount} blogs`);
    console.log(`❌ Errors: ${errors.length}`);
    console.log(`📋 Total blogs processed: ${blogsNeedingSlug.length}`);

    if (errors.length > 0) {
      console.log('\n⚠️  Errors encountered:');
      errors.forEach(err => {
        console.log(`  - Blog ID: ${err.blogId}`);
        console.log(`    Title: "${err.title}"`);
        console.log(`    Error: ${err.error}`);
      });
    }

    console.log('\n✅ Migration completed successfully!');
    console.log('🔍 Please verify that blog URLs are working correctly.');
    console.log('💡 Old MongoDB ID URLs will now redirect to new slug URLs.\n');

  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    if (client) {
      await client.close();
      console.log('🔌 Disconnected from MongoDB');
    }
  }
}

// Run the migration
backfillBlogSlugs().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
