import React from "react";
import Hero from "~/components/sections/Hero";
import Posts from "~/components/sections/Posts";
import Team from "~/components/sections/Team";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className={"flex w-full max-w-7xl flex-col gap-20 px-5 sm:px-10"}>
        <Posts />
        <Team />
      </div>
    </>
  );
}
