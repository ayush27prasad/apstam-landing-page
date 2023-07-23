import React from "react";

const Navbar = () => {
    return (
        <>
            <div>
                <header>
                    <div className="container flex flex-row justify-between">
                        <div class="logo pl-3 sm:pl-24" >Your Logo</div>
                        <button id="contactBtn" className=" bg-[#007bff] shadow shadow-blue-400 hover:shadow-xl  p-1 px-2">Contact Us</button>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Navbar;