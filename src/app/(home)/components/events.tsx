"use client";

import { EventsProps } from "@/@types/types";
import Sectionheading from "@/components/sectionheading/sectionheading";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function Events({
  title,
  subtitle,
  para,
  description,
  image,
  link,
  items,
  activities,
}: EventsProps) {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Sectionheading title={title} subtitle={subtitle} para={para} />

      <div className="relative w-full md:aspect-[4/1.5] aspect-[4/2.5] md:mt-10 mt-6 overflow-hidden rounded-sm ">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover hover:scale-110 duration-500 rounded-sm"
        />
      </div>

      <div>
        <p className="text-center text-md mt-6">{description}</p>
      </div>

      <div className="flex justify-center mt-6">
        <Link
          href={link.href}
          className="border border-primary bg-primary text-md px-8 py-2 text-white rounded-sm hover:bg-transparent hover:text-primary duration-300 active:scale-75 hover:scale-105"
        >
          {link.label}
        </Link>
      </div>

      {items && (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-10 ">
          {items.map((item, index) => (
            <div key={index} className="w-full">
              <div className="w-full h-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  className="object-cover rounded-sm w-full h-full"
                />
              </div>
            </div>
          ))}

          {activities && (
            <div className="bg-secondary p-4 md:p-8 rounded-sm">
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-semibold text-primary">
                  {activities.title}
                </h2>

                <p className="text-md text-primary">{activities.subtitle}</p>

                <div className="flex">
                  <Link
                    href={activities.link.href}
                    className="border border-primary bg-primary text-md px-8 py-2 text-white rounded-sm hover:bg-transparent hover:text-primary duration-300 active:scale-75 hover:scale-105"
                  >
                    {activities.link.label}
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Events;
