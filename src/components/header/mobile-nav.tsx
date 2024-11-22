import Link from "next/link";
import React, { useState } from "react";
import { FillPhone } from "@/icons/icons";
import { motion } from "framer-motion";
import Logo from "../../../public/RivieraLogo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Mobilenav({ links, open, contact, setOpen }: any) {
  const router = useRouter();

  const handleClick = (href: any) => {
    setOpen(!open);
    router.push(`/${href}`); // Use template literal for paths
  };
  const handleCloseClick = () => {
    setOpen(!open);
  };
  return (
    <div className="flex justify-between items-center w-full">
      <div
        className="cursor-pointer z-50 flex flex-col gap-2 lg:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <>
            <motion.span
              initial={{
                rotate: 0,
              }}
              animate={{
                rotate: 45,
                x: 0,
                y: 11,
              }}
              className="w-7 h-[0.2rem] bg-[#251605]"
            ></motion.span>
            <motion.span
              className="w-7  h-[0.2rem] bg-[#251605]"
              initial={{
                rotate: 0,
              }}
              animate={{
                rotate: -45,
              }}
            ></motion.span>
          </>
        ) : (
          <>
            <motion.span className="w-7 h-[0.2rem] bg-[#C6A15B]"></motion.span>
            <motion.span className="w-7 h-[0.2rem] bg-[#C6A15B]"></motion.span>
          </>
        )}
      </div>
      <Link
        href={"/"}
        className="relative flex justify-center items-center max-w-64 w-full aspect-[4/1]"
      >
        <Image src={Logo} alt={"logo"} className="object-contain" />
      </Link>

      <div className="block lg:hidden">
        <Link href={`tel:${contact.href}`}>
          <FillPhone color="#C6A15B" />
          <span className="sr-only">call to {contact.href}</span>
        </Link>
      </div>

      {open && (
        <div className="fixed top-0 left-0 w-full h-screen bg-[#C6A15B] z-40 flex justify-center items-center">
          <div className="flex flex-col gap-3 items-center">
            <Link
              href="/"
              onClick={handleCloseClick}
              className={
                "relative px-3 py-1 text-[#251605] uppercase font-medium rounded-md before:content-[''] before:bg-secondary before:absolute before:w-0 before:h-full before:top-0 before:left-0 before:-z-10 hover:before:w-full hover:before:rounded-sm before:duration-500 "
              }
            >
              <span>Home</span>
            </Link>
            <Link
              href="/about"
              onClick={handleCloseClick}
              className={`relative px-3 py-1   text-[#251605] uppercase font-medium rounded-md before:content-[''] before:bg-secondary before:absolute before:w-0 before:h-full before:top-0 before:left-0 before:-z-10 hover:before:w-full hover:before:rounded-sm before:duration-500 `}
            >
              
              <span>About Us</span>
            </Link>
            <Link
              href="/rooms"
              onClick={handleCloseClick}
              className={`relative px-3 py-1   text-[#251605] uppercase font-medium rounded-md before:content-[''] before:bg-secondary before:absolute before:w-0 before:h-full before:top-0 before:left-0 before:-z-10 hover:before:w-full hover:before:rounded-sm before:duration-500 `}
            >
              <span>Rooms</span>
            </Link>
            <Link
              href="/gallery"
              onClick={handleCloseClick}
              className={`relative px-3 py-1   text-[#251605] uppercase font-medium rounded-md before:content-[''] before:bg-secondary before:absolute before:w-0 before:h-full before:top-0 before:left-0 before:-z-10 hover:before:w-full hover:before:rounded-sm before:duration-500 `}
            >
              <span>Gallery</span>
            </Link>
            <Link
              href="/contact"
              onClick={handleCloseClick}
              className={`relative px-3 py-1   text-[#251605] uppercase font-medium rounded-md before:content-[''] before:bg-secondary before:absolute before:w-0 before:h-full before:top-0 before:left-0 before:-z-10 hover:before:w-full hover:before:rounded-sm before:duration-500 `}
            >
              <span>Contact</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mobilenav;
