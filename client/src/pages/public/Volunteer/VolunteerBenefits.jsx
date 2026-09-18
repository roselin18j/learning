import {
    FaHeart,
    FaHandsHelping,
    FaUsers,
    FaAward,
} from "react-icons/fa";

export default function VolunteerBenefits() {

    const benefits = [
        {
            id: 1,
            icon: <FaHeart />,
            title: "Create Positive Impact",
            description:
                "Your time and effort directly improve the lives of individuals and families in need.",
        },
        {
            id: 2,
            icon: <FaHandsHelping />,
            title: "Serve Your Community",
            description:
                "Be part of meaningful initiatives that support education, healthcare, food distribution and social welfare.",
        },
        {
            id: 3,
            icon: <FaUsers />,
            title: "Meet Inspiring People",
            description:
                "Work alongside dedicated volunteers, professionals and community leaders who share your passion.",
        },
        {
            id: 4,
            icon: <FaAward />,
            title: "Gain Valuable Experience",
            description:
                "Develop leadership, teamwork and communication skills while making a real difference.",
        },
    ];

    return (

        <section className="bg-ivory py-24">

            <div className="container">

                {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">

                    <span className="rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-white">
                        VOLUNTEER BENEFITS
                    </span>

                    <h2 className="mt-6 font-heading text-5xl font-bold text-black">
                        Why Become A Volunteer?
                    </h2>

                    <p className="mt-6 leading-8 text-gray-600">
                        Volunteering is not only about helping others—it is also
                        an opportunity to grow personally, build meaningful
                        relationships and create lasting positive change.
                    </p>

                </div>

                {/* Cards */}

                <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                    {benefits.map((item) => (

                        <div
                            key={item.id}
                            className="rounded-[30px] border border-maroon/10 bg-white p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-maroon hover:shadow-xl"
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