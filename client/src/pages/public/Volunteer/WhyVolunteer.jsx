import {
    FaHandsHelping,
    FaUsers,
    FaHeart,
    FaGlobeAsia,
} from "react-icons/fa";

export default function WhyVolunteer() {

    const reasons = [
        {
            id: 1,
            icon: <FaHandsHelping />,
            title: "Create Real Impact",
            description:
                "Support meaningful initiatives that improve lives and strengthen communities.",
        },
        {
            id: 2,
            icon: <FaUsers />,
            title: "Work Together",
            description:
                "Join passionate volunteers who share a common goal of serving society.",
        },
        {
            id: 3,
            icon: <FaHeart />,
            title: "Share Kindness",
            description:
                "Use your time, skills and compassion to bring hope to people in need.",
        },
        {
            id: 4,
            icon: <FaGlobeAsia />,
            title: "Build A Better Future",
            description:
                "Contribute towards sustainable social development through community service.",
        },
    ];

    return (

        <section className="bg-white py-24">

            <div className="container">

                {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">

                    <span className="rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-white">
                        WHY VOLUNTEER
                    </span>

                    <h2 className="mt-6 font-heading text-5xl font-bold text-black">
                        Be The Reason
                        <br />
                        Someone Smiles Today
                    </h2>

                    <p className="mt-6 leading-8 text-gray-600">
                        Volunteering is more than giving your time. It is about
                        making a meaningful difference, inspiring hope and
                        helping communities grow stronger together.
                    </p>

                </div>

                {/* Cards */}

                <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                    {reasons.map((item) => (

                        <div
                            key={item.id}
                            className="rounded-[30px] border border-maroon/10 bg-ivory p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-maroon hover:shadow-xl"
                        >

                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-maroon text-3xl text-white">

                                {item.icon}

                            </div>

                            <h3 className="mt-8 font-heading text-2xl font-bold text-black">

                                {item.title}

                            </h3>

                            <p className="mt-5 leading-7 text-gray-600">

                                {item.description}

                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}