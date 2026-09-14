import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/images/logo.svg";
import Modal from "../../../common/Modal/Modal";

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
        { title: "Blog", path: "/blog" },
        { title: "Contact", path: "/contact" },
    ];


    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 `}
            >
                <div className="max-container mx-auto flex items-center justify-between px-8">

                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>

                    <nav className={`flex gap-8 ${isSticky
                        ? "bg-white/90 backdrop-blur-md shadow-lg py-3"
                        : "bg-transparent py-5"
                    }`}>
                        {navLinks.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`font-body font-semibold transition-colors duration-300 ${isSticky
                                        ? "text-black hover:text-maroon"
                                        : "text-white hover:text-maroon"
                                    }`}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </nav>

                    <button
                        onClick={() => setOpenDonate(true)}
                        className="rounded-full bg-maroon px-6 py-3 text-white transition hover:bg-coral"
                    >
                        Quick Donate
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