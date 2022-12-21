import React from "react";
import BlogMap from "./shared/BlogMap";

function Blogs() {
  return (
    <div className=" bg-white">
      <div className=" container py-24 md:py-44">
        <div className=" text-center">
          <h1 className=" H2 text-primary text-center pb-5">
            Latest Islamic
            <span className="w-max shape py-3 px-1 bg-tertiary">
              <span className="bg-white p-2 shape">blog</span>
            </span>
          </h1>
          <p className=" p2 text-light_green">
            Read top free Islamic articles & blog posts on the Internet and know about islam.
          </p>
        </div>
        <BlogMap />
        <button className=" button1 block mx-auto text-primary mt-14 px-8 py-3 bg-tertiary">Read All</button>
      </div>
    </div>
  );
}

export default Blogs;
