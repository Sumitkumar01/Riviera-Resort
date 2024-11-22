import Link from "next/link";
import React from "react";

function Makeroomforadventure() {
  return (
    <div className="max-w-4xl mx-auto bg-[#040404] p-4 md:p-10 rounded-sm">
      <div className="grid lg:grid-cols-6 gap-6 items-center py-4">
        <div className="md:col-span-4 flex flex-col gap-2">
          <h2 className="text-[white] md:text-start text-center text-3xl font-bold">
            Get in Touch with Us
          </h2>
          <p className="text-[white] md:text-start text-center">
            If you have made any plans in Rishikesh, don’t miss the chance, create ever-lasting memories.
          </p>
        </div>
        <div className="flex justify-center mt-4 md:col-span-2">
          <Link
            // href={link.href}
            href={"/"}
            className="border border-[#ffffff] bg-[#ffffff] text-[#474747]  text-md px-8 py-2 rounded-sm hover:bg-transparent hover:text-[#ffffff] duration-300 active:scale-75 hover:scale-105"
          >
            {/* {link.label} */}
            CONTACT US
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Makeroomforadventure;
