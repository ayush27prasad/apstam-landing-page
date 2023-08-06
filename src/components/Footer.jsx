import React from "react";
import Retechgen_Logo from "../assets/logo.svg";
// import { Link } from "react-router-dom";
import Facebook from "../assets/facebook.svg";
import LinkedIn from "../assets/linkedin.svg";
import Twitter from "../assets/twitter.svg";
import tbi from "../assets/tbi_kiet.png";
import techstars from "../assets/techstars.png";
import startindia from "../assets/startindia.png";
import startinup from "../assets/startinup.png";
function Footer() {
  return (
    <>
      <footer className=" flex justify-around flex-wrap m-3 mt-14">
        <div className=" w-[19rem] h-60">
          <div className="logo">
            <img className=" h-13 m-4" src={Retechgen_Logo} alt="Logo" />
          </div>
          <div className="text">
            <p className="text-[#1F2347]/70 font-medium text-sm p-3">
              Known For Best In Class, reliable and prompt IT consulting,
              software development, design services, custom products, mobility
              and cloud operations with end-to-end customization.
            </p>
          </div>
        </div>
        <div className=" w-[19rem]  h-60">
          <div className="flex flex-col ml-3">
            <h3 className="text-xl text-[#1F2347] font-semibold">Address</h3>
            <div className="flex flex-col items-center h-1 w-24 bg-[#1B8DA6] mt-2"></div>
          </div>
          <div className="text w-56">
            <p className="text-[#1F2347]/70 font-medium text-sm p-3 leading-7">
              D-2 204, Atul First Gate <br /> Valsad, Gujrat. <br /> Pin: 396020
              India
            </p>
            <p className="text-[#1F2347]/70 font-medium text-sm py-2 px-3">
              support@retechgen.com
            </p>
            <p className="text-[#1F2347] font-semibold text-sm py-1 px-3">
              (+91) 9307675497
            </p>
          </div>
        </div>

        <div className=" w-[19rem] xs:h-48 sm:h-60">
          <div className="flex flex-col ml-3 ">
            <h3 className="text-xl text-[#1F2347] font-semibold">Social</h3>
            <div className="flex flex-col items-center h-1 w-18 bg-[#1B8DA6] mt-2"></div>
          </div>
          {/* <div className="email mt-4">
          <form action="https://api.sheetmonkey.io/form/4kkKsqrdXd5j1tjjQAvsC4" method="post">
          <input
            className="border border-solid border-[#000000] w-52 p-5 text-sm focus:outline-none rounded-sm box-border h-8 mt-3 ml-3"
            type="email"
            name="email"
            placeholder="Enter your Email"
          />
          </form>
        </div> */}
          <div className=" w-44 mt-7 socials">
            <ul className="flex justify-around ">
              <li className=" border border-solid border-[#00000014] p-1 rounded-[50%] cursor-pointer">
                <a href="https://www.facebook.com/retechgen" target="_blank">
                  <img className="px-1 h-6" src={Facebook} alt="Facebook" />
                </a>
              </li>
              <li className=" border border-solid border-[#00000014] p-1 rounded-[50%] cursor-pointer">
                <a href="https://www.linkedin.com/company/retechgen/">
                  <img className="h-[1.2rem]" src={LinkedIn} alt="LinkedIn" />
                </a>
              </li>
              <li className=" border border-solid border-[#00000014] p-1 rounded-[50%] cursor-pointer">
                <a href="https://twitter.com/retechgen">
                  <img className="h-6" src={Twitter} alt="Twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className=" w-[19rem] h-60">
          <div className="flex flex-col ml-3">
            <h3 className="text-xl text-[#1F2347] font-semibold">
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
      <h2 className="text-[#1F2347]/70 my-4 font-semibold text-sm  flex justify-around">
        Retechgen @2022 - All rights reserved
      </h2>
    </>
  );
}

export default Footer;
