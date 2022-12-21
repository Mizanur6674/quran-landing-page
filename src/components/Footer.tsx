import React from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import EasyReciting from "./shared/EasyReciting";
import FooterSide from "./shared/footer/FooterSide";
import Navigate from "./shared/footer/Navigate";
import Network from "./shared/footer/Network";
import PopularLinks from "./shared/footer/PopularLinks";
import Resources from "./shared/Resources";

function Footer() {
  return (
    <div className=" container my-14 md:my-20">
      <div className="flex-1 md:flex gap-16">
        <div className=" pb-7 md:pb-0">
          <FooterSide />
        </div>
        <div className=" space-y-7 md:space-y-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-6">
          <Navigate />
          <Network />
          <PopularLinks />
          <Resources />
        </div>
      </div>
      <div className=" border-b-2 border-light_green flex justify-end mt-14">
        <button className=" button3 block px-4 py-3 text-white bg-primary">
          <BsChevronUp className=" w-4 h-4" />
        </button>
      </div>
      <div className=" flex justify-center">
        <div className=" flex items-center js gap-1 mt-7">
          <p className=" p2 text-light_green">English</p>
          <BsChevronDown />
        </div>
      </div>
    </div>
  );
}

export default Footer;
