"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { HotelFacilitiesProps } from "@/@types/types";
import Sectionheading from "@/components/sectionheading/sectionheading";

function Hotelfacilities({ title, items, subtitle }: HotelFacilitiesProps) {
  return (
    <div className="bg-[#EEEEEE] py-10">

      <div className="max-w-7xl mx-auto px-6">
        <Sectionheading title={title} subtitle={subtitle} />

        <div className="mt-10 hidden md:grid lg:grid-cols-5 grid-cols-3 gap-16">
          {items.map((item, index) => (
            <div className="flex flex-col items-center gap-6" key={index}>
              <div>{item.icon}</div>
              <p className="text-md uppercase font-semibold text-[#474747]">{item.title}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 block md:hidden">
          <Swiper spaceBetween={50} slidesPerView={2} breakpoints={{}}>
            {items.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center gap-6">
                    <div>{item.icon}</div>
                    <p className="text-md uppercase font-semibold text-center">
                      {item.title}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>

  );
}

export default Hotelfacilities;
