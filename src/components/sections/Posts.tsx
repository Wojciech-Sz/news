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
  const posts = await db.query.posts.findMany();

  return (
    <section className={"w-full"}>
      <div className={"flex gap-5"}>
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
      </div>
      <div className={"flex flex-wrap gap-4"}>
        {mockImages.map((image) => (
          <Image
            width={960}
            height={960}
            src={image.url}
            alt={"post"}
            key={image.id}
            className={"w-48"}
          />
        ))}
      </div>
    </section>
  );
};
export default Posts;
