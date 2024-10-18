import React from "react";
import Hero from "~/components/sections/Hero";
import Posts from "~/components/sections/Posts";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className={"w-full max-w-7xl px-5 sm:px-10"}>
        <Posts />
      </div>
    </>
  );
}
