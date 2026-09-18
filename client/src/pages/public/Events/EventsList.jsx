import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
    FaArrowRight,
    FaCalendarAlt,
    FaHeart,
    FaMapMarkerAlt,
    FaSearch,
} from "react-icons/fa";

export default function EventsList() {

    const [status, setStatus] = useState("all");
    const [search, setSearch] = useState("");

    const events = [
        {
            id: 1,
            slug: "community-health-camp",
            status: "upcoming",
            date: "25",
            month: "August 2026",
            title: "Community Health Camp",
            description:
                "Free health check-ups, medical consultations and medicines for underprivileged families.",
            location: "Madurai, Tamil Nadu",
            eventDate: "25 August 2026",
            image:
                "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900",
        },
        {
            id: 2,
            slug: "food-distribution-drive",
            status: "upcoming",
            date: "12",
            month: "September 2026",
            title: "Food Distribution Drive",
            description:
                "Providing nutritious meals and groceries to families facing financial hardship.",
            location: "Dindigul, Tamil Nadu",
            eventDate: "12 September 2026",
            image:
                "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=900",
        },
        {
            id: 3,
            slug: "education-support-program",
            status: "ongoing",
            date: "08",
            month: "October 2026",
            title: "Education Support Program",
            description:
                "Distributing school bags, books and learning materials to underprivileged children.",
            location: "Theni, Tamil Nadu",
            eventDate: "08 October 2026",
            image:
                "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900",
        },
        {
            id: 4,
            slug: "tree-plantation-drive",
            status: "completed",
            date: "18",
            month: "June 2026",
            title: "Tree Plantation Drive",
            description:
                "Together with volunteers we planted hundreds of trees to promote a greener environment.",
            location: "Madurai",
            eventDate: "18 June 2026",
            image:
                "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=900",
        },
        {
            id: 5,
            slug: "women-empowerment",
            status: "completed",
            date: "05",
            month: "May 2026",
            title: "Women Empowerment Workshop",
            description:
                "Skill development and awareness programs helping women become financially independent.",
            location: "Sivagangai",
            eventDate: "05 May 2026",
            image:
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900",
        },
        {
            id: 6,
            slug: "school-kit-distribution",
            status: "completed",
            date: "20",
            month: "April 2026",
            title: "School Kit Distribution",
            description:
                "Providing school bags, notebooks and stationery for children beginning a new academic year.",
            location: "Virudhunagar",
            eventDate: "20 April 2026",
            image:
                "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900",
        },
    ];

    const filteredEvents = useMemo(() => {
        return events.filter((item) => {

            const matchStatus =
                status === "all" || item.status === status;

            const matchSearch =
                item.title.toLowerCase().includes(search.toLowerCase()) ||
                item.location.toLowerCase().includes(search.toLowerCase());

            return matchStatus && matchSearch;

        });
    }, [events, status, search]);

    return (
        <section className="bg-white py-24">

            <div className="container">

                {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">

                    <span className="rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-white">
                        OUR EVENTS
                    </span>

                    <h2 className="mt-6 font-heading text-5xl font-bold text-black">
                        Events That Create
                        <br />
                        Lasting Community Impact
                    </h2>

                    <p className="mt-5 leading-8 text-gray-600">
                        Explore our upcoming, ongoing and completed initiatives
                        that bring positive change to communities.
                    </p>

                </div>

                {/* Search */}

                <div className="mx-auto mt-16 max-w-xl">

                    <div className="relative">

                        <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

                        <input
                            type="text"
                            placeholder="Search events..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="h-14 w-full rounded-full border border-maroon/15 bg-white pl-14 pr-5 outline-none focus:border-maroon"
                        />

                    </div>

                </div>

                {/* Filter */}

                <div className="mt-10 flex flex-wrap justify-center gap-4">

                    {[
                        "all",
                        "upcoming",
                        "ongoing",
                        "completed",
                    ].map((item) => (

                        <button
                            key={item}
                            onClick={() => setStatus(item)}
                            className={`rounded-full px-6 py-3 font-semibold capitalize transition ${status === item
                                ? "bg-maroon text-white"
                                : "bg-ivory text-blackhover:bg-maroon hover:text-white"
                                }`}
                        >
                            {item}
                        </button>

                    ))}

                </div>

                {/* Events */}

                <div className="mt-16 grid gap-8 lg:grid-cols-3">

                    {filteredEvents.map((item) => (

                        <div
                            key={item.id}
                            className="group relative overflow-hidden rounded-[30px] border border-maroon/10 bg-white p-8 shadow-[0_15px_35px_rgba(0,0,0,.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(109,8,8,.18)]"
                        >

                            {/* Folded Corner */}

                            <div className="absolute top-0 right-0">

                                <div className="relative h-24 w-24 overflow-hidden">

                                    <div className="absolute right-0 top-0 h-40 w-40 translate-x-20 -translate-y-20 rotate-45 bg-maroon"></div>

                                    <FaHeart className="absolute right-4 top-4 z-10 text-white" />

                                </div>

                            </div>

                            <img
                                src={item.image}
                                alt={item.title}
                                className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
                            />
                            {/* Date */}

                            <span className="font-heading text-5xl font-bold text-maroon">
                                {item.date}
                            </span>

                            <p className="uppercase tracking-[4px] text-gray-500">
                                {item.month}
                            </p>

                            {/* Title */}

                            <h3 className="mt-8 font-heading text-2xl font-bold text-black">
                                {item.title}
                            </h3>

                            <p className="mt-4 leading-7 text-gray-600">
                                {item.description}
                            </p>

                            {/* Info */}

                            <div className="mt-6 space-y-3">

                                <div className="flex items-center gap-3">

                                    <FaCalendarAlt className="text-maroon" />

                                    <span>{item.eventDate}</span>

                                </div>

                                <div className="flex items-center gap-3">

                                    <FaMapMarkerAlt className="text-maroon" />

                                    <span>{item.location}</span>

                                </div>

                            </div>

                            {/* Status */}

                            <div className="mt-6">

                                <span
                                    className={`rounded-full px-4 py-2 text-xs font-semibold uppercase ${item.status === "upcoming"
                                        ? "bg-blue-100 text-blue-700"
                                        : item.status === "ongoing"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-gray-200 text-gray-700"
                                        }`}
                                >
                                    {item.status}
                                </span>

                            </div>

                            <Link
                                to={`/events/${item.slug}`}
                                className="group/btn mt-8 inline-flex items-center font-semibold text-maroon"
                            >
                                View Details
                            </Link>

                        </div>

                    ))}

                </div>

                {/* Empty */}

                {filteredEvents.length === 0 && (

                    <div className="mt-20 text-center">

                        <h3 className="text-2xl font-bold text-black">
                            No Events Found
                        </h3>

                        <p className="mt-3 text-gray-500">
                            Try another search or filter.
                        </p>

                    </div>

                )}

            </div>

        </section>
    );
}