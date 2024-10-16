import React from "react";
import Image from "next/image";
import { getPosts } from "~/server/queries";

const Posts = async () => {
  const posts = await getPosts();
  return (
    <section className={"w-full"}>
      <div className={"flex flex-wrap justify-center gap-4"}>
        {posts.map((post) => (
          <div key={post.id} className={"flex h-auto w-48 flex-col gap-2"}>
            <Image
              width={960}
              height={960}
              src={post.imgUrl}
              alt={post.title}
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
