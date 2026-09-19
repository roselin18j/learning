import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import logo from "../../../assets/images/logo.svg";
import Modal from "../../../common/Modal/Modal";
import { NavLink } from "react-router-dom";

export default function Header() {

    const [openDonate, setOpenDonate] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 80);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navLinks = [
        { title: "About", path: "/about" },
        { title: "Services", path: "/services" },
        { title: "Events", path: "/events" },
        { title: "Transparency", path: "/transparency" },
        { title: "Gallery", path: "/gallery" },
        { title: "Contact", path: "/contact" },
    ];


    return (
        <>
            <header
                className={`bg-white`}
            >
                <div className="max-container mx-auto flex items-center justify-between px-8">

                    <Link to="/">
                        <img src={logo} alt="logo" className="max-w-[83px] w-full  object-contain"/>
                    </Link>

                    <nav className={`flex gap-8  transition-all duration-300 ${isSticky
                        ? "bg-black/50 backdrop-blur-md rounded-3xl px-5 mt-2 shadow-lg py-3 w-fit mx-auto fixed top-0 left-0 right-0 z-50" 
                        : "bg-transparent py-5 tx"
                    }`}>
                        {navLinks.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`font-body font-semibold transition-colors duration-300 ${isSticky
                                        ? "text-white hover:text-maroon text-black"
                                        : "text-black hover:text-maroon "
                                    }`}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </nav>

                  
 <button  onClick={() => setOpenDonate(true)} className="group cursor-pointer inline-flex items-center rounded-xl bg-maroon px-7 py-4 text-white transition-all duration-300 hover:bg-green">

    <span>  Quick Donate</span>

    <FaHeart
        className="
            ml-0
            text-white
            transition-all
            duration-500
            ml-2
            group-hover:ml-3
            group-hover:text-white
        "
    />

</button>
                </div>
            </header>
            <Modal
                isOpen={openDonate}
                onClose={() => setOpenDonate(false)}
                title="Support Our Mission"
            >
                <p className="mb-4">
                    Thank you for supporting our organization.
                </p>

                <button className="rounded-lg bg-maroon px-5 py-2 text-white ">
                    Donate Now
                </button>
            </Modal>
        </>
    );
}