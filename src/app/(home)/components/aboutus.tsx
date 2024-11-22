"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import { AboutProps } from "@/@types/types";
import Sectionheading from "@/components/sectionheading/sectionheading";

function Aboutus({
  sectionHeading,
  title,
  subtitle,
  para,
  paraTwo,
  link,
  images,
}: AboutProps) {
  const imgContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgContainer,
    offset: ["center end", "end center"],
  });

  return (
    <section>
      {sectionHeading && <Sectionheading title={sectionHeading} />}
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-6 mt-8 rounded-sm overflow-hidden">
        <div
          ref={imgContainer}
          className="relative w-full aspect-[4/2.6] overflow-hidden shadow-xl"
        >
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            className="object-cover hover:scale-105 duration-500"
          />
        </div>

        <div className="flex flex-col gap-6 justify-center">
          {title && (
            <h2 className="md:text-3xl text-2xl font-semibold text-[#040404]">
              {title}
            </h2>
          )}

          {subtitle && <p className="text-md text-justify text-[#474747]">{subtitle}</p>}

          {para && <p className="text-md  text-[#474747]">{para}</p>}

          {paraTwo && <p className="text-md  text-[#474747]">{paraTwo}</p>}

          <div className="flex">
            <Link
              href={link.href}
              className="border border-[#040404] bg-[#040404]  text-md px-8 py-2 text-white rounded-sm hover:bg-transparent hover:text-[#040404] duration-300 active:scale-75 hover:scale-105"
            >
              {link.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
