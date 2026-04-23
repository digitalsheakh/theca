import { ObjectId } from "mongodb";

import { collections, dbConnect } from "@/lib/dbConnect";

export interface BlogRecord {
  _id: string;
  title: string;
  content: string;
  imageUrl: string;
  createdAt: string;
  metaTitle?: string;
  metaDescription?: string;
  metaImageUrl?: string;
  description?: string;
  author?: string;
  tags?: string[];
  slug?: string;
}

type MongoBlog = {
  _id: ObjectId;
  title?: string;
  content?: string;
  imageUrl?: string;
  createdAt?: Date | string;
  metaTitle?: string;
  metaDescription?: string;
  metaImageUrl?: string;
  description?: string;
  author?: string;
  tags?: string[];
  slug?: string;
};

const fallbackBlogs: BlogRecord[] = [
  {
    _id: "fallback-blog-1",
    title: "Timing Chain Replacement: Essential Maintenance",
    content:
      "<p>Timing chain wear can lead to poor engine timing, rattling noises, and serious internal damage if ignored.</p><p>Regular inspection helps catch stretch, guide wear, and tensioner faults before they become expensive failures.</p>",
    imageUrl: "/images/dropbox/15.jpg",
    createdAt: "2026-04-01T09:00:00.000Z",
    description: "Why timing chain inspection and replacement matter for long-term engine health.",
    metaTitle: "Timing Chain Replacement Guide",
    metaDescription: "Learn the warning signs of timing chain wear and when replacement becomes necessary.",
    author: "The Car Edition Pro",
    tags: ["timing chain", "engine", "maintenance"],
  },
  {
    _id: "fallback-blog-2",
    title: "Turbo Repair and Replacement Basics",
    content:
      "<p>Turbo systems rely on clean oil supply, correct boost control, and leak-free pipework.</p><p>Smoke, power loss, or whining under load are common early signs that a turbo inspection is overdue.</p>",
    imageUrl: "/images/dropbox/17.jpg",
    createdAt: "2026-04-05T09:00:00.000Z",
    description: "Common turbo symptoms, inspection points, and repair options.",
    metaTitle: "Turbo Repair and Replacement",
    metaDescription: "Understand the early warning signs of turbocharger issues and the usual repair path.",
    author: "The Car Edition Pro",
    tags: ["turbo", "diagnostics", "performance"],
  },
  {
    _id: "fallback-blog-3",
    title: "Brake Safety: When Pads and Discs Need Attention",
    content:
      "<p>Brake vibration, squealing, or longer stopping distances usually point to pad, disc, or caliper issues.</p><p>A proper inspection checks friction material, disc condition, fluid quality, and uneven wear patterns.</p>",
    imageUrl: "/images/dropbox/18.jpg",
    createdAt: "2026-04-10T09:00:00.000Z",
    description: "A practical guide to the brake symptoms that should not be ignored.",
    metaTitle: "Brake Safety Inspection Guide",
    metaDescription: "Know when your brake pads and discs need inspection or replacement.",
    author: "The Car Edition Pro",
    tags: ["brakes", "safety", "servicing"],
  },
];

function toIsoDate(value?: Date | string): string {
  if (!value) {
    return new Date().toISOString();
  }

  if (value instanceof Date) {
    return value.toISOString();
  }

  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? new Date().toISOString() : parsed.toISOString();
}

function normalizeBlog(blog: MongoBlog): BlogRecord {
  return {
    _id: blog._id.toString(),
    title: blog.title || "Untitled Blog",
    content: blog.content || "",
    imageUrl: blog.imageUrl || "/images/dropbox/15.jpg",
    createdAt: toIsoDate(blog.createdAt),
    metaTitle: blog.metaTitle,
    metaDescription: blog.metaDescription,
    metaImageUrl: blog.metaImageUrl,
    description: blog.description,
    author: blog.author,
    tags: blog.tags,
    slug: blog.slug,
  };
}

function isStrictObjectId(id: string): boolean {
  return ObjectId.isValid(id) && new ObjectId(id).toString() === id;
}

export async function getAllBlogs(): Promise<BlogRecord[]> {
  try {
    const blogsCollection = await dbConnect<MongoBlog>(collections.blogs);
    const blogs = await blogsCollection.find({}).sort({ createdAt: -1 }).toArray();
    return blogs.map(normalizeBlog);
  } catch (error) {
    console.error("Falling back to local blog data:", error);
    return fallbackBlogs;
  }
}

export async function getBlogById(id: string): Promise<BlogRecord | null> {
  if (!id) {
    return null;
  }

  const fallbackBlog = fallbackBlogs.find((blog) => blog._id === id);
  if (fallbackBlog) {
    return fallbackBlog;
  }

  if (!isStrictObjectId(id)) {
    return null;
  }

  try {
    const blogsCollection = await dbConnect<MongoBlog>(collections.blogs);
    const blog = await blogsCollection.findOne({ _id: new ObjectId(id) });
    return blog ? normalizeBlog(blog) : null;
  } catch (error) {
    console.error("Falling back to local blog detail:", error);
    return null;
  }
}