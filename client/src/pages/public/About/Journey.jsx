import React from "react";
import { FaHeart } from "react-icons/fa";

export default function Journey() {
    const journey = [
        {
            year: "2014",
            title: "The Beginning",
            description:
                "Started with a small group of passionate volunteers dedicated to helping underprivileged families.",
        },
        {
            year: "2016",
            title: "Healthcare Initiative",
            description:
                "Organized our first free medical camp, providing healthcare access to rural communities.",
        },
        {
            year: "2019",
            title: "Education Support",
            description:
                "Expanded our mission by providing school supplies, scholarships and learning opportunities.",
        },
        {
            year: "2022",
            title: "Community Expansion",
            description:
                "Extended food distribution and community welfare programs across multiple districts.",
        },
        {
            year: "2026",
            title: "Growing Together",
            description:
                "More than 18,000 lives impacted with the support of volunteers, donors and well-wishers.",
        },
    ];

    return (
        <section className="bg-white py-28">

            <div className="container">

                {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">

                    <span className="rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-white">
                        OUR JOURNEY
                    </span>

                    <h2 className="mt-6 font-heading text-5xl font-bold text-black">
                        Every Step Has
                        <br />
                        A Story To Tell
                    </h2>

                    <p className="mt-6 leading-8 text-gray-600">
                        From a humble beginning to serving thousands of lives,
                        our journey is built on compassion, trust and community
                        support.
                    </p>

                </div>

                {/* Timeline */}

                <div className="relative mx-auto mt-24 max-w-5xl">

                    {/* Vertical Line */}

                    <div className="absolute left-[85px] top-0 h-full w-[2px] bg-maroon/15 lg:left-1/2 lg:-translate-x-1/2"></div>

                    {journey.map((item, index) => (

                        <div
                            key={item.year}
                            className={`relative mb-20 flex flex-col lg:flex-row ${
                                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                            }`}
                        >

                            {/* Content */}

                            <div className="w-full lg:w-[44%]">

                                <div className="rounded-[28px] border border-maroon/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                                    <span className="text-sm font-semibold uppercase tracking-[5px] text-maroon">
                                        {item.year}
                                    </span>

                                    <h3 className="mt-3 font-heading text-3xl font-bold text-black">
                                        {item.title}
                                    </h3>

                                    <p className="mt-5 leading-8 text-gray-600">
                                        {item.description}
                                    </p>

                                </div>

                            </div>

                            {/* Center */}

                            <div className="relative hidden lg:flex w-[12%] justify-center">

                                <div className="absolute top-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-maroon shadow-lg">

                                    <FaHeart className="text-white" />

                                </div>

                            </div>

                            {/* Empty */}

                            <div className="hidden lg:block lg:w-[44%]"></div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}