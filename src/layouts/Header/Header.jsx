    import React, { useState } from "react";
    import { Link } from "react-router-dom";

    import logo from "../../assets/images/logo.svg";
    import Modal from "../../common/Modal/Modal";

    export default function Header() {

        const [openDonate, setOpenDonate] = useState(false);

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
                <header className="flex items-center justify-between px-8 py-2 max-container mx-auto">
                     
                     {/* <Link to="/">
                           <img src={logo} alt="logo" />
                         </Link> 
                     */}

                    <nav className="flex gap-3">
                        {navLinks.map((item) => (
                            <Link key={item.path} to={item.path}>
                                {item.title}
                            </Link>
                        ))}
                    </nav>

                    <button
                        onClick={() => setOpenDonate(true)}
                        className="rounded-lg bg-maroon px-6 py-3 text-white hover:bg-coral transition cursor-pointer"
                    >
                        Donate
                    </button>
            </header>

                <Modal
                    isOpen={openDonate}
                    onClose={() => setOpenDonate(false)}
                    title="Support Our Mission"
                >
                    <p className="mb-4">
                        Thank you for supporting our organization.
                    </p>

                    <button className="rounded-lg bg-maroon px-5 py-2 text-white">
                        Donate Now
                    </button>
                </Modal>
            </>
        );
    }