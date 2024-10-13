import React from "react";
import { mockUrls } from "~/data";
import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockImages = mockUrls.map((url, index) => ({
  id: index,
  url,
}));

const Posts = async () => {
  const posts = await db.query.posts.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <section className={"w-full"}>
      <div className={"flex flex-wrap gap-4"}>
        {posts.map((post) => (
          <div key={post.id} className={"flex flex-col gap-2"}>
            <Image
              width={960}
              height={960}
              src={post.imgUrl}
              alt={"post"}
              className={"w-48"}
            />
            {post.name}
          </div>
        ))}
      </div>
    </section>
  );
};
export default Posts;
