import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaHeart } from "react-icons/fa";

export default function ServiceList() {

    const services = [
        {
            id: 1,
            slug: "education-support",
            title: "Education Support",
            description:
                "Helping children and young adults access quality education through scholarships, learning resources and educational opportunities.",
            image:
                "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900",
        },
        {
            id: 2,
            slug: "healthcare",
            title: "Healthcare",
            description:
                "Providing accessible healthcare through medical camps, awareness programs and community health initiatives.",
            image:
                "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900",
        },
        {
            id: 3,
            slug: "food-distribution",
            title: "Food Distribution",
            description:
                "Supporting families with nutritious meals, grocery assistance and emergency food relief during difficult times.",
            image:
                "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=900",
        },
    ];

    return (
        <section className="bg-ivory py-24">

            <div className="container">

                <div className="mx-auto max-w-3xl text-center">

                    <span className="rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-white">
                        OUR SERVICES
                    </span>

                    <h2 className="mt-6 font-heading text-5xl font-bold leading-tight text-black">
                        Programs That Create
                        <br />
                        Lasting Community Impact
                    </h2>

                    <p className="mt-6 leading-8 text-gray-600">
                        Every initiative is thoughtfully designed to address
                        real community needs with compassion, responsibility
                        and complete transparency.
                    </p>

                </div>

                <div className="mt-24 space-y-36">

                    {services.map((service, index) => (

                        <div
                            key={service.id}
                            className={`grid items-center gap-16 ${
                                index % 2 === 0
                                    ? "lg:grid-cols-[1fr_520px]"
                                    : "lg:grid-cols-[520px_1fr]"
                            }`}
                        >

                            {/* Content */}

                            <div
                                className={`relative ${
                                    index % 2 !== 0
                                        ? "lg:order-2"
                                        : ""
                                }`}
                            >

                                {/* Background Number */}

                                <span className="absolute -top-10 left-0 font-heading text-[120px] font-bold leading-none text-maroon/5">
                                    0{service.id}
                                </span>

                                <div className="relative">

                                    <span className="inline-flex items-center gap-2 rounded-full bg-maroon/10 px-4 py-2 text-sm font-semibold text-maroon">

                                        <FaHeart className="text-xs" />

                                        Community Program

                                    </span>

                                    <h3 className="mt-6 font-heading text-5xl font-bold leading-tight text-black">

                                        {service.title}

                                    </h3>

                                    <p className="mt-8 max-w-xl leading-8 text-gray-600">

                                        {service.description}

                                    </p>

                                    <Link
                                        to={`/services/${service.slug}`}
                                        className="group mt-10 inline-flex items-center rounded-xl bg-maroon px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-darkmaroon"
                                    >

                                        Learn More

                                        <FaArrowRight className="ml-3 transition-all duration-300 group-hover:translate-x-2" />

                                    </Link>

                                </div>

                            </div>

                            {/* Image */}

                            <div
                                className={`relative ${
                                    index % 2 !== 0
                                        ? "lg:order-1"
                                        : ""
                                }`}
                            >

                                {/* Decoration */}

                                <FaHeart className="absolute -right-6 -top-6 text-8xl text-maroon/10" />

                                <div className="overflow-hidden rounded-tl-[80px] rounded-br-[80px] rounded-tr-[20px] rounded-bl-[20px] shadow-[0_25px_60px_rgba(0,0,0,.08)]">

                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="h-[500px] w-full object-cover transition duration-700 hover:scale-105"
                                    />

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}