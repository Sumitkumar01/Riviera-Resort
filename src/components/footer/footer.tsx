"use client"
import { FooterProps } from "@/@types/types";
import { FillMail, FillPhone, RightArrow } from "@/icons/icons";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import facebook from "../../../public/Photos/facebook.png";
import instagram from "../../../public/Photos/instagram.png";
import tripadvisor from "../../../public/Photos/tripadvisor.png";
import { FaPhone, FaWhatsapp } from "react-icons/fa6";

function Footer({ logo, description, getInTouch }: FooterProps) {


  const host = "https://eazotel.eazotel.com/api/dashboard/editnewsletter"

  const [email, setEmail] = useState("");

  const handleNewsletter = async () => {

    const data = {
      "Domain": 'rivieraresort',
      "email": email,
    }
    try {
      const response = await fetch(host, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',

        },
        body: JSON.stringify(data)
      });

    } catch (error) {
      console.log(error);
    };

    setEmail("");
  }


  return (
    <footer className="bg-[#040404]">
      <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto p-4  md:py-6">
        {/* logo and description**** */}
        <div>
          <div className="max-w-60 md:mx-0 mx-auto text-[#fff]">
            <div className="relative w-full aspect-[4/1.8] bg-[#040404]">
              <Link href={"/"}>
                <Image
                  src={logo?.src}
                  alt={logo?.alt}
                  fill
                  className="object-contain"
                />
              </Link>
            </div>
            <p className="text-center text-md mt-4">{description}</p>
          </div>
        </div>

        {/* get in touch details***** */}
        <div className="flex flex-col gap-5 text-">
          <h2 className="text-2xl font-bold text-[#ffffff]">Get In Touch</h2>
          <div className="flex flex-col gap-3 text-[#fff]">
            <Link
              target="_blank"
              href={getInTouch.address.href}
              className="text-md flex items-center gap-2"
            >
              {getInTouch.address.label}
            </Link>

            <Link
              href={`mailto:${getInTouch.mail.href}`}
              className="text-md flex items-center gap-2 hover:scale-110 duration-300 origin-left"
            >
              <FillMail width={25} color="#fff" />
              {getInTouch.mail.label}
            </Link>
            <Link
              href={`tel:${getInTouch.contact1.href}`}
              className="text-md flex items-center gap-2 hover:scale-110 duration-300 origin-left"
            >
              <FillPhone color="#fff" />
              {getInTouch.contact1.label}
            </Link>
            <Link
              href={`tel:${getInTouch.contact2.href}`}
              className="text-md flex items-center gap-2 hover:scale-110 duration-300 origin-left"
            >
              <FillPhone color="#fff" />
              {getInTouch.contact2.label}
            </Link>
          </div>
        </div>

        {/* newsletter and social links**** */}
        <div className="flex lg:justify-end gap-5">
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl md:text-start text-center font-bold text-[#ffffff]">
              Subscribe Our Newsletter
            </h2>

            <div className="flex border rounded-sm shadow-md border-[#fff]/50  ">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 outline-none bg-transparent placeholder:text-[#fff] text-white"
                placeholder="Your Email Address*"
              />
              <div onClick={handleNewsletter} className="cursor-pointer border z-20">
                <RightArrow />
              </div>
            </div>

            <div className="flex justify-start gap-3 items-center">
              <Link
                href={"https://www.facebook.com/"}
                target="_blank"
                rel="noreferrer"
                className="hover:-translate-y-1 hover:scale-110 duration-300 transition-all"
              >
                <Image src={facebook} alt="facebook" width={35} height={40} />
              </Link>
              <Link
                href={"https://www.instagram.com/"}
                target="_blank"
                rel="noreferrer"
                className="hover:-translate-y-1 hover:scale-110 duration-300 transition-all"
              >
                <Image src={instagram} alt="facebook" width={35} height={40} />
              </Link>
              <Link
                href={
                  "https://www.tripadvisor.in/"
                }
                target="_blank"
                rel="noreferrer"
                className="hover:-translate-y-1 hover:scale-110 duration-300 transition-all"
              >
                <Image
                  src={tripadvisor}
                  alt="facebook"
                  width={35}
                  height={40}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex lg:flex-row flex-col gap-6 font-medium text-[#fff] justify-between p-6 border-t-2 border-t-[#ffffff]">
        <div className="flex lg:flex-row items-center flex-col gap-4 lg:items-center text-sm lg:order-1 order-2">
          <div className="flex items-center gap-3">
            <p className="flex gap-3 text-center">
              {" "}
              &copy; 2024 Riviera Resort & Hotel{" "}
              <span className="lg:block hidden ">|</span>{" "}
            </p>
            <p className="flex gap-3 text-center">
              All Rights Reserved <span className="lg:block hidden ">|</span>
            </p>
          </div>
          <Link href={"https://www.eazotel.com"} target="_blank">
            Developed By Eazotel
          </Link>
        </div>
        <div className="flex lg:flex-row flex-col justify-center items-center gap-4 lg:items-center text-sm lg:order-2 order-1">
          <Link href={"/privacy-policy"} className="flex gap-3">
            Privacy Policy <span className="hidden lg:block">|</span>
          </Link>
          <Link href={"/terms-condition"} className="flex gap-3">
            Terms & Conditions <span className="hidden lg:block">|</span>
          </Link>
          <Link href={"/refund-policy"}>Refund Policy</Link>
        </div>
      </div>


      <Link
        href={`tel:${getInTouch.contact1.href}`}
        target="_blank"
        className="whatsapp-button inline-block fixed bottom-[25px] left-[20px] w-[50px] h-[50px] bg-[#040404] p-[12px]  rounded-full text-white z-10 text-[25px] overflow-hidden"
      >
        <span className="sr-only">whats app</span> <FaPhone className="transform " />
      </Link >

      {/* Whats app******** */}
      <Link
        href={`https://wa.me/${getInTouch.contact1.href}`}
        target="_blank"
        className="whatsapp-button inline-block fixed bottom-[20px] right-[20px] w-[50px] h-[50px] bg-[#4DC251] p-[12px]  rounded-full text-white z-10 text-[25px] overflow-hidden"
      >
        <span className="sr-only">whats app</span> <FaWhatsapp />
      </Link >
    </footer>
  );
}

export default Footer;
