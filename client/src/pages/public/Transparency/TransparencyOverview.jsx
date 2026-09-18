import {
    FaDonate,
    FaHandHoldingHeart,
    FaUsers,
    FaCalendarCheck,
} from "react-icons/fa";

export default function TransparencyOverview() {

    const stats = [
        {
            id: 1,
            title: "Total Donations",
            value: "₹84,20,000",
            description:
                "Total contributions received from generous donors and supporters.",
            icon: <FaDonate />,
        },
        {
            id: 2,
            title: "Program Expenses",
            value: "₹69,04,400",
            description:
                "Amount invested directly into education, healthcare and welfare programs.",
            icon: <FaHandHoldingHeart />,
        },
        {
            id: 3,
            title: "Total Donors",
            value: "2,845",
            description:
                "Individuals, families and organizations supporting our mission.",
            icon: <FaUsers />,
        },
        {
            id: 4,
            title: "Last Updated",
            value: "17 Sep 2026",
            description:
                "Financial information is updated regularly for complete transparency.",
            icon: <FaCalendarCheck />,
        },
    ];

    return (
        <section className="bg-ivory py-24">

            <div className="container">

                {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">

                    <span className="rounded-full bg-maroon px-5 py-2 text-sm font-semibold uppercase tracking-[2px] text-white">
                        Transparency Overview
                    </span>

                    <h2 className="mt-6 font-heading text-5xl font-bold leading-tight text-black">
                        See Exactly Where
                        <br />
                        Every Rupee Goes
                    </h2>

                    <p className="mt-6 leading-8 text-gray-600">
                        Transparency is one of our core values. Every donation,
                        every expense and every financial activity is carefully
                        recorded to ensure complete accountability. We believe
                        every supporter deserves to know how their contribution
                        creates meaningful impact.
                    </p>

                </div>

                {/* Cards */}

                <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                    {stats.map((item) => (

                        <div
                            key={item.id}
                            className="group rounded-[28px] border border-maroon/10 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                        >

                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-maroon text-2xl text-white transition duration-300 group-hover:rotate-6">

                                {item.icon}

                            </div>

                            <h4 className="mt-8 text-sm font-semibold uppercase tracking-[3px] text-gray-500">

                                {item.title}

                            </h4>

                            <h3 className="mt-3 font-heading text-4xl font-bold text-black">

                                {item.value}

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