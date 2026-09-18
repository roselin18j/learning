import React from "react";
import { FaHeart, FaBullseye, FaEye } from "react-icons/fa";

export default function MissionVision() {
    return (
        <section className="bg-white py-24">

            <div className="container">

                <div className="mx-auto max-w-3xl text-center">

                    <span className="rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-white">
                        OUR PURPOSE
                    </span>

                    <h2 className="mt-6 font-heading text-5xl font-bold text-black">
                        Driven By Compassion,
                        <br />
                        Guided By Purpose
                    </h2>

                    <p className="mt-6 leading-8 text-gray-600">
                        Everything we do begins with compassion and ends with
                        meaningful impact for the communities we serve.
                    </p>

                </div>

                <div className="relative mt-24">

                    {/* Center Line */}

                    <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-maroon/15 lg:block"></div>

                    {/* Heart */}

                    <div className="absolute left-1/2 top-1/2 hidden h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-8 border-white bg-maroon shadow-xl lg:flex">

                        <FaHeart className="text-3xl text-white" />

                    </div>

                    <div className="grid gap-12 lg:grid-cols-2">

                        {/* Mission */}

                        <div className="rounded-[36px] border border-maroon/10 bg-ivory p-10">

                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-maroon text-white">

                                <FaBullseye className="text-2xl" />

                            </div>

                            <span className="mt-8 inline-block text-sm font-semibold uppercase tracking-[4px] text-maroon">
                                Our Mission
                            </span>

                            <h3 className="mt-3 font-heading text-4xl font-bold text-black">
                                Serving Humanity
                                With Love & Care
                            </h3>

                            <p className="mt-6 leading-8 text-gray-600">
                                We strive to improve lives through education,
                                healthcare, food assistance and community
                                development while ensuring dignity,
                                compassion and equal opportunities for every
                                individual.
                            </p>

                        </div>

                        {/* Vision */}

                        <div className="rounded-[36px] border border-maroon/10 bg-white p-10 shadow-lg">

                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-darkmaroon text-white">

                                <FaEye className="text-2xl" />

                            </div>

                            <span className="mt-8 inline-block text-sm font-semibold uppercase tracking-[4px] text-maroon">
                                Our Vision
                            </span>

                            <h3 className="mt-3 font-heading text-4xl font-bold text-black">
                                Building Stronger
                                Communities Together
                            </h3>

                            <p className="mt-6 leading-8 text-gray-600">
                                Our vision is to create a future where every
                                person has access to education, healthcare,
                                nutrition and opportunities to live with hope,
                                confidence and self-respect.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}