import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

export default function DonationCTA({
    badge = "DONATE TODAY",
    title = "Every Contribution Creates A Better Tomorrow",
    description = "Your kindness helps provide education, healthcare, food, emergency relief and hope to families across our communities. Every donation makes a lasting impact.",
    primaryText = "Donate Now",
    secondaryText = "Become Volunteer",
    primaryLink = "#",
    secondaryLink = "/contact",
}) {
    return (
        <section className="relative overflow-hidden bg-ivory py-24">

            {/* Blur Background */}

            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-maroon blur-3xl"></div>

            <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-maroon blur-3xl"></div>

            {/* Decorative Hearts */}

            <FaHeart className="absolute left-20 top-14 rotate-12 text-6xl text-black/5" />

            <FaHeart className="absolute bottom-16 right-24 -rotate-12 text-8xl text-black/5" />

            <div className="container relative z-10">

                <div className="mx-auto max-w-5xl rounded-[40px] border border-white/10 bg-white/5 p-14 text-center backdrop-blur-xl">

                    <span className="rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-white">
                        {badge}
                    </span>

                    <h2 className="mt-7 font-heading text-5xl font-bold leading-tight text-black">
                        {title}
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black">
                        {description}
                    </p>

                    <div className="mt-12 flex flex-wrap justify-center gap-5">

                        <Link
                            to={primaryLink}
                            className="group inline-flex items-center rounded-xl bg-maroon px-8 py-4 font-semibold text-white transition hover:bg-green"
                        >
                            <span>{primaryText}</span>

                            <FaHeart className="ml-3 transition-all duration-300 group-hover:translate-x-2" />
                        </Link>

                        <Link
                            to={secondaryLink}
                            className="group inline-flex items-center rounded-xl border border-darkmaroon px-8 py-4 font-semibold text-blacktransition hover:text-white hover:border-transparent hover:bg-green"
                        >
                            <span>{secondaryText}</span>

                            <FaHeart className="ml-3 transition-all duration-300 group-hover:translate-x-2" />
                        </Link>

                    </div>

                </div>

            </div>

        </section>
    );
}