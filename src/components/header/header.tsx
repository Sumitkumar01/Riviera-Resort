"use client";

import { HeaderProps } from "@/@types/types";
// import { FillPhone } from "@/icons/icons";
// import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Mobilenav from "./mobile-nav";
import { usePathname } from "next/navigation";
import Logo from "../../../public/RivieraLogo.png"
function Header({ links, contact, logo }: HeaderProps) {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => { }, [pathname]);
  return (
    <div className=" flex justify-center items-center py-4 text-base font-medium leading-6 text-center text-[#474747] uppercase  bg-[#040404] px-4">
      {/* <div className=" flex justify-center items-center py-4 text-base font-medium leading-6 text-center text-[#474747] uppercase border-b-4 border-[#FFFFFF] border-solid bg-[#040404] px-4"> */}

      <div className="max-md:hidden flex gap-5 justify-between w-full max-w-[1280px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-5 justify-between max-md:flex-wrap w-full max-md:max-w-full">
          <Link href={"/"}>
            <Image
              src={Logo}
              alt="logo"
              // fill
              className="object-contain"
            />
          </Link>


          <div className="flex gap-5 justify-between my-auto max-md:flex-wrap max-md:max-w-full">
            <Link href="/" className={`${pathname == "/" ? "bg-[#FFFFFF] text-[#474747]" : "text-[#ffffff]"} cursor-pointer flex rounded-sm relative px-3 py-1 hover:text-[#474747]  uppercase font-medium before:content-[''] before:bg-[#FFFFFF]  before:absolute before:w-0 before:h-full before:top-0 before:left-0 before:-z-10 hover:before:w-full hover:before:rounded-sm before:duration-500 hover:scale-90 duration-300`}>Home</Link>
            <Link href="/about" className={`${pathname == "/about" ? "bg-[#FFFFFF] text-[#474747]" : "text-[#ffffff]"} cursor-pointer flex rounded-sm relative px-3 py-1 hover:text-[#474747]  uppercase font-medium before:content-[''] before:bg-[#FFFFFF] before:absolute before:w-0 before:h-full before:top-0 before:left-0 before:-z-10 hover:before:w-full hover:before:rounded-sm before:duration-500 hover:scale-90 duration-300`} >About Us</Link>
            <Link href="/rooms" className={`${pathname == "/rooms" ? "bg-[#FFFFFF] text-[#474747]" : "text-[#ffffff]"} cursor-pointer flex rounded-sm relative px-3 py-1 hover:text-[#474747]  uppercase font-medium before:content-[''] before:bg-[#FFFFFF] before:absolute before:w-0 before:h-full before:top-0 before:left-0 before:-z-10 hover:before:w-full hover:before:rounded-sm before:duration-500 hover:scale-90 duration-300`} >Rooms</Link>
            <Link href="/gallery" className={`${pathname == "/gallery" ? "bg-[#FFFFFF] text-[#474747]" : "text-[#ffffff]"} cursor-pointer flex rounded-sm relative px-3 py-1 hover:text-[#474747]  uppercase font-medium before:content-[''] before:bg-[#FFFFFF] before:absolute before:w-0 before:h-full before:top-0 before:left-0 before:-z-10 hover:before:w-full hover:before:rounded-sm before:duration-500 hover:scale-90 duration-300`} >Gallery</Link>
            <Link href="/contact" className={`${pathname == "/contact" ? "bg-[#FFFFFF] text-[#474747]" : "text-[#ffffff]"} cursor-pointer flex rounded-sm relative px-3 py-1 hover:text-[#474747]  uppercase font-medium before:content-[''] before:bg-[#FFFFFF] before:absolute before:w-0 before:h-full before:top-0 before:left-0 before:-z-10 hover:before:w-full hover:before:rounded-sm before:duration-500 hover:scale-90 duration-300`} >Contact Us</Link>
          </div>

          <Link href={"https://engine.eazotel.com/?id=b3818c66-af22-4bb4-8bb6-922fb127d974&hid=35513674"} target="_blank" className="justify-center px-4 py-2 my-auto bg-[#FFFFFF] rounded-sm">
            Book Now
          </Link>
        </div>
      </div>

      <div className="md:hidden w-full">
        <Mobilenav links={links} open={open} contact={contact} setOpen={setOpen} />
      </div>
    </div>
  );
}

export default Header;
