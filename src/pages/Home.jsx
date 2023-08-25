import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Product from "../components/Product";
import Contact from "../components/Contact";

const Home = () => {
    return (
        <>
            <div className="font-Ubuntu">
                <Navbar />
                <Hero/>
                <Contact />
                <Footer/>
            </div>

        </>
    )
}

export default Home;