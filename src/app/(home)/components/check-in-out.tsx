import React from "react";

function Checkinout() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 bg-secondary">
      <div className="grid lg:grid-cols-2 items-center gap-4">
        <div className="flex md:flex-row flex-col gap-2">
          <div className="w-full flex flex-col gap-2">
            <span className="text-md font-semibold text-primary">CHECK IN</span>
            <input type="date" className="w-full p-2 rounded-sm outline-none" />
          </div>
          <div className="w-full flex flex-col gap-2">
            <span className="text-md font-semibold text-primary">
              CHECK OUT
            </span>
            <input type="date" className="w-full p-2 rounded-sm outline-none" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 items-center gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-md font-semibold text-primary">Adults</span>
            <div className="w-full bg-white py-2 rounded-sm flex justify-center items-center gap-2 ">
              <span className="bg-primary px-2 text-white">-</span>
              <input
                type="text"
                readOnly
                value={1}
                className="w-10 outline-none text-center"
              />
              <span className="bg-primary px-2 text-white">+</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-md font-semibold text-primary">Children</span>
            <div className="w-full bg-white py-2 rounded-sm flex justify-center items-center gap-2 ">
              <span className="bg-primary px-2 text-white">-</span>
              <input
                type="text"
                readOnly
                value={1}
                className="w-10 outline-none text-center"
              />
              <span className="bg-primary px-2 text-white">+</span>
            </div>
          </div>

          <div className="flex mt-[2.2rem]">
            <button className="w-full bg-primary px-6 py-[0.4rem] text-white text-md hover:bg-transparent hover:text-primary duration-300 border border-primary ">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkinout;
