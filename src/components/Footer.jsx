import React from "react";
import Retechgen_Logo from "../assets/apstamLogo.png";
import Facebook from "../assets/instagram.png";
import LinkedIn from "../assets/linkedin.png";
import Twitter from "../assets/twitter.png";
import tbi from "../assets/tbi_kiet.png";
import techstars from "../assets/techstars.png";
import startindia from "../assets/startindia.png";
import startinup from "../assets/startinup.png";
function Footer() {
  return (
    <div className=" bg-[#073a47]">
      <footer className=" flex justify-around  flex-wrap m-3 mt-14 pt-10  ">
        <div className=" w-[19rem] h-60">
          <div className="logo">
            <img className=" h-18 m-2 filter invert" src={Retechgen_Logo} alt="Logo" />
          </div>
          <div className="text">
            <p className="text-white font-normal text-md p-3">
              Founded by <a>Kanav Sharma</a> <br />
              Contact :{" "}
              <a href="https://www.linkedin.com/in/kanav-sharma-2a6713226/">
                Linkedln{" "}
              </a>
              |<a href="mailto:kanavs302@gmail.com"> Mail</a>
            </p>
          </div>
        </div>
        <div className=" w-[19rem]  h-60">
          <div className="flex flex-col ml-3">
            <h3 className="text-xl text-white font-medium">Address</h3>
            <div className="flex flex-col items-center h-1 w-24 bg-[#1B8DA6] mt-2"></div>
          </div>
          <div className="text w-56">
            <p className="text-white font-normal text-md p-3 leading-7">
              T-5, Technology Business Incubator, KIET
              <br /> Ghaziabad, Uttar Pradesh, India <br /> PIN: 201206
            </p>
          </div>
        </div>

        <div className=" w-[19rem] xs:h-48 sm:h-60">
          <div className="flex flex-col ml-3 ">
            <h3 className="text-xl text-white font-medium">Social</h3>
            <div className="flex flex-col items-center h-1 w-18 bg-[#1B8DA6] mt-2"></div>
          </div>
          <div className=" w-44 mt-7 socials">
            <ul className="flex justify-around ">
              <li className="filter invert  p-1 rounded-[50%] cursor-pointer">
                <a href="https://www.instagram.com/apstamtechnologies/" target="_blank">
                  <img className="px-0 h-8" src={Facebook} alt="Facebook" />
                </a>
              </li>
              <li className="filter invert  p-1 rounded-[50%] cursor-pointer">
                <a href="https://www.linkedin.com/in/kanav-sharma-2a6713226/">
                  <img className="px-0 h-8" src={LinkedIn} alt="LinkedIn" />
                </a>
              </li>
              <li className="filter invert  p-1 rounded-[50%] cursor-pointer">
                <a href="https://www.instagram.com/apstamtechnologies/">
                  <img className="px-0 h-8" src={Twitter} alt="Twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className=" w-[19rem] h-60">
          <div className="flex flex-col ml-3">
            <h3 className="text-xl text-white font-medium">
              Supported By
            </h3>
            <div className="flex flex-col items-center h-1 w-30 bg-[#1B8DA6] mt-2"></div>
          </div>
          <div className="links">
            <ul className="text-[#1F2347]/70 font-medium text-sm p-3 flex flex-col justify-around h-40">
              <div className="flex justify-between">
                <li className=" hover:text-retechgen-blue cursor-pointer flex w-[800px] items-center">
                  <img src={tbi} />
                </li>

                <li className=" hover:text-retechgen-blue cursor-pointer">
                  <img src={techstars} />
                </li>
              </div>
              <div className="flex justify-between">
                <li className=" hover:text-retechgen-blue cursor-pointer">
                  <img src={startinup} />
                </li>
                <li className=" hover:text-retechgen-blue cursor-pointer">
                  <img src={startindia} />
                </li>
              </div>
            </ul>
          </div>
        </div>
      </footer>

      <div className="h-05 w-full bg-[#000000]/20 mt-14"></div>
      <h2 className="font-medium text-white my-2 text-lg  flex justify-around">
        APSTAM @2023 - All rights reserved
        <br />
      </h2>
      <p className="font-normal text-white my-2 text-xs  flex justify-around">
        Made with ❤️ by Skill Eliters
      </p>
    </div>
  );
}

export default Footer;
