"use client";

import Image from "next/image";
import React from "react";
import type { BannerProps } from "@/@types/types";
import Link from "next/link";
import LazyLoadedVideo from "./LazyLoadedVideo";

export default function Banner({
  subtitle,
  title,
  image,
  video,
  embedVideo,
}: BannerProps) {
  const url = typeof video?.src === "string" ? video.src : undefined;

  const splitTitle = title.split("Stop");
  const firstPart = splitTitle[0];
  const secondPart = "Stop" + splitTitle[1];

  return (
    <section className="max-w-[1600px] mx-auto">
      {image && (
        <div className="relative w-full lg:aspect-[4/1.67] aspect-[4/2.9] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/20 before:z-10">
          <Image
            src={image?.src}
            alt={image?.alt}
            fill
            placeholder="blur"
            priority={true}
            className="object-cover"
          />
          {title && (
            <div className="absolute top-0 left-0 z-20 w-full h-full flex justify-center items-center">
              <div className="max-w-[1000px] mx-auto">
                {/* {subtitle && <p className="text-center text-white text-[20px]">
                  {subtitle}
                </p>} */}
                <h2 className="text-white  text-center sm:text-6xl text-2xl font-bold uppercase">
                  {firstPart}
                  <br />
                  {secondPart}
                </h2>
                {subtitle && (
                  <p className="text-center text-white text-[20px]">
                    {subtitle}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {embedVideo && (
        <div className="relative w-full lg:aspect-[4/1.67] aspect-[4/2.9]">
          <LazyLoadedVideo
            src={embedVideo.src}
            title="riviera resort"
            autoPlay={true}
            loop={true}
            controls={false}
            muted={true}
          />
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="flex justify-center items-center w-full h-full">
              <Link
                href={embedVideo.link}
                target="_blank"
                className="text-white bg-transparent text-base uppercase font-semibold border-2 border-white border-separate
            px-4 py-3 hover:bg-[#EEEEEE] hover:text-text-light duration-700 active:scale-75 hover:scale-105 transition ease-in-out
            rounded-sm"
              >
                watch on youtube
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
