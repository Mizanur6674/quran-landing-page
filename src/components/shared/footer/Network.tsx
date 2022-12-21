import React from "react";
import { networkData } from "../../../Data/NavigateData";

function Network() {
  return (
    <div>
      <button className=" button1 text-primary pb-5">Network</button>
      <div className=" space-y-2">
        {networkData.map((item) => {
          return (
            <div>
              <a className=" p2 text-light_green md:pr-12">{item.title} </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Network;
