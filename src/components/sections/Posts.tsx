import React from "react";
import Image from "next/image";
import { db } from "~/server/db";

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
            <p>{post.name}</p>
            <p>{post.title}</p>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Posts;
