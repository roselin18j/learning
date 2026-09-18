import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.svg";

import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaHeart,
} from "react-icons/fa";

export default function Footer() {

    const quickLinks = [
        { title: "About", path: "/about" },
        { title: "Services", path: "/services" },
        { title: "Events", path: "/events" },
        { title: "Gallery", path: "/gallery" },
        { title: "Transparency", path: "/transparency" },
        { title: "Contact", path: "/contact" },
        { title: "Volunteer", path: "/volunteer" },
    ];

    return (

        <footer className="bg-white text-black">

            <div className="container py-20">

                <div className="grid gap-14 lg:grid-cols-4">

                    {/* Logo */}

                    <div>

                        <img
                            src={logo}
                            alt="Logo"
                            className="w-36 rounded-xl  p-2"
                        />

                        <p className="mt-6 leading-8 text-black/70">
                            Together we create hope through education,
                            healthcare, food support and community development.
                        </p>

                    </div>

                    {/* Quick Links */}

                    <div>

                        <h3 className="text-2xl font-heading font-bold">
                            Quick Links
                        </h3>

                        <ul className="mt-6 space-y-4">

                            {quickLinks.map((item) => (

                                <li key={item.path}>

                                    <Link
                                        to={item.path}
                                        className="group inline-flex items-center gap-3 text-black/70 transition hover:text-black"
                                    >

                                        <FaHeart className="text-xs text-maroon transition group-hover:translate-x-1" />

                                        {item.title}

                                    </Link>

                                </li>

                            ))}

                        </ul>

                    </div>

                    {/* Contact */}

                    <div>

                        <h3 className="text-2xl font-heading font-bold">
                            Contact
                        </h3>

                        <ul className="mt-6 space-y-5">

                            <li className="flex gap-4">

                                <FaMapMarkerAlt className="mt-1 text-maroon" />

                                <span className="text-black/70">
                                    Madurai, Tamil Nadu, India
                                </span>

                            </li>

                            <li className="flex gap-4">

                                <FaPhoneAlt className="mt-1 text-maroon" />

                                <span className="text-black/70">
                                    +91 98765 43210
                                </span>

                            </li>

                            <li className="flex gap-4">

                                <FaEnvelope className="mt-1 text-maroon" />

                                <span className="text-black/70">
                                    info@arakattalai.org
                                </span>

                            </li>

                        </ul>

                    </div>

                    {/* Social */}

                    <div>

                        <h3 className="text-2xl font-heading font-bold">
                            Follow Us
                        </h3>

                        <p className="mt-6 leading-8 text-black/70">
                            Stay connected with our latest community activities.
                        </p>

                        <div className="mt-8 flex gap-4">

                            {[
                                FaFacebookF,
                                FaInstagram,
                                FaYoutube,
                                FaLinkedinIn,
                            ].map((Icon, index) => (

                                <a
                                    key={index}
                                    href="#"
                                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-black/10 bg-black/5 transition hover:bg-maroon"
                                >

                                    <Icon />

                                </a>

                            ))}

                        </div>

                    </div>

                </div>

            </div>

            {/* Bottom */}

            <div className="border-t border-black/10">

                <div className="container flex flex-col items-center justify-between gap-4 py-6 text-sm text-black/60 md:flex-row">

                    <p>
                        © {new Date().getFullYear()} Madurai Arakattalai.
                        All Rights Reserved.
                    </p>

                    <div className="flex gap-8">

                        <Link to="/privacy" className="hover:text-black">
                            Privacy Policy
                        </Link>

                        <Link to="/terms" className="hover:text-black">
                            Terms & Conditions
                        </Link>

                    </div>

                </div>

            </div>

        </footer>

    );
}