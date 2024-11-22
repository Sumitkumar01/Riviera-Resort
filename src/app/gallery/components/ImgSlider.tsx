"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { GalleryData } from "./gallery";
import { Navigation, Pagination } from "swiper/modules";

const ImgSlider = () => {
  return (
    <>
      {GalleryData.map((item, index) => (
        <div key={index}>
          <h2 className="md:text-3xl text-2xl text-center text-[#040404] font-bold">
            {item.title}
          </h2>
          <div className="md:mt-10 mt-4 overflow-hidden rounded-sm">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              speed={700}
              loop={true}
              //   navigation={{
              //     nextEl: `.next-${index}`,
              //     prevEl: `.prev-${index}`,
              //   }}
              //   autoplay={{
              //     delay: 1000,
              //   }}
              navigation={true}
              pagination={{
                clickable: true,
                el: `.bullets-${index}`,
              }}
              modules={[Pagination, Navigation]}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              className="room-button"
            >
              {item.images.map((itm, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="relative w-full aspect-[4/3.5] overflow-hidden">
                      <Image
                        src={itm}
                        alt="image"
                        fill
                        className="object-cover shadow-2xl shadow-transparent hover:scale-105 duration-500"
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            {/* <button
              className={`bullets-${index} mt-5 NearBy-Portfolio`}
            ></button> */}
          </div>

          {/* <div className="mt-4 flex justify-center gap-4">
              <div
                className={`active:scale-50 duration-300 cursor-pointer prev-${index}`}
              >
                <CircleLeftArrow />
              </div>
              <div
                className={`active:scale-50 duration-300 cursor-pointer next-${index}`}
              >
                <CircleRightArrow />
              </div>
            </div> */}
        </div>
      ))}
    </>
  );
};

export default ImgSlider;
