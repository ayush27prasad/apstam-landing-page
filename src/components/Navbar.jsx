import React from "react";
import wrench from "../assets/wrench.png";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <>
      <div>
        <header className=" shadow-md">
          <div className=" w-full flex justify-between">
            <div className="flex pl-3 sm:pl-10 items-center">
              <img src={logo} className="h-12 mr-4 mt-2" />
            </div>
            <button
              id="contactBtn"
              className="text-white  hover:text-gray-50 font-semibold 
              hover:bg-cyan-900  bg-cyan-700 rounded-3xl text-lg 
               px-3"
            >
              {" "}
              <a href="#contact-section">Contact Us</a>
            </button>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
