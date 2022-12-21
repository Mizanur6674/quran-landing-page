import React from "react";
import { navigateData } from "../../../Data/NavigateData";

function Navigate() {
  return (
    <div>
      <button className=" button1 text-primary pb-5">Navigate</button>
      <div className=" space-y-2">
        {navigateData.map((item, index) => {
          return (
            <div>
              <a key={index} className=" p2 text-light_green">
                {item.title}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Navigate;
