import React from "react";
import clsx from "clsx";
import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function Reciters() {
  const [bgcolor, setBgcolor] = useState(false);
  return (
    <div className=" bg-primary ">
      <div className=" px-4 lg:px-0 md:mr-16 py-24 md:py-24">
        <div className=" flex flex-col-reverse lg:flex-row md:gap-20 xl:gap-32">
          <div className="  flex-1 flex lg:flex-[0_0_55%] gap-7">
            <div className=" hidden md:block">
              <img src="/images/unsplash_LI7jB1925j0.svg" alt="" />
            </div>
            <div className=" hidden md:block">
              <img src="/images/unsplash_LI7jB1925j0 (1).svg" alt="" />
            </div>
            <div className=" relative ">
              <img src="/images/mufti sudais.svg" alt="" />
              <div className=" w-full absolute bottom-4 md:bottom-8 left-0 bg-transparent text-center">
                <h2 className=" H4 text-white">Abdul Rahman Al-Sudais </h2>
                <p className=" p3 text-light_gray">Imam of Masjid al-Haram</p>
                <button className=" button1 text-primary mt-4 px-8 py-3 bg-tertiary">Learn More</button>
              </div>
            </div>
          </div>

          <div className=" ">
            <div>
              <h1 className=" H2 text-white pb-5">
                Listen by your favorite
                <span className="w-max shape py-3 px-1 bg-tertiary">
                  <span className="bg-primary p-2 shape text-center">Reciters</span>
                </span>
              </h1>
              <p className=" p2 text-light_gray pb-9">Listen holy quran by your favourite reciters and feel the best of quran.</p>
            </div>

            <div className=" hidden   order-3 lg:flex items-center gap-2">
              <button className=" p-4 mr-6 text-center rounded-md border border-light_gray">
                <BsChevronLeft className=" w-8 h-8 text-white" />
              </button>
              <div className=" rounded-full h-2 w-2 bg-light_green"></div>
              <div className=" mx-2 rounded-full h-2 w-2 bg-light_green"></div>
              <div className=" rounded-full h-2 w-2 bg-light_green"></div>

              <button className={clsx(" p-4 ml-6 text-center rounded-md border border-light_gray bg-white")}>
                <BsChevronRight className=" w-8 h-8 text-primary" />
              </button>
            </div>
          </div>
        </div>

        <div className=" mt-4 lg:mt-0 lg:hidden flex items-center gap-2">
          <button className=" p-4 mr-6 text-center rounded-md border border-light_gray">
            <BsChevronLeft className=" w-8 h-8 text-white" />
          </button>
          <div className=" rounded-full h-2 w-2 bg-light_green"></div>
          <div className=" mx-2 rounded-full h-2 w-2 bg-light_green"></div>
          <div className=" rounded-full h-2 w-2 bg-light_green"></div>

          <button
            className={clsx(
              " p-4 ml-6 text-center rounded-md border border-light_gray bg-white",
              bgcolor === true && "text-primary"
            )}
            onClick={() => setBgcolor(!bgcolor)}
          >
            <BsChevronRight className={clsx("w-8 h-8 text-primary")} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reciters;
