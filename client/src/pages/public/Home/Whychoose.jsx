import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    FaCheck,
    FaArrowRight,
} from "react-icons/fa";

import { getWhyChoose } from "../../../services/home.service";

export default function WhyChoose() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchWhyChoose();
    }, []);

    const fetchWhyChoose = async () => {

        try {

            const response = await getWhyChoose();

            setData(response.data.data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (
            <section className="py-24 text-center">
                Loading...
            </section>
        );

    }

    if (!data || !data.isActive) return null;

    return (

        <section className="py-24 bg-white">

            <div className="container">

                <div className="grid items-center gap-20 lg:grid-cols-2">

                    {/* Image */}

                    <div className="relative">

                        <div className="absolute -top-4 -left-4 h-full w-full border-2 border-gold" />

                        <img
                            src={data.image?.url}
                            alt={data.image?.alt || data.title}
                            className="relative h-[600px] w-full object-cover"
                        />

                        <div className="absolute bottom-0 left-0 border-l-4 border-gold bg-maroon px-8 py-6 text-white">

                            <h3 className="text-3xl font-heading font-bold">
                                {data.stats?.number}
                            </h3>

                            <p className="mt-1 text-white/80">
                                {data.stats?.title}
                            </p>

                        </div>

                    </div>

                    {/* Content */}

                    <div>

                        <div className="flex items-center gap-3">

                            <span className="w-6 h-0.5 bg-maroon" />

                            <span className="text-sm font-semibold text-maroon">

                                {data.badge}

                            </span>

                        </div>

                        <h2 className="mt-4 font-heading text-4xl lg:text-5xl font-bold text-black leading-tight">

                            {data.title}

                        </h2>

                        <p className="mt-6 leading-8 text-gray-600">

                            {data.description}

                        </p>

                        <ul className="mt-10 grid gap-5 sm:grid-cols-2">

                            {data.features.map((item, index) => (

                                <li
                                    key={index}
                                    className="flex items-start gap-3"
                                >

                                    <FaCheck className="mt-1 text-maroon" />

                                    <span className="text-gray-700">
                                        {item.title}
                                    </span>

                                </li>

                            ))}

                        </ul>

                        <Link
                            to={data.button?.link || "/about"}
                            className="group mt-12 inline-flex items-center rounded-sm bg-maroon px-7 py-4 font-semibold text-white transition-colors duration-300 hover:bg-darkmaroon"
                        >

                            <span>

                                {data.button?.text || "Learn More"}

                            </span>

                            <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />

                        </Link>

                    </div>

                </div>

            </div>

        </section>

    );

}