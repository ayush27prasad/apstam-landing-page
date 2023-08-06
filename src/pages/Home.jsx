import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Product from "../components/Product";

const Home = () => {
    return (
        <>
            <div>
                <Navbar />
                <Hero/>
                <Product/>
                <Footer />
            </div>

        </>
    )
}

export default Home;