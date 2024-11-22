import {
  RoomsAndAccomodationProps,
  RoomsCardProps,
  WeddingCardProps,
} from "@/@types/types";
import Sectionheading from "@/components/sectionheading/sectionheading";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const textContainerVariant = {
  initial: {
    transition: {
      staggerChildren: 0,
    },
  },

  show: {
    transition: {
      staggerChildren: 0.45,
    },
  },
};

const textVariant = {
  initial: {
    opacity: 0,
    y: 200,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.4,
      type: "spring",
      stiffness: 30,
    },
  },
};

function Weddingcard({
  title,
  subtitle,
  link,
  images,
  index,
}: WeddingCardProps) {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 bg-white items-center rounded-sm overflow-hidden shadow-2xl">
      <div className={`${index! % 2 != 0 ? "md:order-2" : ""} h-full`}>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          speed={900}
          className="w-full h-full"
        >
          {images.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="w-full h-full overflow-hidden shadow-xl">
                  <Image
                    src={item.src}
                    alt="test"
                    // fill
                    className="object-cover w-full h-full hover:scale-105 duration-500"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div
        className={`flex flex-col gap-6 px-4 py-6 ${
          index! % 2 == 0 ? "md:order-1" : ""
        }`}
      >
        <h2 className="text-3xl font-medium text-primary">{title}</h2>

        <p className="text-md">{subtitle}</p>

        <div className="flex">
          <Link
            href={link.href}
            className="border border-primary bg-primary text-md px-8 py-2 text-white rounded-sm hover:bg-transparent hover:text-primary duration-300 active:scale-75 hover:scale-105"
          >
            {link.label}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Weddingcard;
