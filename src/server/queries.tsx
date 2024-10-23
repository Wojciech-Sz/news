import "server-only";
import { db } from "~/server/db";

export const getPosts = async () =>
  await db.query.posts.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

export const getPost = async (postId: number) =>
  await db.query.posts.findFirst({
    where: (model, { eq }) => eq(model.id, postId),
  });

export const getPostContent = async (postId: number) =>
  await db.query.postContent.findMany({
    where: (model, { eq }) => eq(model.postId, postId),
  });
