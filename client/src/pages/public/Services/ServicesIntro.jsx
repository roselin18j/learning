import React from "react";
import { FaHeart } from "react-icons/fa";

export default function ServicesIntro() {
    return (
        <section className="bg-white py-16 lg:py-20">
            <div className="container">

                {/* Heading */}
                <div className="mx-auto max-w-3xl text-center">

                    <span className="inline-block rounded-full bg-maroon px-5 py-2 text-sm font-semibold tracking-wide text-white">
                        OUR SERVICES
                    </span>

                    <h2 className="mt-5 font-heading text-4xl font-bold leading-tight text-black lg:text-5xl">
                        Where There Is A Need,
                        <br />
                        <span className="text-maroon">
                            There Is Our Service
                        </span>
                    </h2>

                    {/* Divider */}
                    <div className="mt-6 flex items-center justify-center gap-4">
                        <span className="h-px w-16 bg-maroon/20"></span>
                        <FaHeart className="text-sm text-maroon" />
                        <span className="h-px w-16 bg-maroon/20"></span>
                    </div>

                    {/* Description */}
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                        Every act of kindness creates hope. Through education,
                        healthcare, food support, and community initiatives, we
                        serve with compassion, dignity, and transparency to
                        create a lasting impact.
                    </p>

                    {/* Bottom Accent */}
                    <div className="mt-10 flex justify-center">
                        <div className="h-1 w-20 rounded-full bg-maroon"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}