import React from "react";
import {
    FaUsers,
    FaHandHoldingHeart,
    FaHandsHelping,
    FaHome,
} from "react-icons/fa";

export default function Impact() {

    const impacts = [
        {
            id: 1,
            number: "18K+",
            title: "Lives Impacted",
            icon: FaUsers,
        },
        {
            id: 2,
            number: "850+",
            title: "Families Supported",
            icon: FaHandHoldingHeart,
        },
        {
            id: 3,
            number: "150+",
            title: "Active Volunteers",
            icon: FaHandsHelping,
        },
        {
            id: 4,
            number: "12+",
            title: "Years of Service",
            icon: FaHome,
        },
    ];

    return (

        <section className="py-24 bg-darkmaroon">

            <div className="container">

                <div className="text-center max-w-3xl mx-auto">

                    <span className="rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-white">
                        OUR IMPACT
                    </span>

                    <h2 className="mt-6 text-5xl font-heading font-bold text-white">
                        Every Number Represents A Life We Touched
                    </h2>

                    <p className="mt-6 leading-8 text-white/70">
                        Together with our donors, volunteers and supporters,
                        we continue creating meaningful change in communities.
                    </p>

                </div>

                <div className="mt-18 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {impacts.map((item) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={item.id}
                                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-maroon hover:bg-white/10"
                            >

                                <div className="flex h-18 w-18 items-center justify-center rounded-2xl bg-maroon text-3xl text-white transition duration-500 group-hover:rotate-6">

                                    <Icon />

                                </div>

                                <h3 className="mt-8 text-5xl font-heading font-bold text-white">
                                    {item.number}
                                </h3>

                                <p className="mt-3 text-lg text-white/80">
                                    {item.title}
                                </p>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>

    );

}