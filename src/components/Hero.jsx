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
      <div className="serviceContainer flex flex-wrap-reverse w-full min-h-screen items-center justify-around ">
        <div className="servicesContent w-[50%] flex flex-col">
          <h1 className="font-semibold text-center text-black services-section-heading text-6xl">
            {props.heading}
          </h1>
          <p className="services-section-text mt-6 text-center text-black tracking-wide text-xl w-[90%] mx-auto">
            {props.text}
          </p>
        </div>
        <div className="servicesImage w-[50%] h-[19rem] flex justify-center">
          <img src={props.gif} className=" w-[70%] h-full" alt="" />
        </div>
      </div>
  );
}
const Hero = () => {
  return (
    <>
      <div className="flex flex-wrap-reverse">
        {/* <div class="product-info">
          <h1 className="font-Archivo">Impact wrenches</h1>
          <p>Description of your impact wrenches goes here...</p>
        </div> */}
        <BodyTemplate
          heading="Impact Wrench"
          text="Maximize your impact, minimize your effort!"
          gif={wrench_gif}
        />
      </div>
      <section className="flex flex-wrap justify-evenly xs:py-10 sm:py-14 bg-[#EBE9EB]/30 xs:rounded-[3.5rem] sm:rounded-[10rem]">
        <div className="flex-col m-10 p-10 xs:mt-0 sm:mt-12">
          {/* <Fade top> */}
            <div>
              <p className=" font-semibold text-theme-purple text-sm">
                Why Choose Us?
              </p>
              <h2 className="font-bold text-black text-4xl">
                <p className=" text-retechgen-blue inline-block">Innovating</p>{" "}
                with <br /> a{" "}
                <p className=" text-retechgen-blue inline-block">Digital</p>{" "}
                Mindset
              </h2>
              <h2 className="text-black font-medium text-lg mt-6">
                We are a boutique digital transformation <br /> consultancy and
                development company.
              </h2>
            </div>
          {/* </Fade> */}

          {/* <Fade bottom> */}
            {/* <Link to="/contact"> */}
              {/* <button className="xs:mt-10 sm:mt-36 hover:bg-retechgen-blue flex h-12 w-36 bg-theme-blue text-white rounded-2xl text-sm shadow-button_shadow">
                <p className=" self-center m-auto font-semibold">
                  Get in Touch
                </p>
              </button> */}
            {/* </Link> */}
          {/* </Fade> */}
        </div>

        <div className="flex relative w-132 flex-wrap xs:mx-[8rem] sm:mx-0">
          {/* <Fade right> */}
            <div className="xs:-mt-[2.6rem] sm:mt-0 flex-col flex-wrap">
              <div className="flex flex-wrap w-52 h-52 bg-white rounded-lg shadow-card_shadow2 hover:border-2 hover:border-solid hover:border-retechgen-blue/70 hover:transition hover:duration-300 hover:ease-in-out m-10 hover:shadow-tile_hover_shadow">
                <div className="flex-col m-auto  ">
                  <img className="m-auto mb-5 w-[65%]" src={time} alt="" />
                  <h2 className="mb-4 text-center text-theme-blue-text font-medium text-lg">
                    Experience Design
                  </h2>
                </div>
              </div>

              <div className="flex flex-wrap w-52 h-52 bg-white rounded-lg shadow-card_shadow2 hover:border-2 hover:border-solid hover:border-retechgen-blue/70 hover:transition hover:duration-300 hover:ease-in-out m-10 hover:shadow-tile_hover_shadow">
                <div className="flex-col m-auto  ">
                  <img
                    className="m-auto mb-5 w-1/2"
                    src={effort}
                    alt=""
                  />
                  <h2 className="mb-4 text-center text-theme-blue-text font-medium text-lg">
                    Content Engineering
                  </h2>
                </div>
              </div>
            </div>
          {/* </Fade> */}

          {/* <Fade right> */}
            <div className="flex-col sm:absolute xs:-mt-10 sm:mt-0 sm:bottom-12  sm:left-70 xs:flex-wrap">
              <div className="flex w-52 h-52 bg-white rounded-lg shadow-card_shadow2 hover:border-2 hover:border-solid hover:border-retechgen-blue/70 hover:transition hover:duration-300 hover:ease-in-out m-10 hover:shadow-tile_hover_shadow">
                <div className="flex-col m-auto  ">
                  <img className="m-auto mb-5 w-1/2" src={portability} alt="" />
                  <h2 className="mb-4 text-center text-theme-blue-text font-medium text-lg">
                    Digital Services
                  </h2>
                </div>
              </div>

              <div className="flex w-52 h-52 bg-white rounded-lg shadow-card_shadow2 hover:border-2 hover:border-solid hover:border-retechgen-blue/70 hover:transition hover:duration-300 hover:ease-in-out m-10 hover:shadow-tile_hover_shadow">
                <div className="flex-col m-auto  ">
                  <img className="m-auto mb-5 w-1/2" src={fatigue} alt="" />
                  <h2 className="mb-4 text-center text-theme-blue-text font-medium text-lg">
                    Data Structuring
                  </h2>
                </div>
              </div>
            </div>
          {/* </Fade> */}
        </div>
      </section>
    </>
  );
};

export default Hero;
