import Link from "next/link";
import Image from "next/image";
import { mockUrls } from "~/data";
import React from "react";

const mockImages = mockUrls.map((url,index) => (
  {
    id: index,
    url,
  }
))

export default function HomePage() {
  return (
    <main className="">
      <div className={"flex gap-4"}>
        {mockImages.map((image) => (
          <Image width={960} height={960} src={image.url} alt={"post"} key={image.id} className={"w-48"}/>
        ))}
      </div>
    </main>
  );
}
