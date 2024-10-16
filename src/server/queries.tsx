import "server-only";
import { db } from "~/server/db";

export const getPosts = async () =>
  await db.query.posts.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
