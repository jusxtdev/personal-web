"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import image1 from "@/public/1.jpg";
import image2 from "@/public/2.jpg";
import image3 from "@/public/3.jpg";
import image4 from "@/public/4.jpg";
import image5 from "@/public/5.jpg";
import image6 from "@/public/6.jpg";
import image7 from "@/public/7.jpg";
import image8 from "@/public/8.jpg";
import image9 from "@/public/9.jpg";
import image10 from "@/public/10.jpg";

const IMAGES: StaticImageData[] = [
  image1, image2, image3, image4, image5,
  image6, image7, image8, image9, image10,
];

export default function Background() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((i) => (i + 1) % IMAGES.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none absolute left-0 right-0 top-0 z-0 h-[50vh] w-screen overflow-hidden bg-black">
      {IMAGES.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out motion-reduce:transition-none ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            quality={75}
            className="object-cover object-top"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/20 to-black" />
    </div>
  );
}
