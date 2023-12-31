import React,{useState} from "react";
import Touch_gps from "../assets/touch_gps.svg";
import Touch_mail from "../assets/touch_mail.svg";
import Touch_call from "../assets/touch_call.svg";
import { firebaseApp, firestoreDb } from "../firebase";
import { collection, addDoc } from "firebase/firestore";


function Contact() {
  const formElement  = document.getElementById("contact-form");  
  const [formData, setFormData] = useState({
      f_name: "",
      l_name: "",
      number: "",
      email: "",
      message: "",
    });


  const handleSendClick = async (e) => {
    e.preventDefault();
    if (!formData.f_name || !formData.l_name || !formData.email || !formData.number || !formData.message) {
      alert("Please fill in all fields." );
    }
    else{
      try {
        const formDataCollection = collection(firestoreDb, "apstamContactDetails");
        await addDoc(formDataCollection, formData);
        alert("Thanks for connecting, Your message has been received!");
        setFormData({
          f_name: "",
          l_name: "",
          number: "",
          email: "",
          message: "",
        });
      } catch (error) {
        console.error("Error submitting form data:", error);
        alert("Error connecting. Please try again later.");
      }
    }
    
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <section
      className="relative bg-transparent  xs:rounded-[4rem] sm:rounded-[8rem] m-1 mb-2"
      id="contact-section"
    >
      <div className="flex-col">
        <h2 className="pt-8 text-center font-bold text-[#1F2347] text-4xl">
          Get In Touch
        </h2>
        <div className="mx-auto mt-1 mb-4 bg-retechgen-blue w-40 h-1"></div>
      </div>

      <div className="flex justify-evenly flex-wrap">
        <div className="m-10 mx-30 flex">
          <div className="self-center mx-auto mt-1 mb-4 bg-black w-1 h-40 mr-8"></div>
          <h2 className="self-center text-left font-bold text-black text-3xl leading-10">
            To make requests for <br /> further information,
            <h2 className=" text-left font-bold text-cyan-900 text-3xl leading-10">
              Contact us.
            </h2>
          </h2>
        </div>

        <div className="flex-col md:ml-40 xl:ml-20 pt-5 sm:m-16 xs:mt-96 sm:mt-8 md:w-150 lg:w-160 sm:h-128 xs:h-150 bg-white shadow-form_shadow relative ">
          <div className=" bg-cyan-700 w-80 h-80 rounded-3xl flex flex-col justify-center absolute sm:-left-36 sm:top-24 xs:left-13 xs:-top-88" >
            <div className="flex-col ">
              <div className="ml-4 my-10 flex h-7">
                <img src={Touch_gps} alt="" />
                <h2 className="ml-3 text-white font-medium">
                  Delhi-NCR, India
                </h2>
              </div>

              <div className="ml-4 my-10 flex h-7">
                <img className="h-5" src={Touch_mail} alt="" />
                <h2 className="ml-2 text-white font-medium">
                  apstamtechnologies@gmail.com
                </h2>
              </div>

              <div className="ml-4 my-10 flex h-7">
                <img src={Touch_call} alt="" />
                <h2 className="ml-3 text-white font-medium">+91 78899 18706</h2>
              </div>
            </div>
          </div>

          <form id="contact-form" className=" xs:ml-16 xs:mr-16 sm:mr-0 sm:ml-48 mt-8 xs:w-90 sm:w-128 flex column-2 flex-wrap">
            <input
              className="m-4 p-3 h-12 w-52 text-theme-gray2 font-medium border-[#1B8DA64F] border-solid border-2 rounded-md outline-1 outline-[#1b8da694] bg-[#EEEEEE7A]"
              type="text"
              placeholder="First Name"
              name="f_name"
              id="f_name"
              value={formData.f_name}
              onChange={handleChange}
            />

            <input
              className="m-4 p-3 h-12 w-52 text-theme-gray2 font-medium border-[#1B8DA64F] border-solid border-2 rounded-md outline-1 outline-[#1b8da694] bg-[#EEEEEE7A]"
              type="text"
              placeholder="Last Name"
              name="l_name"
              id="l_name"
              value={formData.l_name}
              onChange={handleChange}
            />

            <input
              className="m-4 p-3 h-12 w-52 text-theme-gray2 font-medium border-[#1B8DA64F] border-solid border-2 rounded-md outline-1 outline-[#1b8da694] bg-[#EEEEEE7A]"
              type="number"
              placeholder="Mobile Number"
              name="number"
              id="number"
              value={formData.number}
              onChange={handleChange}
            />

            <input
              className="m-4 p-3 h-12 w-52 text-theme-gray2 font-medium border-[#1B8DA64F] border-solid border-2 rounded-md outline-1 outline-[#1b8da694] bg-[#EEEEEE7A]"
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />

            <textarea
              className="mt-5 m-4 p-3 h-36 lg:w-112 xs:w-52 text-theme-gray2 font-medium border-[#1B8DA64F] border-solid border-2 rounded-md outline-1 outline-[#1b8da694] bg-[#EEEEEE7A]"
              name="message"
              id="message"
              placeholder="Enter Your Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button  onClick={handleSendClick} className="mt-4 ml-4 hover:bg-cyan-900 flex h-12 w-36 bg-cyan-700 text-white rounded-3xl text-md ">
              <p className=" self-center m-auto text-lg font-semibold">Send</p>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Contact;
