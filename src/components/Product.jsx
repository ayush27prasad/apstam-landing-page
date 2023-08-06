import React from "react";
import wrench from "../assets/wrench.png";
import time from "../assets/save_time.png";
import effort from "../assets/minimal_effort.png";
import portability from "../assets/portability.png";
import fatigue from "../assets/zero_fatigue.png";
const Product = () => {
    return (
      <>
        <section className="flex flex-wrap justify-evenly xs:py-10 sm:py-14 bg-[#EBE9EB]/30 xs:rounded-[3.5rem] sm:rounded-[4rem]">
      <div className="flex-col m-10 p-10 xs:mt-0 sm:mt-12">
          <div>
            <p className=" font-semibold text-blue-950 text-sm">
              Our Products
            </p>
            <h2 className="font-bold text-black text-4xl">
              <p className=" text-retechgen-blue inline-block">Impact</p>{" "}
                {" "}
              <p className=" text-retechgen-blue inline-block">Wrench</p>{" "}
            </h2>
            <h2 className="text-black font-medium text-lg mt-6 ml-2">
              Product Description 
            </h2>
            <p className="text-black font-medium text-sm mt-6  ml-6">
                     ◎20x32 ''
              <br/>  ◎electric 12 V
              <br/>  ◎20x32 ''
              <br/>  ◎electric 12 V
              <br/>  ◎20x32 ''
              <br/>  ◎electric 12 V
            </p>
          </div>
      </div>
  
      <div className="flex relative w-132 flex-wrap xs:mx-[8rem] sm:mx-0">
          <div className="xs:-mt-[2.6rem] sm:mt-0 flex-col flex-wrap">
            <div className="flex flex-wrap w-52 h-52 bg-white rounded-lg shadow-card_shadow2 hover:border-2 hover:border-solid hover:border-black hover:transition hover:duration-300 hover:ease-in-out m-10 hover:shadow-tile_hover_shadow">
              <div className="flex-col m-auto  ">
                <img className="m-auto mb-5 w-10" src={time} alt="" />
                <h2 className="mb-4 text-center text-theme-blue-text font-medium text-lg">
                  Saves Time
                </h2>
              </div>
            </div>
  
            <div className="flex flex-wrap w-52 h-52 bg-white rounded-lg shadow-card_shadow2 hover:border-2 hover:border-solid hover:border-black hover:transition hover:duration-300 hover:ease-in-out m-10 hover:shadow-tile_hover_shadow">
              <div className="flex-col m-auto  ">
                <img
                  className="m-auto mb-5 w-10"
                  src={effort}
                  alt=""
                />
                <h2 className="mb-4 text-center text-theme-blue-text font-medium text-lg">
                  Minimal Effort
                </h2>
              </div>
            </div>
          </div>

          <div className="flex-col sm:absolute xs:-mt-10 sm:mt-0 sm:bottom-12  sm:left-70 xs:flex-wrap">
            <div className="flex w-52 h-52 bg-white rounded-lg shadow-card_shadow2 hover:border-2 hover:border-solid hover:border-black hover:transition hover:duration-300 hover:ease-in-out m-10 hover:shadow-tile_hover_shadow">
              <div className="flex-col m-auto  ">
                <img className="m-auto mb-5 w-10" src={fatigue} alt="" />
                <h2 className="mb-4 text-center text-theme-blue-text font-medium text-lg">
                  Zero Fatigue
                </h2>
              </div>
            </div>
  
            <div className="flex w-52 h-52 bg-white rounded-lg shadow-card_shadow2 hover:border-2 hover:border-solid hover:border-black hover:transition hover:duration-300 hover:ease-in-out m-10 hover:shadow-tile_hover_shadow">
              <div className="flex-col m-auto  ">
                <img className="m-auto mb-5 w-10" src={portability} alt="" />
                <h2 className="mb-4 text-center text-theme-blue-text font-medium text-lg">
                  Portable
                </h2>
              </div>
            </div>
          </div>
      </div>
    </section>
      </>
    );
  };

  export default Product;