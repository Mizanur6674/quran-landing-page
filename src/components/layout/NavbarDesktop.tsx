import React from "react";

function NavbarDesktop() {
  return (
    <div className=" container">
      <div className=" py-10 border-b-2 border-light_green flex items-center justify-between">
        <div>
          <img src="/images/Logo.svg" alt="qlogoss" />
        </div>

        <div className="">
          <ul className=" flex items-center gap-8 text-light_green">
            <li>
              <a className=" text-light_green" href="/home">
                Home
              </a>
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
        </div>

        <div className=" flex items-center gap-8">
          <a className=" text-light_green button2" href="login">
            Log in
          </a>
          <button className="btn_green">Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default NavbarDesktop;
