import { HistoryProps, ListDataType } from "@/@types/types";
import Sectionheading from "@/components/sectionheading/sectionheading";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Historyofwabisabi({
  title,
  subtitle,
  image1,
  image2,
  paraone,
  paratwo,
  link,
}: HistoryProps) {

  const datas: ListDataType[] = [
    {
      "head": "Customized Holidays:",
      "para": "Every traveller is unique, and so are their holiday needs. Whether you're a family, a couple, or a group of friends, we tailor your vacation to your preferences. From peaceful retreats to thrilling adventures, we craft experiences that match your desires."
    },
    {
      "head": "Exclusive Privileges:",
      "para": "As our guest, enjoy access to a world of personalized services and curated itineraries. Our special amenities and dedicated team ensure your stay is nothing short of extraordinary."
    },
    {
      "head": "Memorable Experiences:",
      "para": "A vacation at Riviera Resort is more than just a trip; it's a collection of cherished memories. Whether you're exploring the natural wonders of Rishikesh or relaxing by the riverside, we strive to make every moment memorable."
    },
    {
      "head": "Clubbing and Entertainment:",
      "para": " For those who love the nightlife, our resort offers a vibrant scene. Dance to the rhythm of the Ganges, meet new friends, and enjoy the best of Rishikesh’s entertainment. Our resort is a social hub where you can unwind and have fun."
    },
    {
      "head": "Scenic Beauty:",
      "para": " Situated amidst the majestic Garhwal Himalayas, our resort boasts breathtaking views of the valley and the Ganges River. Wake up to the melody of birds, breathe in the crisp mountain air, and immerse yourself in nature’s tranquility."
    },
  ]
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Sectionheading title={title} subtitle={subtitle} />

      {/* <div className=" w-full aspect-[4/2.5] mt-6 overflow-hidden rounded-sm ">
        <Image
          src={image1.src}
          alt={image1.alt}
          fill
          className="object-cover hover:scale-110 duration-500"
        />
        <Image
          src={image2.src}
          alt={image2.alt}
          fill
          className="object-cover hover:scale-110 duration-500"
        />
      </div> */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-6 mb-6 overflow-hidden rounded-sm ">
        <Image src={image1.src}
          alt={image1.alt}
          className="object-cover w-full" />
        <Image src={image2.src}
          alt={image2.alt}
          className="object-cover w-full" />
      </div>

      <Sectionheading title={"What Sets Us Apart"} subtitle={""} />
      {/* <div className="flex flex-col gap-5 mt-4">
        {paraone && <p className="text-center text-[#474747]">{paraone}</p>}

        {paratwo && <p className="text-center text-[#474747]">{paratwo}</p>}
      </div> */}

      {datas.map((data, index) => (
        <div key={index} className="mt-5 flex">
          <li></li>
          <p className="text-[#474747]"><span className="font-semibold">{data.head}</span>{" "}{data.para}</p>
        </div>
      ))}





      <div className="flex justify-center mt-10 ">
        <Link
          href={link.href}
          className="border  border-[#040404] bg-[#040404] text-md px-8 py-2 text-white rounded-sm hover:bg-transparent hover:text-[#040404] duration-300 active:scale-75 hover:scale-105 uppercase"
        >
          {link.label}
        </Link>
      </div>
    </div>
  );
}

export default Historyofwabisabi;
