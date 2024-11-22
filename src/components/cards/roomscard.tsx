import { RoomsAndAccomodationProps, RoomsCardProps } from "@/@types/types";
import Sectionheading from "@/components/sectionheading/sectionheading";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation"

function Roomscard({
  title,
  subtitle,
  link,
  images,
  accomodation,
  index,
}: RoomsCardProps) {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 bg-[#F5F5F5] items-center overflow-hidden rounded-sm shadow-inner">
      <div className={`${index! % 2 != 0 ? "md:order-2" : ""} h-full`}>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          navigation={true}
          modules={[Navigation]}
          className="w-full h-full room-button"
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
        className={`flex flex-col gap-6 px-6 py-6 ${
          index! % 2 == 0 ? "md:order-1" : ""
        }`}
      >
        <h2 className="text-3xl font-semibold text-[#040404]">{title}</h2>

        <p className="text-md text-justify text-[#474747]">{subtitle}</p>

        <div className="grid md:grid-cols-9 grid-cols-5 gap-6 border-y border-y-[#474747] px-3 py-5">
          {accomodation.map(
            (item, index) =>
              item.isTrue && (
                <div
                  key={index}
                  className="hover:-translate-y-1 duration-300 transition-all"
                >
                  {item.icon}
                </div>
              )
          )}
        </div>

        <div className="flex">
          <Link
            href={link.href}
            target="_blank"
            className="border border-[#040404] bg-[#040404]  text-md px-8 py-2 text-white rounded-sm hover:bg-transparent hover:text-[#040404] duration-300 active:scale-75 hover:scale-105"
          >
            {link.label}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Roomscard;
