import React, { useState } from "react";
import clsx from "clsx";
import { FiChevronDown } from "react-icons/fi";
import { quranTranslateData } from "../../Data/QuranTranslateData";

function QuranTranslation() {
  const [active, setActive] = useState(quranTranslateData[0].count);
  return (
    <div className=" container my-24 md:my-44">
      <div className="">
        <h2 className=" pb-6 mb:pb-0 text-center md:mx-auto md:w-[29.375rem] H2 text-primary">
          Read holy quran with
          <span className="w-max shape py-3 px-1 bg-tertiary">
            <span className="bg-secondery p-2 shape text-center">translations</span>
          </span>
        </h2>
      </div>

      <div className=" flex items-center justify-between">
        <div className=" pr-4 md:pr-9 pl-1 py-1 flex gap-6 md:gap-8 items-center border border-[#CCD3D2] ">
          <button className=" button2 bg-primary py-2 px-5 text-white">Surah</button>
          <p className=" button2 text-primary">Juz</p>
        </div>
        <div className=" flex items-center">
          <div>
            <p className=" button2 text-primary">
              <span className=" p2 text-light_green">Sort by: </span>Ascending
            </p>
          </div>
          <div>
            <FiChevronDown />
          </div>
        </div>
      </div>

      {/* for mapping */}
      <div className=" mt-12 grid grid-cols-1 gap-4 md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-7">
        {quranTranslateData.map((item, index) => {
          return (
            <div
              key={index}
              className={clsx(
                " p-5 flex items-center justify-between text-primary bg-white rounded-md",
                active === item.count && "bg-primary text-white font-bold"
              )}
              onClick={() => setActive(item.count)}
            >
              <div className=" flex items-center gap-4">
                <button
                  className={clsx(
                    " button3 px-3 py-2 text-[#605E54] bg-[#E9E6D7]",
                    active === item.count && "bg-white text-primary"
                  )}
                >
                  {item.count}
                </button>
                <div>
                  <h3 className=" H4">{item.title} </h3>
                  <p className={clsx(" p3 text-light_green", active === item.count && " text-light_gray font-bold")}>
                    {item.subtitle}
                  </p>
                </div>
              </div>
              <div>
                <h2 className=" H5 text-right">{item.artitle}</h2>
                <p className={clsx(" p3 text-light_green", active === item.count && " text-light_gray font-bold")}>
                  {item.verse}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <button className="block mx-auto mt-14 button1 text-primary px-8 py-3 bg-tertiary">Show More</button>
    </div>
  );
}

export default QuranTranslation;
