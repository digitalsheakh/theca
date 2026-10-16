import { collections, dbConnect } from "@/lib/dbConnect";

/**
 * Convert title to URL-friendly slug
 * Example: "The Benefits of Carbon Cleaning (Walnut Blasting) for Your Car"
 * becomes: "the-benefits-of-carbon-cleaning-walnut-blasting-for-your-car"
 */
export function generateSlug(title: string): string {
  if (!title) return '';

  return title
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')           // Replace & with 'and'
    .replace(/[^\w\s-]/g, '')       // Remove special characters
    .replace(/\s+/g, '-')            // Replace spaces with -
    .replace(/-+/g, '-')             // Replace multiple - with single -
    .replace(/^-+|-+$/g, '');        // Remove leading/trailing -
}

/**
 * Generate unique slug by checking for duplicates
 * If slug exists, append -2, -3, -4, etc.
 */
export async function generateUniqueSlug(
  title: string,
  excludeId?: string
): Promise<string> {
  const baseSlug = generateSlug(title);

  if (!baseSlug) {
    throw new Error('Cannot generate slug from empty title');
  }

  try {
    const blogsCollection = await dbConnect(collections.blogs);

    // Check if base slug already exists
    const query: any = { slug: baseSlug };

    // Exclude current blog when checking for duplicates (for updates)
    if (excludeId) {
      query._id = { $ne: excludeId };
    }

    const existing = await blogsCollection.findOne(query);

    if (!existing) {
      return baseSlug; // Base slug is available
    }

    // Base slug exists, find the next available number
    let counter = 2;
    let uniqueSlug: string;

    do {
      uniqueSlug = `${baseSlug}-${counter}`;

      const duplicateQuery: any = { slug: uniqueSlug };
      if (excludeId) {
        duplicateQuery._id = { $ne: excludeId };
      }

      const duplicate = await blogsCollection.findOne(duplicateQuery);

      if (!duplicate) {
        return uniqueSlug; // Found available slug
      }

      counter++;
    } while (counter <= 1000); // Safety limit

    throw new Error('Could not generate unique slug after 1000 attempts');
  } catch (error) {
    console.error('Error generating unique slug:', error);
    throw error;
  }
}

/**
 * Check if a string is a valid MongoDB ObjectId
 */
export function isValidObjectId(id: string): boolean {
  return /^[0-9a-fA-F]{24}$/.test(id);
}

/**
 * Fetch blog by either MongoDB ID or slug
 * Returns blog if found, null otherwise
 */
export async function getBlogByIdOrSlug(identifier: string): Promise<any> {
  if (!identifier) {
    return null;
  }

  try {
    const blogsCollection = await dbConnect(collections.blogs);

    // First, try to find by MongoDB ID if it's valid
    if (isValidObjectId(identifier)) {
      const { ObjectId } = require('mongodb');
      const blogById = await blogsCollection.findOne({
        _id: new ObjectId(identifier)
      });

      if (blogById) {
        return blogById;
      }
    }

    // If not found by ID, try to find by slug
    const blogBySlug = await blogsCollection.findOne({ slug: identifier });

    return blogBySlug;
  } catch (error) {
    console.error('Error fetching blog by ID or slug:', error);
    return null;
  }
}

/**
 * Generate slug for a blog without saving to database
 * Useful for previewing what slug will be generated
 */
export function previewSlug(title: string): string {
  return generateSlug(title);
}
