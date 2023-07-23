import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <>
            <footer className="flex flex-wrap items-center flex-row  justify-between">
                <div className="footer-left">
                    <form id="contactForm">
                        <input type="text" className="mt-4 p-1 pl-2" placeholder="Name" required />
                        <input type="email" className="mt-4 p-1 pl-2" placeholder="Email" required />
                        <textarea className="mt-4 p-1 pl-2" placeholder="Your message" required></textarea>
                        <button className="mt-4 p-1 pl-2 hover:text-black transition-all duration-500" type="submit">Send Message</button>
                    </form>
                </div>
                <div className="social-icons self-center sm:mt-0 mt-12">
                    <a href="#" className="icon-link w-16"><FontAwesomeIcon className="w-12 h-8 hover:w-20 hover:h-12 transition-all  duration-500 " icon={faInstagram} /></a>
                    <a href="#" className="icon-link w-16"><FontAwesomeIcon className="w-12 h-8 hover:w-20 hover:h-12 transition-all  duration-500 " icon={faLinkedin} /></a>
                    <a href="#" className="icon-link w-16"><FontAwesomeIcon className="w-12 h-8 hover:w-20 hover:h-12 transition-all  duration-500 " icon={faTwitter} /></a>
                </div>
                <div className="footer-right">
                    <div class="supported-by">
                        <h2 className="font-semibold text-lg mt-12 sm:mt-0">Supported By:</h2>
                        <div class="supported-images pt-4  gap-2 grid grid-cols-2">
                            <div class="company  cursor-grab">
                                <img src={logo} alt="" />
                                <p>Company 1</p>
                            </div>
                            <div class="company    cursor-grab">
                                <img src={logo} alt="" />
                                <p>Company 2</p>
                            </div>
                            <div class="company    cursor-grab">
                                <img src={logo} alt="" />
                                <p>Company 3</p>
                            </div>
                            <div class="company    cursor-grab">
                                <img src={logo} alt="" />
                                <p>Company 4</p>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    );
};

export default Footer;
