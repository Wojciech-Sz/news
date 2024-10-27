"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { heroImages } from "~/data";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = heroImages.map((image) => {
        return new Promise((resolve, reject) => {
          const img = new window.Image();
          img.src = image.url;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Failed to load images:", error);
      }
    };

    void preloadImages();
  }, []);

  useGSAP(() => {
    if (!imagesLoaded) return;

    const tl = gsap.timeline({ repeat: -1 });

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
  }, [imagesLoaded]);

  if (!imagesLoaded) {
    return <div className="h-screen bg-gray-200" />;
  }

  return (
    <section className={"hero"}>
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
          className={`absolute inset-x-0 h-full w-full object-cover object-center ${
            i !== 0 ? "opacity-0" : ""
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gray-800/30" />
    </section>
  );
};

export default Hero;
