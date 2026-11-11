import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    FaHeart,
    FaArrowRight,
    FaCalendarAlt,
    FaMapMarkerAlt,
} from "react-icons/fa";

import { getEvents } from "../../../services/events.service";
import { getHomeEventsSection } from "../../../services/home.service";

export default function EventCard() {

    const [events, setEvents] = useState([]);
    const [heading, setHeading] = useState({});

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {

        try {

            const response = await getEvents();
            const headingRes = await getHomeEventsSection();

            const headingData =
                headingRes?.data?.data?.eventSection ||
                headingRes?.data?.data?.eventSection ||
                headingRes?.data?.data ||
                {};

            setHeading(headingData);

            const allEvents =
                response.data.data.eventSection.events;

            const homepageEvents = allEvents
                .filter(
                    (item) =>
                        item.showOnHomepage &&
                        item.isPublished
                )
                .sort(
                    (a, b) =>
                        a.homepageOrder - b.homepageOrder
                )
                .slice(0, 3);

            setEvents(homepageEvents);

        } catch (error) {

            console.log(error);

        }

    };

    return (
        <section className="py-24 bg-ivory">

            <div className="container">

                {/* Static Heading */}

                <div className="text-center max-w-3xl mx-auto mb-16">

                    {heading.badge && (
                        <span className="px-5 py-2 rounded-full bg-maroon text-white text-sm font-semibold">
                            {heading.badge}
                        </span>
                    )}

                    {heading.title && (
                        <h2 className="mt-6 text-5xl font-heading font-bold">
                            {heading.title}
                        </h2>
                    )}

                    {heading.subtitle && (
                        <h4 className="mt-4 text-xl text-maroon">
                            {heading.subtitle}
                        </h4>
                    )}

                    {heading.description && (
                        <p className="mt-5 text-gray-600 leading-8">
                            {heading.description}
                        </p>
                    )}

                </div>

                <div className="mt-16 grid gap-8 lg:grid-cols-3">

                    {events.map((item) => (

                        <div
                            key={item._id}
                            className="group relative overflow-hidden rounded-[30px] border border-maroon/10 bg-white p-8 shadow-[0_15px_35px_rgba(0,0,0,.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(109,8,8,.18)]"
                        >

                            <div className="absolute top-0 right-0">

                                <div className="relative h-24 w-24 overflow-hidden">

                                    <div className="absolute top-0 right-0 h-40 w-40 rotate-45 bg-maroon translate-x-20 -translate-y-20"></div>

                                    <FaHeart className="absolute right-4 top-4 z-10 text-white" />

                                </div>

                            </div>

                            <img
                                src={item.image?.url}
                                alt={item.title}
                                className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
                            />

                            <span className="mt-6 block text-5xl font-heading font-bold text-maroon">
                                {new Date(item.eventDate).toLocaleDateString(
                                    "en-US",
                                    {
                                        day: "2-digit",
                                    }
                                )}
                            </span>

                            <p className="uppercase tracking-[4px] text-gray-500">
                                {new Date(item.eventDate).toLocaleDateString(
                                    "en-US",
                                    {
                                        month: "long",
                                        year: "numeric",
                                    }
                                )}
                            </p>

                            <h3 className="mt-8 text-2xl font-heading font-bold text-black">
                                {item.title}
                            </h3>

                            <p className="mt-4 leading-7 text-gray-600">
                                {item.shortDescription}
                            </p>

                            <div className="mt-6 space-y-3">

                                <div className="flex items-center gap-3">

                                    <FaCalendarAlt className="text-maroon" />

                                    <span>
                                        {new Date(
                                            item.eventDate
                                        ).toLocaleDateString()}
                                    </span>

                                </div>

                                <div className="flex items-center gap-3">

                                    <FaMapMarkerAlt className="text-maroon" />

                                    <span>{item.location}</span>

                                </div>

                            </div>

                            <Link
                                to={`/events/${item.slug}`}
                                className="group/btn mt-8 inline-flex items-center font-semibold text-maroon"
                            >

                                Learn More

                                <FaArrowRight className="ml-2 transition-all duration-300 group-hover/btn:ml-4" />

                            </Link>

                        </div>

                    ))}

                </div>

                <div className="mt-16 text-center">

                    <Link
                        to="/events"
                        className="group inline-flex items-center rounded-xl bg-maroon px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-green"
                    >

                        <span>View All Events</span>

                        <FaHeart className="ml-2 transition-all duration-300 group-hover:ml-4" />

                    </Link>

                </div>

            </div>

        </section>
    );
}