
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { CircleLeftArrow, CircleRightArrow, RightArrow } from "@/icons/icons";

import GalleryBackground from "../../../public/Photos/DSC01340-HDR_11zon.webp";


import Banner from "@/components/banner/banner";
import Nearby from "../(home)/components/nearby";
import Outdoor from "../(home)/components/outdoor";
import ImgSlider from "./components/ImgSlider";

import { Metadata } from "next";



export const metadata: Metadata = {
  title: "Riviera Resort Rishikesh Gallery | Scenic Views & Luxurious Spaces",
  description: "Browse the gallery of Riviera Resort Rishikesh. Witness the stunning natural beauty, elegant interiors, and serene surroundings through our curated collection.",
  keywords:["Riviera Resort gallery","Resort photos Rishikesh","Scenic views Rishikesh","Luxury interiors Rishikesh","Resort landscapes Rishikesh"],
  alternates: {
    canonical:"https://rivierastrokes.com/gallery/",
    languages: {
      "en-US": "https://rivierastrokes.com/gallery/",
    }
  },
  openGraph: {
    title: "Riviera Resort Rishikesh Gallery | Scenic Views & Luxurious Spaces",
  description: "Browse the gallery of Riviera Resort Rishikesh. Witness the stunning natural beauty, elegant interiors, and serene surroundings through our curated collection.",
    url: "https://rivierastrokes.com/gallery/",
    siteName: "Riviera Resort Rishikesh",
    
    images: [
      {
        url: "https://rivierastrokes.com/gallery/og-image.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};
const BannerData = {
  subtitle: "",
  title: "",
  image: {
    src: GalleryBackground,
    alt: "event-bg-image",
  },
};






function gallery() {
  return (
    <section>
      <div>
        <Banner {...BannerData} />
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:gap-16 gap-6 py-12">
        <ImgSlider />
      </div>

      {/* <div className="max-w-[1600px] mx-auto">
        <Outdoor />
      </div>


      <div className="md:py-12 py-6">
        <Nearby />
      </div> */}
    </section>
  );
}

export default gallery;
