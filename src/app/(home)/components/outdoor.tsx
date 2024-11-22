"use client";

import { NearbyPlacesProps } from "@/@types/types";
import Sectionheading from "@/components/sectionheading/sectionheading";
import Image from "next/image";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
function Outdoor() {
  const OutDurActivities = {
    title: "Outdoor Activities",
    outdoor: true,
    items: [
      {
        title: "River Rafting",
        para: `Rishikesh is renowned for its thrilling river rafting experiences. Conquer the mighty Ganga as you navigate through exhilarating rapids. It's an affordable and unforgettable adventure that promises a rush of adrenaline.`,
        image: {
          src: "https://www.easemytrip.com/travel/img/rafting-in-rishikesh.jpg",
          alt: "document",
        },
      },
      {
        title: "Camping",
        para: `Imagine camping right on the banks of the Ganges River. Surrounded by serene landscapes, green meadows, and fresh breezes, your stay becomes a unique and memorable experience. Wake up to the soothing sounds of the river and embrace the tranquility of nature.`,
        image: {
          src: "https://rishikeshdaytour.com/blog/wp-content/uploads/2021/07/A-Guide-To-Find-The-Best-Campsite-Location-To-Pitch-Tent-in-Rishikesh.jpg",
          alt: "document",
        },
      },
      {
        title: "Bungee Jumping",
        para: `Take a leap of faith with bungee jumping, soaring through the sky surrounded by the breathtaking Himalayan landscape. Feel the wind rush past you as you dive from a great height, creating an exhilarating and unforgettable memory.`,
        image: {
          src: "https://www.jumpinheights.com/assets/images/gallery/bungy/05.jpg",
          alt: "document",
        },
      },
      {
        title: "River Rafting",
        para: `Rishikesh is renowned for its thrilling river rafting experiences. Conquer the mighty Ganga as you navigate through exhilarating rapids. It's an affordable and unforgettable adventure that promises a rush of adrenaline.`,
        image: {
          src: "https://www.easemytrip.com/travel/img/rafting-in-rishikesh.jpg",
          alt: "document",
        },
      },
      {
        title: "Camping",
        para: `Imagine camping right on the banks of the Ganges River. Surrounded by serene landscapes, green meadows, and fresh breezes, your stay becomes a unique and memorable experience. Wake up to the soothing sounds of the river and embrace the tranquility of nature.`,
        image: {
          src: "https://rishikeshdaytour.com/blog/wp-content/uploads/2021/07/A-Guide-To-Find-The-Best-Campsite-Location-To-Pitch-Tent-in-Rishikesh.jpg",
          alt: "document",
        },
      },
      {
        title: "Bungee Jumping",
        para: `Take a leap of faith with bungee jumping, soaring through the sky surrounded by the breathtaking Himalayan landscape. Feel the wind rush past you as you dive from a great height, creating an exhilarating and unforgettable memory.`,
        image: {
          src: "https://www.jumpinheights.com/assets/images/gallery/bungy/05.jpg",
          alt: "document",
        },
      },
      // {
      //   title: "Pandav Leni",
      //   image: {
      //     src: "https://media-cdn.tripadvisor.com/media/photo-s/11/d6/c1/40/complete-view-of-the.jpg",
      //     alt: "document",
      //   },
      // },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <Sectionheading title={OutDurActivities.title} />

      <div className="flex justify-center  md:mt-10 mt-4 max-w-[1000px]  mx-auto">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          speed={900}
          pagination={{
            clickable: true,
            el: ".NearBy-Portfolio",
          }}
          navigation={true}
          modules={[Pagination,Navigation]}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },

            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
          // className={`w-full md:h-[${outdoor == true ? "600px" : "full"}]`}
          className={`w-full md:h-[${"full"}] room-button btn-position`}
        >
          {OutDurActivities.items.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="flex flex-col p-2.5 rounded-sm text-center bg-zinc-100 h-full">
                  <Image
                    loading="lazy"
                    src={item.image.src}
                    alt={item.image.alt}
                    width={100}
                    height={100}
                    className="w-full aspect-[1.01] object-cover"
                  />
                  <div className="flex flex-col py-4 gap-2 px-1 bg-white h-full">
                    <div className="text-2xl font-bold leading-7 text-[#251605]">
                      {item.title}
                    </div>
                    <div className="mt-1.5 text-base leading-7 text-[#474747]">
                      {item.para}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/*<button className="NearBy-Portfolio mt-7"></button>*/}
    </div>
  );
}

export default Outdoor;
