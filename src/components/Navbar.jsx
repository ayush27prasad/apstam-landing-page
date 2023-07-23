import React from "react";
import wrench from "../assets/wrench.png";

const Navbar = () => {
  return (
    <>
      <div>
        <header>
          <div className="container flex justify-between">
            <div className="flex pl-3 sm:pl-10 items-center">
              <img src={wrench} className="h-9 mr-4" />
              <div className="logo font-Archivo text-4xl">
                Apstam
              </div>
            </div>
            <button
              id="contactBtn"
              className="bg-blue-900 hover:bg-blue-600 hover:shadow-btnGlow text-white font-bold py-2 px-4 rounded-full"
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
