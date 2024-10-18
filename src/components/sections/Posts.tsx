import React from "react";
import Image from "next/image";
import { getPosts } from "~/server/queries";

const Posts = async () => {
  const posts = await getPosts();
  return (
    <section className={"flex w-full flex-col gap-5"}>
      <h2 className={"text-3xl/none font-bold tracking-tight lg:text-4xl/none"}>
        Aktualności
      </h2>
      <div
        className={
          "grid h-screen w-full grid-cols-1 grid-rows-4 gap-5 md:grid-cols-2 lg:grid-cols-3"
        }
      >
        {posts.map((post) => (
          <div
            key={post.id}
            className={`group relative ${post.className} size-full overflow-hidden rounded-md`}
          >
            <Image
              width={960}
              height={960}
              src={post.imgUrl}
              alt={post.title}
              className={
                "size-full object-cover transition duration-300 group-hover:scale-110"
              }
            />
            <div
              className={
                "absolute inset-0 bg-white/30 transition duration-300 group-hover:opacity-0"
              }
            />
            <div
              className={
                "absolute bottom-5 left-5 flex flex-col gap-2 text-white sm:bottom-7 sm:left-7"
              }
            >
              <h3
                className={
                  "pr-3 text-2xl font-semibold transition duration-300 group-hover:translate-x-2 lg:text-3xl"
                }
              >
                {post.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Posts;
