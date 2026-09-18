import React from "react";
import { FaHeart } from "react-icons/fa";

export default function ServicesIntro() {
    return (
        <section className="bg-white py-24">

            <div className="container">

                <div className="grid items-center gap-16 lg:grid-cols-2">

                    <div>

                        <span className="rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-white">
                            OUR SERVICES
                        </span>

                        <h2 className="mt-6 font-heading text-5xl font-bold leading-tight text-black">
                            Serving Communities
                            <br />
                            Through Meaningful
                            <br />
                            Social Initiatives
                        </h2>

                        <p className="mt-8 leading-8 text-gray-600">
                            Every community has unique challenges, and every
                            individual deserves an opportunity to thrive. Our
                            organization develops and delivers programs that
                            address education, healthcare, community welfare,
                            livelihood, environmental sustainability and other
                            essential social needs with compassion, integrity
                            and complete transparency.
                        </p>

                    </div>

                    <div className="relative overflow-hidden rounded-[40px] border border-maroon/10 bg-gradient-to-br from-ivory to-white p-10">

                        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-maroon/5"></div>

                        <div className="absolute -bottom-16 -left-16 h-52 w-52 rounded-full border-[30px] border-maroon/5"></div>

                        <div className="relative">

                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-maroon text-white">

                                <FaHeart className="text-3xl" />

                            </div>

                            <h3 className="mt-8 font-heading text-4xl font-bold text-black">
                                Every Initiative
                                <br />
                                Begins With Care
                            </h3>

                            <p className="mt-6 leading-8 text-gray-600">
                                We believe meaningful change is created through
                                thoughtful planning, responsible execution and
                                continuous community engagement. Every program
                                is designed to create lasting impact while
                                maintaining openness and accountability.
                            </p>

                            <div className="mt-10 rounded-2xl border border-maroon/10 bg-white p-6">

                                <p className="text-lg italic leading-8 text-black">
                                    "Our commitment is not limited to one cause.
                                    We continuously expand our services to meet
                                    the evolving needs of the communities we
                                    serve."
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}