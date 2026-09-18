import React from "react";
import { Link } from "react-router-dom";
import {
    FaCheck,
    FaArrowRight,
} from "react-icons/fa";

import whyImg from "../../../assets/images/mnbanner.jpg";

export default function WhyChoose() {

    const features = [
        "100% Transparent Organization",
        "Dedicated Volunteer Network",
        "Community-Centered Programs",
        "Trusted Donation Management",
        "Quick Emergency Response",
        "Sustainable Long-Term Impact",
    ];

    return (

        <section className="py-24 bg-white">

            <div className="container">

                <div className="grid items-center gap-20 lg:grid-cols-2">

                    {/* Image */}

                    <div className="relative">

                        <div className="absolute -top-4 -left-4 h-full w-full border-2 border-gold" />

                        <img
                            src={whyImg}
                            alt="Volunteers standing together at sunrise"
                            className="relative h-[600px] w-full object-cover"
                        />

                        <div className="absolute bottom-0 left-0 border-l-4 border-gold bg-maroon px-8 py-6 text-white">

                            <h3 className="text-3xl font-heading font-bold">
                                18K+
                            </h3>

                            <p className="mt-1 text-white/80">
                                Lives Positively Impacted
                            </p>

                        </div>

                    </div>

                    {/* Content */}

                    <div>

                        <div className="flex items-center gap-3">
                            <span className="w-6 h-0.5 bg-maroon" />
                            <span className="text-sm font-semibold text-maroon">
                                Why families trust us
                            </span>
                        </div>

                        <h2 className="mt-4 font-heading text-4xl lg:text-5xl font-bold text-blackleading-tight">
                            Built on transparency, run by the community
                        </h2>

                        <p className="mt-6 leading-8 text-gray-600">
                            Every contribution creates measurable change,
                            tracked from the first rupee to the last meal
                            served.
                        </p>

                        <div className="mt-10 grid gap-5 sm:grid-cols-2">

                            {features.map((item) => (

                                <div
                                    key={item}
                                    className="flex items-start gap-3"
                                >

                                    <FaCheck className="mt-1 shrink-0 text-maroon" />

                                    <span className="text-gray-700">
                                        {item}
                                    </span>

                                </div>

                            ))}

                        </div>

                        <Link
                            to="/about"
                            className="group mt-12 inline-flex items-center rounded-sm bg-maroon px-7 py-4 font-semibold text-white transition-colors duration-300 hover:bg-darkmaroon"
                        >

                            <span>Learn More</span>

                            <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />

                        </Link>

                    </div>

                </div>

            </div>

        </section>

    );

}