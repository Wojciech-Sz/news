import Link from "next/link";
import Image from "next/image";
import { mockUrls } from "~/data";
import React from "react";
import Hero from "~/components/sections/Hero";
import Posts from "~/components/sections/Posts";

export default function HomePage() {
  return (
    <main className="">
      <Hero />
      <Posts />
    </main>
  );
}
