import {
    FaBookOpen,
    FaHeartbeat,
    FaUtensils,
    FaLeaf,
    FaCalendarAlt,
    FaUsers,
} from "react-icons/fa";

export default function VolunteerOpportunities() {

    const opportunities = [
        {
            id: 1,
            icon: <FaBookOpen />,
            title: "Education Support",
            description:
                "Help children with learning programs, tutoring and educational activities.",
        },
        {
            id: 2,
            icon: <FaHeartbeat />,
            title: "Healthcare Camps",
            description:
                "Assist during medical camps by helping organize registrations and patient support.",
        },
        {
            id: 3,
            icon: <FaUtensils />,
            title: "Food Distribution",
            description:
                "Join our volunteers in preparing and distributing meals to families in need.",
        },
        {
            id: 4,
            icon: <FaLeaf />,
            title: "Environmental Drives",
            description:
                "Participate in tree plantation, clean-up campaigns and sustainability initiatives.",
        },
        {
            id: 5,
            icon: <FaCalendarAlt />,
            title: "Event Management",
            description:
                "Support charity events, awareness programs and community outreach activities.",
        },
        {
            id: 6,
            icon: <FaUsers />,
            title: "Community Outreach",
            description:
                "Connect with local communities, identify needs and support our ongoing programs.",
        },
    ];

    return (

        <section className="bg-ivory py-24">

            <div className="container">

                {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">

                    <span className="rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-white">
                        VOLUNTEER OPPORTUNITIES
                    </span>

                    <h2 className="mt-6 font-heading text-5xl font-bold text-black">
                        Find The Right
                        <br />
                        Way To Contribute
                    </h2>

                    <p className="mt-6 leading-8 text-gray-600">
                        Everyone has unique talents. Choose an opportunity that
                        matches your interests and help us create meaningful
                        change in our communities.
                    </p>

                </div>

                {/* Cards */}

                <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {opportunities.map((item) => (

                        <div
                            key={item.id}
                            className="rounded-[30px] border border-maroon/10 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-maroon hover:shadow-xl"
                        >

                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-maroon text-2xl text-white">

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