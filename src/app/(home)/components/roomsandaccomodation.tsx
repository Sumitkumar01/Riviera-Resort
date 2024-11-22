"use client";
import { RoomsAndAccomodationProps } from "@/@types/types";
import Sectionheading from "@/components/sectionheading/sectionheading";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Roomscard from "@/components/cards/roomscard";

function Roomsandaccomodation({
  title,
  subtitle,
  items,
  button,
}: RoomsAndAccomodationProps) {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4">
        <Sectionheading title={title} subtitle={subtitle} />

        <div className="md:mt-16 mt-6 flex flex-col gap-6">
          {items.map((item, index) => (
            <Roomscard {...item} index={index} key={index} />
          ))}
        </div>

        {button && (
          <div className="flex justify-center mt-10 ">
            <Link
              href={"/rooms"}
              className="border border-[#040404] bg-[#040404] text-md px-8 py-2 text-white rounded-sm hover:bg-transparent hover:text-[#040404] duration-300 active:scale-75 hover:scale-105"
            >
              VIEW ALL ROOMS
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default Roomsandaccomodation;
