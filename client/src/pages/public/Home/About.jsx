import { useEffect, useState } from "react";
import { FaHeart, FaArrowRight } from "react-icons/fa";
import { getAbout } from "../../../services/home.service";

export default function About() {

    const [about, setAbout] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetchAbout();

    }, []);

    const fetchAbout = async () => {

        try {

            const res = await getAbout();

            setAbout(res.data.data);

        } catch (err) {

            console.log(err);

        } finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (
            <section className="py-24 bg-ivory">
                <div className="container text-center">
                    Loading...
                </div>
            </section>
        );

    }

    if (!about) {

        return (
            <section className="py-24 bg-ivory">
                <div className="container text-center">
                    No About Data Found
                </div>
            </section>
        );

    }

    return (

        <section className="py-24 bg-ivory">

            <div className="container">

                <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

                    {/* LEFT */}

                    <div>

                        <div className="flex items-center gap-3">

                            <span className="h-[2px] w-10 bg-maroon" />

                            <span className="uppercase tracking-[3px] text-sm font-semibold text-green">

                                {about.badge}

                            </span>

                        </div>

                        <h2 className="mt-6 font-heading text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-black">

                            {about.title}

                        </h2>

                        <p className="mt-6 text-lg leading-8 text-gray-600">

                            {about.description}

                        </p>

                        <div className="mt-12 space-y-8">

                            {about.features?.map((item, index) => (

                                <div
                                    key={index}
                                    className="flex gap-5"
                                >

                                    <div
                                        className="
                                            flex
                                            h-12
                                            w-12
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-xl
                                            bg-maroon/10
                                            text-maroon
                                        "
                                    >

                                        <FaHeart />

                                    </div>

                                    <div>

                                        <h4 className="text-xl font-semibold text-black">

                                            {item.title}

                                        </h4>

                                        <p className="mt-2 leading-7 text-gray-600">

                                            {item.description}

                                        </p>

                                    </div>

                                </div>

                            ))}

                        </div>

                        <button
                            className="
                                group
                                mt-12
                                inline-flex
                                items-center
                                gap-3
                                rounded-md
                                bg-green
                                px-8
                                py-4
                                text-white
                                transition-all
                                duration-300
                                hover:bg-maroon
                            "
                        >

                            Learn More

                            <FaArrowRight
                                className="
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-1
                                "
                            />

                        </button>

                    </div>

                    {/* RIGHT */}

                    <div className="relative">

                        <div
                            className="
                                absolute
                                -left-6
                                -bottom-6
                                h-full
                                w-full
                                rounded-[40px]
                                bg-green/10
                            "
                        />

                        {about.image?.url && (

                            <img
                                src={about.image.url}
                                alt={about.image.alt || "About"}
                                className="
                                    relative
                                    h-[650px]
                                    w-full
                                    rounded-[40px]
                                    object-cover
                                    shadow-2xl
                                "
                            />

                        )}

                    </div>

                </div>

            </div>

        </section>

    );

}