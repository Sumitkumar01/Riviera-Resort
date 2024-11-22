"use client";

import { NearbyPlacesProps } from "@/@types/types";
import Sectionheading from "@/components/sectionheading/sectionheading";
import Image from "next/image";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

function Nearby() {
  const NearByData = {
    title: "Explore Nearby Attractions",
    outdoor: false,
    items: [
      {
        title: "Triveni Ghat",
        head: "Experience Spiritual Serenity",
        // para: "Visit Triveni Ghat for the enchanting Ganga Aarti, a spiritual experience by the riverbank.",
        para: "Experience the profound evening Aarti ceremony at this bustling ghat.",
        distance: "12 km from Riviera Resort",
        image: {
          src: "https://www.trodly.com/pictures/attraction/1802.jpg",
          alt: "document",
        },
      },
      {
        title: "Laxman Jhula",
        head: "Iconic Suspension Bridge",
        // para: "Walk across the famous Laxman Jhula and enjoy stunning views of the Ganges and surrounding hills.",
        para: "A must-see iconic bridge with stunning river views and historical significance.",
        distance: "5 km from Riviera Resort",
        image: {
          src: "https://www.chardhamtour.in/blog/wp-content/uploads/2020/01/Laxman-Jhula-Rishikesh.jpg",
          alt: "document",
        },
      },
      {
        title: "Parmarth Niketan Ashram",
        head: "Peaceful Retreat",
        // para: "Discover the tranquility of Parmarth Niketan Ashram, offering yoga, meditation, and spiritual discourses",
        para: "A spiritual haven known for its enlightening Ganga Aarti and yoga classes.",
        distance: "4 km from Riviera Resort",
        image: {
          src: "https://wandersky.in/wp-content/uploads/2023/03/parmath-niketan-rishikesh.jpg",
          alt: "document",
        },
      },
      {
        title: "Neer Garh Waterfall",
        head: "Nature's Wonder",
        para: "Hike to the mesmerizing Neer Garh Waterfall and take a dip in its cool, refreshing waters",
        distance: "6 km from Riviera Resort",
        image: {
          src: "https://wandersky.in/wp-content/uploads/2023/03/neer-waterfall-in-rishikesh.jpg",
          alt: "document",
        },
      },
      {
        title: "Ram Jhula",
        head: "Historic Bridge",
        para: "Explore the historic Ram Jhula and its vibrant market, brimming with shops and cafes.",
        distance: "4 km from Riviera Resort",
        image: {
          src: "https://rishikesh.app/te/attractions/ram-jhula/ram-jhula-04.jpg",
          alt: "document",
        },
      },
      {
        title: "Rajaji National Park",
        head: "Wildlife Adventure",
        para: "Embark on a thrilling safari at Rajaji National Park, home to diverse wildlife and lush greenery.",
        distance: "10 km from Riviera Resort",
        image: {
          src: "https://rishikeshdaytour.com/blog/wp-content/uploads/2022/09/Chilla-Range.jpg",
          alt: "document",
        },
      },
      {
        title: "The Beatles Ashram",
        head: "Musical Legacy",
        para: "Visit the ashram where The Beatles stayed, now an inspiring site with graffiti art and meditation spots.",
        distance: "7 km from Riviera Resort",
        image: {
          src: "https://breathedreamgo.com/wp-content/uploads/2020/06/Beatles-Ashram-MW-5.jpg",
          alt: "document",
        },
      },
      {
        title: "Vashishta Cave",
        head: "Ancient Meditation Site",
        para: "Explore the ancient Vashishta Cave, a serene spot for meditation along the banks of the Ganges.",
        distance: "8 km from Riviera Resort",
        image: {
          src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/b4/fd/7e/arundhati-gufa.jpg?w=1200&h=-1&s=1",
          alt: "document",
        },
      },
      // {
      //   title: "Vashishta Cave",
      //   head: "Ancient Meditation Site",
      //   para: "Explore the ancient Vashishta Cave, a serene spot for meditation along the banks of the Ganges.",
      //   distance: "8 km from Riviera Resort",
      //   image: {
      //     src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/35/48/57/wanderer-gourav-bnqkjirhf1s.jpg?w=1200&h=-1&s=1",
      //     alt: "document",
      //   },
      // },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <Sectionheading title={NearByData.title} />

      <div className="flex justify-center  md:mt-10 mt-4 max-w-[1000px]  mx-auto">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          speed={900}
          // loop={true}
          // autoplay={{
          //   delay: 1000,
          // }}
          // pagination={{
          //   clickable: true,
          //   el: ".NearBy-Portfolio",
          // }}
          navigation={true}
          modules={[Pagination, Navigation]}
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
          {NearByData.items.map((item, index) => {
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
                      <strong>{item.head}</strong>: {item.para}
                    </div>
                    <div className="mt-1.5 text-base leading-7 text-[#474747]">
                      <strong>Distance</strong>: {item.distance}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* <button className="NearBy-Portfolio mt-7"></button> */}
    </div>
  );
}

export default Nearby;
