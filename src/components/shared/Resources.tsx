import React from "react";
import { resourcesData } from "../../Data/NavigateData";

function Resources() {
  return (
    <div>
      <button className=" button1 text-primary pb-5">Resources</button>
      <div className=" space-y-2">
        {resourcesData.map((item) => {
          return (
            <div>
              <a className=" p2 text-light_green"> {item.title} </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Resources;
