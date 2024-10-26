import "server-only";
import { db } from "~/server/db";
import { count } from "drizzle-orm";
import { posts } from "~/server/db/schema";

export const getPosts = async (pageNumber: number) =>
  await db.query.posts.findMany({
    orderBy: (model, { desc }) => desc(model.id),
    limit: 6,
    offset: (pageNumber - 1) * 6,
  });

export const getPostsCount = async () =>
  await db.select({ count: count() }).from(posts);

export const getPost = async (postId: number) =>
  await db.query.posts.findFirst({
    where: (model, { eq }) => eq(model.id, postId),
  });

export const getPostContent = async (postId: number) =>
  await db.query.postContent.findMany({
    where: (model, { eq }) => eq(model.postId, postId),
  });
