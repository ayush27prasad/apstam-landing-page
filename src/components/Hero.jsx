import React from "react";
import wrench_gif from "../assets/wrench_gif.gif";
import "./hero.css";

function BodyTemplate(props) {
  return (
    <div className="serviceContainer flex flex-wrap-reverse w-full min-h-screen items-center justify-around ">
      <div className="servicesContent w-[50%] flex flex-col">
        <h1 className="font-semibold text-black services-section-heading text-6xl ml-12">
          {props.heading}
        </h1>
        <p className="services-section-text mt-6  text-black tracking-wide text-xl w-[90%] mx-auto ml-12">
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
    </>
  );
};



export default Hero;
