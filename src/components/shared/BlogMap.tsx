import React from "react";
import clsx from "clsx";
import { blogData } from "../../Data/BlogData";
import { useState } from "react";

function BlogMap() {
  const [active, setActive] = useState(blogData[0]);
  return (
    <div className=" mt-4 md:mt-16 grid grid-cols-1 lg:grid lg:grid-cols-2 gap-7">
      {blogData.map((item, index) => {
        return (
          <div
            className={clsx(
              " flex gap-4 md:gap-7 bg-white border border-[#CCD3D2] rounded-md p-2 md:p-5",
              active === item && "border-none shadow-md"
            )}
          >
            <div>
              <img src={item.img} />
            </div>
            <div className=" ">
              <h1 className=" md:w-64 H3 text-primary">{item.title} </h1>
              <div className=" border-b-2 w-[10%] border-primary pt-2 md:pt-4"></div>
              <p className=" md:w-64 p3 text-light_green pt-2 md:pt-5">{item.subtitle}</p>
              <button
                key={index}
                className={clsx(" button3 text-primary pt-0 md:pt-4", active === item && " text-tertiary")}
                onClick={() => setActive(item)}
              >
                {item.button}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BlogMap;
