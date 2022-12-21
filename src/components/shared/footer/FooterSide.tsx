import React from "react";
import { navigateData } from "../../../Data/NavigateData";
import Navigate from "./Navigate";

function FooterSide() {
  return (
    <div>
      <img src="/images/Logo.svg" alt="" />
      <p className=" p2 text-light_green pt-4 pb-5">© 2022 UIHUT All Rights Reserved</p>
      <div className=" flex items-center">
        <img src="/images/Socielbtn.svg" alt="" />
      </div>
    </div>
  );
}

export default FooterSide;
