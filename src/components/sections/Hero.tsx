"use client";

import Image from "next/image";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { heroImages } from "~/data";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const tl = gsap.timeline({
    repeat: -1,
  });

  useGSAP(() => {
    heroImages.forEach((image, i) => {
      tl.to(
        `#${image.id}`,
        {
          scale: 1.1,
          duration: 10,
          ease: "linear",
        },
        i > 0 ? ">-3" : "",
      )
        .to(
          `#${image.id}`,
          {
            opacity: 0,
            duration: 3,
            ease: "linear",
          },
          ">-3",
        )
        .to(
          `#${heroImages[i + 1] ? heroImages[i + 1]?.id : heroImages[0]?.id}`,
          {
            opacity: 1,
            duration: 3,
            ease: "linear",
          },
          "<",
        )
        .set(`#${image.id}`, {
          scale: 1,
        });
    });
  }, []);

  return (
    <section className={"hero h-[83vh]"}>
      <div id="hero" className="absolute -top-16" />
      {heroImages.map((image, i) => (
        <Image
          key={image.id}
          id={image.id}
          src={image.url}
          alt={image.id}
          priority
          title="Hero image"
          width={1920}
          height={1080}
          className={`absolute inset-x-0 size-full object-cover object-center ${
            i !== 0 ? "opacity-0" : ""
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gray-800/30" />
    </section>
  );
};

export default Hero;
