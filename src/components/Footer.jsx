import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faMailchimp,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import tbi from "../assets/tbi_kiet.png";
import techstars from "../assets/techstars.png";
import startindia from "../assets/startindia.png";
import startinup from "../assets/startinup.png";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-wrap items-center flex-row  justify-between">
        <div className="footer-left">
          <form id="contactForm" >
            <input
              type="text"
              className="mt-4 pl-2  p-2.5 border w-[20rem] max-sm:w-72  border-gray-300 text-gray-800 text-sm block  dark:placeholder-gray-500 dark:text-white "
              placeholder="Name"
              required
            />
            <input
              type="email"
              className="mt-4 pl-2  p-2.5 border w-[20rem] max-sm:w-72  border-gray-300 text-gray-800 text-sm block  dark:placeholder-gray-500 dark:text-white "
              placeholder="Email"
              required
            />
            <textarea
              className="mt-4 pl-2  p-2.5 border w-[20rem] max-sm:w-72  border-gray-300 text-gray-800 text-sm block  dark:placeholder-gray-500 dark:text-white "
              placeholder="Your message"
              required
            ></textarea>
            <button
              className="mt-4 text-white font-bold py-2 px-4 rounded-full hover:text-black transition-all duration-200"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="social-icons self-center sm:mt-0 mt-12">
          <h2 className="font-semibold text-lg mt-10 mb-10 align-middle sm:mt-0">Our socials:</h2>

          <a href="https://www.instagram.com/apstamtechnologies/" className="icon-link w-16">
            <FontAwesomeIcon
              className="w-10 h-8  transition-all  duration-200 "
              icon={faInstagram}
            />
          </a>
          <a href="https://www.linkedin.com/in/kanav-sharma-2a6713226/" className="icon-link w-16">
            <FontAwesomeIcon
              className="w-10 h-8  transition-all  duration-200 "
              icon={faLinkedin}
            />
          </a>
          <a href="https://www.twitter.com/" className="icon-link w-16">
            <FontAwesomeIcon
              className="w-10 h-8  transition-all  duration-200 "
              icon={faTwitter}
            />
          </a>
        </div>

        <div className="footer-right  max-w-xl">
          <div class="supported-by">
            <h2 className="font-semibold text-lg mt-12 sm:mt-0">
              Supported By:
            </h2>
            <div class="supported-images pt-1  grid ">
              <div class="company">
                <img src={tbi} alt="" class="company-img"/>
              </div>
              <div class="company">
                <img src={techstars} alt="" class="company-img"/>
              </div>
              <div class="company">
                <img src={startindia} alt="" class="company-img"/>
              </div>
              <div class="company">
                <img src={startinup} alt="" class="company-img"/>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
