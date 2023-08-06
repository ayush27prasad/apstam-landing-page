import React from "react";
import wrench from "../assets/wrench.png";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <>
      <div >
        <header className=" shadow-custom">
          <div className=" w-full flex justify-between">
            <div className="flex pl-3 sm:pl-10 items-center">
              <img src={logo} className="h-12 mr-4 mt-2" />
            </div>
            <button
              id="contactBtn"
              className="bg-blackbg-white text-black hover:bg-black hover:text-gray-50 font-semibold py-1 px-4  shadow "
            >
              Contact Us
            </button>
            
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
