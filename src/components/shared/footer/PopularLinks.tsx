import React from "react";
import { popularLinksData } from "../../../Data/NavigateData";

function PopularLinks() {
  return (
    <div>
      <button className=" button1 text-primary pb-5">Popular Links</button>
      <div className=" space-y-2">
        {popularLinksData.map((item, index) => {
          return (
            <div key={index}>
              <a className=" p2 text-light_green">{item.title}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PopularLinks;
