import React from "react";
import wrench_gif from "../assets/wrench_gif.gif";
import "./hero.css"

function BodyTemplate(props) {
  return (
    <div className="mt-10 sm:mt-20">
      <div className="serviceContainer flex flex-wrap-reverse min-h-[460px] items-center justify-around ">
        <div className="servicesContent w-[35rem] flex flex-col">
          
            <h1 className="font-extrabold services-section-heading text-6xl">
              {props.heading}
            </h1>
            <p className="services-section-text mt-6 text-white tracking-wide text-xl w-[90%]">
              {props.text}
            </p>

        </div>
        <div className="servicesImage w-[31rem] h-[19rem]">
          
            <img src={props.gif} className=" w-[70%] h-full" alt="" />
          
        </div>
      </div>
    </div>
  );
}
const Hero = () => {
  return (
    <>
      <main >
        {/* <div class="product-info">
          <h1 className="font-Archivo">Impact wrenches</h1>
          <p>Description of your impact wrenches goes here...</p>
        </div> */} 
        <BodyTemplate heading="Impact Wrench" text ="Maximize your impact, minimize your effort!" gif={wrench_gif}/>
      </main>
    </>
  )
}

export default Hero;