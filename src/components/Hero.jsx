import React from "react";
import wrench_gif from "../assets/wrench_gif.gif";
import "./hero.css";
import time from "../assets/save_time.png";
import effort from "../assets/minimal_effort.png";
import portability from "../assets/portability.png";
import fatigue from "../assets/zero_fatigue.png";
// import Fade from "react-reveal/Fade";

function BodyTemplate(props) {
  return (
    <div className="serviceContainer flex flex-wrap-reverse w-full min-h-[80vh] items-center justify-around ">
      <div className="servicesContent w-[50%] flex flex-col">
        <h1 className="font-semibold text-center text-black services-section-heading text-6xl">
          {props.heading}
        </h1>
        <p className="services-section-text mt-6 text-center text-black tracking-wide text-xl w-[90%] mx-auto">
          {props.text}
        </p>
      </div>
      <div className="servicesImage w-[50%] h-[19rem] flex justify-center">
        <img src={props.gif} className=" xs:w-[70%] md:w-[45%] h-full" alt="" />
      </div>
    </div>
  );
}
const Hero = () => {
  return (
    <>
      <div className="flex flex-wrap-reverse">
        <BodyTemplate
          heading="Impact Wrench"
          text="Maximize your impact, minimize your effort!"
          gif={wrench_gif}
        />
      </div>
      <section className="flex flex-wrap justify-evenly xs:py-10 sm:py-14 bg-gray-50 xs:rounded-[4rem] sm:rounded-[8rem] m-1">
        <div className="flex-col m-10 p-10 xs:mt-0 sm:mt-12">
          <div>
            <h1 className="font-bold text-cyan-800 text-6xl">
              <p className=" text-black inline-block">Our</p> Products
              <div className="flex flex-col items-center h-1.5 mr-20 bg-[#061148] mt-2"></div>
            </h1>
            <h2 className="text-cyan-700 font-medium mt-8 text-4xl">
              Impact Wrench
            </h2>
            <p className="text-black font-medium mt-4 ml-4 text-xl">
              Detail1
              <br />
              Detail1
              <br />
              Detail3
              <br />
              Detail4
            </p>
          </div>
        </div>

        <div className="flex relative w-132 flex-wrap xs:mx-[8rem] sm:mx-0">
          <div className="xs:-mt-[2.6rem] sm:mt-0 flex-col flex-wrap">
            <div className="flex flex-wrap w-52 h-52 bg-white rounded-lg shadow-card_shadow2 hover:border-2 hover:border-solid hover:border-retechgen-blue/70 hover:transition hover:duration-300 hover:ease-in-out m-10 hover:shadow-tile_hover_shadow">
              <div className="flex-col m-auto  ">
                <img className="m-auto mb-5 w-1/1.5" src={time} alt="" />
                <h2 className="mb-4 text-center text-theme-blue-text font-medium text-lg">
                  Saves time
                </h2>
              </div>
            </div>

            <div className="flex flex-wrap w-52 h-52 bg-white rounded-lg shadow-card_shadow2 hover:border-2 hover:border-solid hover:border-retechgen-blue/70 hover:transition hover:duration-300 hover:ease-in-out m-10 hover:shadow-tile_hover_shadow">
              <div className="flex-col m-auto  ">
                <img className="m-auto mb-5 w-1/2" src={effort} alt="" />
                <h2 className="mb-4 text-center text-theme-blue-text font-medium text-lg">
                  Minimal effort
                </h2>
              </div>
            </div>
          </div>

          <div className="flex-col sm:absolute xs:-mt-10 sm:mt-0 sm:bottom-12  sm:left-70 xs:flex-wrap">
            <div className="flex w-52 h-52 bg-white rounded-lg shadow-card_shadow2 hover:border-2 hover:border-solid hover:border-retechgen-blue/70 hover:transition hover:duration-300 hover:ease-in-out m-10 hover:shadow-tile_hover_shadow">
              <div className="flex-col m-auto  ">
                <img className="m-auto mb-5 w-1/2" src={portability} alt="" />
                <h2 className="mb-4 text-center text-theme-blue-text font-medium text-lg">
                  Portability
                </h2>
              </div>
            </div>

            <div className="flex w-52 h-52 bg-white rounded-lg shadow-card_shadow2 hover:border-2 hover:border-solid hover:border-retechgen-blue/70 hover:transition hover:duration-300 hover:ease-in-out m-10 hover:shadow-tile_hover_shadow">
              <div className="flex-col m-auto  ">
                <img className="m-auto mb-5 w-1/2" src={fatigue} alt="" />
                <h2 className="mb-4 text-center text-theme-blue-text font-medium text-lg">
                  Zero Fatigue
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
