import React from "react";
import About from "./About";
import Blogs from "./Blogs";
import Home from "./Home";
import MobileNavbar from "./layout/MobileNavbar";
import NavbarDesktop from "./layout/NavbarDesktop";
import Navbar from "./Footer";
import EasyReciting from "./shared/EasyReciting";
import QuranTranslation from "./QuranTranslation";
import Reciters from "./Reciters";
import Footer from "./Footer";
import Homes from "./Home";

function MainPage() {
  return (
    <div>
      <div className=" hidden md:block">
        <NavbarDesktop />
      </div>
      <div className=" md:hidden">
        <MobileNavbar />
      </div>
      <Homes />
      <About />
      <QuranTranslation />
      <Reciters />
      <Blogs />
      <EasyReciting />
      <Footer />
    </div>
  );
}

export default MainPage;
