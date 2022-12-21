import React from "react";
import { RiBookOpenFill } from "react-icons/ri";
import { AiFillAudio } from "react-icons/ai";
import HomeFooter from "./shared/footer/HomeFooter";

function Homes() {
  return (
    <div className="bg-[url('/images/bg1.svg')] bg-no-repeat">
      <div className=" container">
        <div className=" mx-auto  md:w-[41.875rem]">
          <h1 className=" H1 text-primary pt-16 pb-6 text-center">
            Make self-purification by reading
            <span className="w-max shape py-3 px-1 bg-tertiary">
              <span className="bg-secondery p-2 shape">Quran</span>
            </span>
          </h1>
          <p className=" p1 text-light_green text-center">
            Make self-purification by reading Quran. This website is all about holy quran. You can read, you can listen and you
            can learn so many things about Islam.
          </p>
          <div className=" pt-9 pb-16 flex items-center justify-center gap-5">
            <button className=" btn_yellow">
              <div className=" flex items-center gap-1 md:gap-2">
                <RiBookOpenFill />
                <a href="">Read Quran</a>
              </div>
            </button>
            <button className=" btn_transparent">
              <div className=" flex items-center gap-1 md:gap-2">
                <AiFillAudio />
                <a href="">Quran Audio</a>
              </div>
            </button>
          </div>
        </div>
        <div className=" flex justify-center gap-2 md:gap-8 w-full">
          <div className=" ">
            <img src="/images/Rectangle 39.svg" alt="" />
          </div>
          <div className="">
            <img src="/images/Rectangle 41.svg" alt="" />
          </div>
        </div>
      </div>
      <HomeFooter />
    </div>
  );
}

export default Homes;
