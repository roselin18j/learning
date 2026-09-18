import React from "react";
import { FaHeart } from "react-icons/fa";

export default function CoreValue() {

    const values = [
        {
            title: "Compassion",
            description:
                "We serve every individual with kindness, dignity and empathy regardless of their background.",
        },
        {
            title: "Integrity",
            description:
                "Honesty, accountability and ethical decisions guide every action we take.",
        },
        {
            title: "Transparency",
            description:
                "Every donation, expense and project is openly documented to build lasting trust.",
        },
        {
            title: "Community",
            description:
                "We believe meaningful change is created when communities work together.",
        },
        {
            title: "Sustainability",
            description:
                "Our programs focus on creating long-term solutions rather than temporary relief.",
        },
    ];

    return (
        <section className="bg-ivory py-28">

            <div className="container max-w-5xl">

                <div className="text-center">

                    <span className="rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-white">
                        OUR VALUES
                    </span>

                    <h2 className="mt-6 font-heading text-5xl font-bold text-black">
                        The Principles That
                        <br />
                        Guide Every Decision
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-600">
                        These values shape every initiative, every partnership
                        and every life we strive to uplift.
                    </p>

                </div>

                <div className="mt-24">

                    {values.map((item, index) => (

                        <div key={index}>

                            <div className="flex items-start gap-8">

                                <div className="mt-2 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-maroon text-white">

                                    <FaHeart />

                                </div>

                                <div className="flex-1">

                                    <h3 className="font-heading text-4xl font-bold text-black">

                                        {item.title}

                                    </h3>

                                    <p className="mt-4 max-w-3xl leading-8 text-gray-600">

                                        {item.description}

                                    </p>

                                </div>

                            </div>

                            {index !== values.length - 1 && (

                                <div className="my-12 border-t border-maroon/10"></div>

                            )}

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}