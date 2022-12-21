import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

function MobileNavbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="  relative mt-5">
      <div className=" mx-3 flex items-center justify-between">
        <div>
          <img src="/images/Logo.svg" alt="qlogo" />
        </div>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <AiOutlineMenu className="w-8 h-6 text-[#61594F] cursor-pointer" />
        </button>
      </div>
      {toggle ? (
        <div className=" w-[50%] z-50 absolute top-6 right-0 h-screen opacity-95 pb-6 bg-primary">
          <div className=" text-center pt-4 px-2">
            <ul className=" text-white flex-1 space-y-4">
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/About">About</a>
              </li>
              <li>
                <a href="/Translation">Translation</a>
              </li>
              <li>
                <a href="/Donate">Donate</a>
              </li>
            </ul>
            <div className=" mt-12 space-y-8 ">
              <button className="px-8 py-3 font-bold text-primary rounded-md bg-tertiary">Log in</button>
              <br />
              <button className="px-8 py-3 font-bold text-primary rounded-md bg-tertiary">Sign up</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default MobileNavbar;
