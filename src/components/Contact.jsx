import React from 'react'
import Touch_gps from "../assets/touch_gps.svg";
import Touch_mail from "../assets/touch_mail.svg";
import Touch_call from "../assets/touch_call.svg";

function Contact() {
  return (
    <section className="relative bg-theme-bg ">
        {/* <img
          className="absolute left-0 -bottom-18 h-80"
          src={Touch_left}
          alt=""
        />
        <img className="absolute right-0 top-8 h-80" src={Touch_right} alt="" /> */}

        <div className="flex-col">
          <h2 className="pt-8 text-center font-bold text-[#1F2347] text-2xl">
            Get In Touch
          </h2>
          <div className="mx-auto mt-1 mb-4 bg-retechgen-blue w-40 h-1"></div>
        </div>

        <div className="flex justify-evenly flex-wrap">
          {/* <Fade left> */}
            <div className="m-10 mx-30 flex">
              <div className="self-center mx-auto mt-1 mb-4 bg-black w-1 h-40 mr-8"></div>
              <h2 className="self-center text-left font-bold text-[#1F2347] text-3xl leading-10">
                To make requests for <br /> further information,
                <h2 className=" text-left font-bold text-retechgen-blue/90 text-3xl leading-10">
                  Contact us.
                </h2>
              </h2>
            </div>
          {/* </Fade> */}

          <div className="flex-col md:ml-40 xl:ml-20 pt-5 sm:m-16 xs:mt-96 sm:mt-8 md:w-150 lg:w-160 sm:h-128 xs:h-150 bg-white shadow-form_shadow relative ">
            <div className="bg-retechgen-blue w-70 h-80 rounded-md flex flex-col justify-center absolute sm:-left-36 sm:top-24 xs:left-13 xs:-top-88">
              <div className="flex-col ">
                <div className="ml-5 my-10 flex h-7">
                  <img src={Touch_gps} alt="" />
                  <h2 className="ml-3 text-white font-medium">Gujrat, India</h2>
                </div>

                <div className="ml-5 my-10 flex h-7">
                  <img className="h-5" src={Touch_mail} alt="" />
                  <h2 className="ml-3 text-white font-medium">
                    support@retechgen.com
                  </h2>
                </div>

                <div className="ml-5 my-10 flex h-7">
                  <img src={Touch_call} alt="" />
                  <h2 className="ml-3 text-white font-medium">9307675497</h2>
                </div>
              </div>
            </div>

            <form
              className=" xs:ml-16 xs:mr-16 sm:mr-0 sm:ml-48 mt-8 xs:w-90 sm:w-128 flex column-2 flex-wrap"
            >
              <input
                className="m-4 p-3 h-12 w-52 text-theme-gray2 font-medium border-[#1B8DA64F] border-solid border-2 rounded-md outline-1 outline-[#1b8da694] bg-[#EEEEEE7A]"
                type="text"
                placeholder="First Name"
                name="f_name"
                id="f_name"
              />

              <input
                className="m-4 p-3 h-12 w-52 text-theme-gray2 font-medium border-[#1B8DA64F] border-solid border-2 rounded-md outline-1 outline-[#1b8da694] bg-[#EEEEEE7A]"
                type="text"
                placeholder="Last Name"
                name="l_name"
                id="l_name"
              />

              <input
                className="m-4 p-3 h-12 w-52 text-theme-gray2 font-medium border-[#1B8DA64F] border-solid border-2 rounded-md outline-1 outline-[#1b8da694] bg-[#EEEEEE7A]"
                type="number"
                placeholder="Mobile Number"
                name="number"
                id="number"
              />

              <input
                className="m-4 p-3 h-12 w-52 text-theme-gray2 font-medium border-[#1B8DA64F] border-solid border-2 rounded-md outline-1 outline-[#1b8da694] bg-[#EEEEEE7A]"
                type="email"
                placeholder="Email"
                name="email"
                id="email"
              />

              <textarea
                className="mt-5 m-4 p-3 h-36 lg:w-112 xs:w-52 text-theme-gray2 font-medium border-[#1B8DA64F] border-solid border-2 rounded-md outline-1 outline-[#1b8da694] bg-[#EEEEEE7A]"
                name="message"
                id="message"
                placeholder="Enter Your Message"
              ></textarea>

              <button className="mt-4 ml-4 hover:bg-retechgen-blue flex h-12 w-36 bg-theme-blue text-white rounded-2xl text-sm shadow-button_shadow">
                <p className=" self-center m-auto font-semibold">Send</p>
              </button>
            </form>
          </div>
        </div>
      </section>
  )
}

export default Contact