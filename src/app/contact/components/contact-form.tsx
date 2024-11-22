"use client";

import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { FaMessage, FaUserLarge } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

function ContactForm() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [formRes, setFormRes] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormRes(true);
    try {
      const { data } = await axios.post(
        `https://nexon.eazotel.com/eazotel/addcontacts`,
        {
          Domain: "rivieraresort", // Replace with your actual domain value
          email: userEmail,
          Name: userName,
          Contact: userPhone,
          // Subject: userMessage,
          Description: userMessage,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.Status) {
        setFormRes(true);
        setUserName("");
        setUserEmail("");
        setUserMessage("");
        setUserPhone("");
        setFormRes(false);
        alert("message sent");
      } else {
        setFormRes(false);
        alert("somethin wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="grid gap-4 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="flex flex-col gap-3">
            <h2 className="text-[#040404] md:text-3xl text-2xl font-semibold">
              Contact Details
            </h2>

            <div className="grid grid-cols-2 text-[#040404] font-semibold md:grid-cols-3 lg:grid-cols-4">
              Reception:
              <Link
                href={"tel:+917817897700"}
                className="flex gap-5 text-md text-[#040404] font-normal"
              >
                <span className="text-[#040404] font-semibold">+917817897700</span>
              </Link>
            </div>

            <div className="grid grid-cols-2 text-[#040404]  font-semibold md:grid-cols-3 lg:grid-cols-4 ">
              For Front Office:
              <Link
                href={"tel:+919520444850"}
                className="flex gap-5 text-md text-[#040404] font-normal"
              >
                <span className="text-[#040404]  font-semibold">+919520444850</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 text-[#040404]  font-semibold md:grid-cols-3 lg:grid-cols-4 ">
              Email:
              <Link
                href={"mailto:info@rivieraresortrishikesh.com"}
                className="flex gap-5 text-md text-[#040404] font-normal"
              >

                <span className="text-[#040404]  font-semibold">info@rivieraresortrishikesh.com</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-8">
            <h2 className="text-[#040404] font-semibold md:text-3xl text-2xl">
              Address
            </h2>
            <p className="text-md text-[#040404]">
              <Link href={"/"} className="  font-semibold">
                Rattanpani, Neelkanth Road, Rishikesh, India
              </Link>
            </p>
          </div>
        </div>
        <div className="lg:col-span-2">
          <form
            onSubmit={handleSubmit}
            className="p-4 md:p-5 bg-[#040404] rounded-sm"
          >
            <h2 className="text-2xl font-bold text-[white] capitalize ">
              Get in Touch
            </h2>
            <div className="mt-5 flex flex-col gap-5">
              {/* Name And Phone*** */}
              <div className="grid sm:grid-cols-1 gap-5 w-full">
                <div className="bg-white py-4 px-3">
                  <div className="flex gap-4 items-center">
                    <div>
                      <FaUserLarge className="text-[1.6rem] text-[#040404]" />

                    </div>
                    <input
                      type="text"
                      required
                      text-text-light
                      className="w-full h-full text-text-light bg-transparent outline-none text-md font-normal"
                      placeholder="Your Name*"
                      value={userName}
                      onChange={(e) => {
                        setUserName(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="bg-white py-4 px-3">
                  <div className="flex gap-4 items-center">
                    <div>
                      <FaPhoneAlt className="text-[1.6rem] text-[#040404]" />
                    </div>
                    <input
                      type="number"
                      required
                      className="w-full h-full text-text-light bg-transparent outline-none text-md font-normal"
                      placeholder="Phone Number*"
                      value={userPhone}
                      onChange={(e) => {
                        setUserPhone(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Mail and Addres** */}
              <div className="grid sm:grid-cols-1 gap-5 w-full">
                <div className="bg-white py-4 px-3">
                  <div className="flex gap-4 items-center">
                    <div>
                      <IoMail className="text-[1.6rem] text-[#040404]" />
                    </div>
                    <input
                      type="email"
                      required
                      className="w-full h-full text-text-light bg-transparent outline-none text-md font-normal"
                      placeholder="Email*"
                      value={userEmail}
                      onChange={(e) => {
                        setUserEmail(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Message**** */}
              <div className="w-full">
                <div className="bg-white py-4 px-3">
                  <div className="flex gap-4">
                    <div>
                      <FaMessage className="text-[1.6rem] text-[#040404] mt-1" />
                    </div>
                    <textarea
                      required
                      rows={8}
                      className="w-full h-full  bg-transparent outline-none text-md font-normal"
                      placeholder="Message*"
                      value={userMessage}
                      onChange={(e) => {
                        setUserMessage(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3">
              {formRes ? (
                <button className="border border-[#ffffff] bg-[#ffffff] text-md px-8 py-2 text-[#474747] rounded-sm hover:bg-transparent hover:border-[white] hover:text-[white] duration-300 active:scale-75 ">
                  Loading.....
                </button>
              ) : (
                <button className="border  border-[#ffffff] bg-[#ffffff] w-full text-md px-8 py-2 text-[#474747] rounded-sm hover:bg-transparent hover:border-[white] hover:text-[white] duration-300 active:scale-75 ">
                  SUBMIT
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      <div className="mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.5910422607894!2d78.37944707501278!3d30.105896615657517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390916ab035c809d%3A0x6db0b9f6979eefa!2sRiviera%20Resort%20By%20Live%20Inn%20Rishikesh!5e0!3m2!1sen!2sin!4v1719222874852!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactForm;
