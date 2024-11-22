"use client";

import { CustomerReviewsProps } from "@/@types/types";
import Sectionheading from "@/components/sectionheading/sectionheading";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { StarTick } from "@/icons/icons";
import { Autoplay } from "swiper/modules";

function CustomerReviews({ title, items }: CustomerReviewsProps) {
  return (
    <section className=" mx-auto">
      <Sectionheading title={title} />

      <div style={{
        backgroundImage: `url('/Photos/ResortView/DSC01659-HDR-Edit_11zon.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // height: '455px', // or any other height you prefer
        width: '100%',
      }}>
        <div className="md:mt-10 max-w-[580px]  mx-auto flex items-center md:py-[7rem]">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            speed={900}
            autoplay={{
              delay: 4000,
            }}
            modules={[Autoplay]}
            // breakpoints={{
            //   1024: {
            //     slidesPerView: 4,
            //     spaceBetween: 10,
            //   },

            //   768: {
            //     slidesPerView: 2,
            //     spaceBetween: 10,
            //   },
            // }}
            className="w-full rounded-sm bg-[#040404] text-white"
          >
            {items.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center px-5 py-6 bg-[#040404] max-w-[610px]">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((_, index) => (
                        <StarTick key={index} />
                      ))}
                    </div>
                    <div className="self-stretch mt-3 text-base leading-7 text-center text-white max-md:max-w-full">
                      {item.subheading}
                    </div>
                    <hr className="h-px w-full mt-3  border border-[#ffffff]" />
                    <div className="mt-3 text-3xl font-bold leading-9 text-center text-white">
                      {item.heading}
                    </div>
                    <div className="mt-1 text-base leading-7 text-center text-white">
                      Regular Client
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>


    </section>
  );
}

export default CustomerReviews;
