import React from "react";
import Image from "next/image";
import { getPosts, getPostsCount } from "~/server/queries";
import Link from "next/link";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination";
import { cn } from "~/lib/utils";

const Posts = async ({ page = "1" }: { page: string }) => {
  const currentPage = Number(page);
  const posts = await getPosts(currentPage || 1);
  const postsCount = await getPostsCount();
  const totalPages = Math.ceil((postsCount[0]?.count ?? 6) / 6);

  return (
    <section className={"section"}>
      <div id={"posts"} className={"absolute -top-16"} />
      <h2 className={"section-title"}>Aktualności</h2>
      <div className={"flex flex-col items-center gap-5"}>
        <div
          className={cn(
            "posts-grid",
            posts.length < 4 ? "h-[75vh] min-h-[400px] grid-rows-2" : "",
          )}
        >
          {posts.map((post, i) => (
            <Link
              href={`/post/${post.id}`}
              prefetch={false}
              key={post.id}
              className={`group relative ${i === 0 ? "post-span-3" : i === 5 ? "post-span-3" : i === 4 ? "post-span-2 order-last" : "post-span-2"} size-full overflow-hidden rounded-md`}
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
            </Link>
          ))}
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href={`/?page=${Math.max(1, currentPage - 1)}`}
                aria-disabled={currentPage === 1}
                className={`${currentPage === 1 ? "hidden" : ""}`}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }).map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  href={`/?page=${i + 1}`}
                  isActive={currentPage === i + 1}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            {totalPages > 7 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationNext
                href={`/?page=${Math.min(totalPages, currentPage + 1)}`}
                aria-disabled={currentPage === totalPages}
                className={`${currentPage === totalPages ? "hidden" : ""}`}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
};
export default Posts;
