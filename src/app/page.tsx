import React from "react";
import Hero from "~/components/sections/Hero";
import Posts from "~/components/sections/Posts";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <main className="">
      <Hero />
      <Posts />
    </main>
  );
}
