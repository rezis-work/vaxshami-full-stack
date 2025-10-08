import { DATABASE_ID, POSTSTABLE_ID } from "@/lib/config";
import { Client, Databases, ID } from "node-appwrite";
import { blogPosts } from "./blogPosts";
const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)
  .setKey(process.env.NEXT_APPWRITE_KEY!);

const databases = new Databases(client);

const allowedFields = [
  "coverimage",
  "summary",
  "content",
  "createdDate",
  "readtime",
  "tags",
  "title",
  "category",
  "quote",
  "section",
  "userstable",
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function uploadBlogPosts(posts: any[]) {
  for (const post of posts) {
    // Filter only allowed fields
    const docData = Object.fromEntries(
      Object.entries(post).filter(([key]) => allowedFields.includes(key))
    );

    try {
      await databases.createDocument(
        DATABASE_ID,
        POSTSTABLE_ID,
        ID.unique(), // generates a unique ID
        docData
      );
      console.log(`Uploaded: ${post.title}`);
    } catch (error) {
      console.error(`Failed to upload ${post.title}:`, error);
    }
  }
}

// Run the upload
uploadBlogPosts(blogPosts);
