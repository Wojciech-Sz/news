import React from "react";
import { getPost, getPostContent } from "~/server/queries";
import Image from "next/image";

const PostPage = async ({ params }: { params: { id: number } }) => {
  const content = await getPostContent(params.id);
  const post = await getPost(params.id);

  return (
    <div className={"flex max-w-7xl flex-col gap-4"}>
      <div id="hero" className="absolute -top-16" />
      <h1 className={"text-center text-4xl font-bold"}>{post?.title}</h1>
      <Image
        src={post?.imgUrl ?? ""}
        alt={post?.title ?? ""}
        width={960}
        height={960}
        className={"max-h-[70vh] min-h-96 w-full object-cover"}
      />
      {content.map((text) => (
        <p key={text.id}>{text.content}</p>
      ))}
    </div>
  );
};
export default PostPage;
