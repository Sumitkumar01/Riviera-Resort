import Banner from "@/components/banner/banner";
import React from "react";
import Historyofwabisabi from "./components/historyofwabisabi";
import Riviera1 from "../../../public/Photos/DSC01693_11zon.jpg";
import Riviera2 from "../../../public/Photos/ResortView/DSC01654-HDR_11zon.webp";
import AboutBackground from "../../../public/Photos/ResortView/DSC01391-HDR_11zon.webp";
import Makeroomforadventure from "../(home)/components/makeroomforadventure";
import Img from "../../../public/images/HomeBanner.png";
import { Metadata } from "next";
import Nearby from "../(home)/components/nearby";
import Outdoor from "../(home)/components/outdoor";



export const metadata: Metadata = {
  title: "About Riviera Resort | Discover Our Story in Rishikesh",
  description: "Learn about Riviera Resort Rishikesh — a haven of luxury, tranquility, and hospitality. Explore our mission to provide the finest experiences amidst nature.",
  keywords: ["About Riviera Resort", "Resort history in Rishikesh", "Luxury hospitality Rishikesh", "Peaceful stays in Rishikesh", "Riviera Resort mission"],
  alternates: {
    canonical: "https://rivierastrokes.com/about/",
    languages: {
      "en-US": "https://rivierastrokes.com/about/",
    }
  },
  openGraph: {
    title: "About Riviera Resort | Discover Our Story in Rishikesh",
    description: "Learn about Riviera Resort Rishikesh — a haven of luxury, tranquility, and hospitality. Explore our mission to provide the finest experiences amidst nature.",
    url: "https://rivierastrokes.com",
    siteName: "Riviera Resort Rishikesh",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: "https://rivierastrokes.com/about/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const BannerData = {
  subtitle: "",
  title: "",
  image: {
    src: AboutBackground,
    alt: "event-bg-image",
  },
};

const BannerDataTwo = {
  subtitle: "",
  video: {
    src: "",
    alt: "bg-image",
  },
};

const HistoryData = {
  title: "Welcome to Riviera Resort Rishikesh - The Pinnacle of Luxury and Tranquility",
  subtitle:
    "At Riviera Resort Rishikesh, we cater to individual travelers, adventure seekers, and holiday enthusiasts, ensuring a bespoke and unforgettable stay for every guest. Nestled at the foot of the Garhwal Himalayas, our resort offers an unparalleled blend of luxury, comfort, and natural beauty.",

  image1: {
    src: Riviera1,
    alt: "riviera-img",
  },
  image2: {
    src: Riviera2,
    alt: "riviera-img",
  },
  paraone:
    "Elegant, exclusive and in its essence, set at a majestic height with infinity pool, landscape garden and breath-taking views, Wabi-Sabi resort is just 4.5kms from Mumbai-Nashik Highway. The Idyllic location into the laps of nature combining modern luxury is renowned for its relaxation and quite seclusion. The mesmerising peaceful surroundings with comfort, ample of amenities and the delectable dishes created by our celebrated chefs and serve to make your stay with us joyful.",

  paratwo:
    "There is no better way to experience thrills and joys of Igatpuri that with at Wabi-Sabi Resort. Allow yourself to indulge in the most astonishing space and go back relaxed, happy and energetic!",

  link: {
    label: "Book now",
    href: "/",
  },
};

const OutDurActivities = {
  title: "Outdoor Activities",
  outdoor: true,
  items: [
    {
      title: "River Rafting",
      para: `Rishikesh is the "ultimate destination" for river rafting or white water rafting in India. Conquer the mighty "River Ganga" as you navigate through thrilling rapids and feel the rush of adrenaline. It's an "affordable and unforgettable" experience.`,
      image: {
        src: "https://www.easemytrip.com/travel/img/rafting-in-rishikesh.jpg",
        alt: "document",
      },
    },
    {
      title: "Camping",
      para: `Picture yourself camping right on the banks of the "Ganges River". The serene environs, green meadows, and fresh breeze create a unique and memorable stay. Wake up to the soothing sound of the river and embrace the tranquility of nature.`,
      image: {
        src: "https://rishikeshdaytour.com/blog/wp-content/uploads/2021/07/A-Guide-To-Find-The-Best-Campsite-Location-To-Pitch-Tent-in-Rishikesh.jpg",
        alt: "document",
      },
    },
    {
      title: "Bungee Jumping",
      para: `Take a leap of faith and soar into the sky with bungee jumping. Feel the wind rush past you as you dive from a height, surrounded by the breathtaking Himalayan landscape.`,
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
}

function page() {
  return (
    <section>
      <div>
        <Banner {...BannerData} />
      </div>

      <div className="py-12">
        <Historyofwabisabi {...HistoryData} />
      </div>

      {/* <div className="max-w-[1600px] mx-auto">
        <Banner {...BannerDataTwo} />
      </div> */}
      <div className="max-w-[1600px] mx-auto">
        <Outdoor />
      </div>


      <div className="py-12">
        <Makeroomforadventure />
      </div>
    </section>
  );
}

export default page;
