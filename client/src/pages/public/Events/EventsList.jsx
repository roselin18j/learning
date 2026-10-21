import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
    FaArrowRight,
    FaCalendarAlt,
    FaHeart,
    FaMapMarkerAlt,
    FaSearch,
} from "react-icons/fa";

import { getEvents } from "../../../services/events.service";

export default function EventsList() {

    const [status, setStatus] = useState("all");
    const [search, setSearch] = useState("");
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetchEvents();

    }, []);

    const fetchEvents = async () => {
        try {
            const response = await getEvents();
            setEvents(
                response.data.data.eventSection.events
            );
        } catch (error) {
            console.error(
                "Failed to fetch events",
                error
            );
        } finally {
            setLoading(false);
        }
    };

    const filteredEvents = useMemo(() => {
        return events.filter((item) => {
            const matchStatus =
                status === "all" ||
                item.status.toLowerCase() ===
                status;
            const matchSearch =
               item.title
                .toLowerCase()
                .includes(
                    search.toLowerCase()
                )
                ||
                item.location
                .toLowerCase()
                .includes(
                    search.toLowerCase()
                );
            return (
                matchStatus &&
                matchSearch
            );
        });
    },[
        events,
        status,
        search
    ]);

    if(loading){
        return (
            <section className="py-24 text-center">
                <h2 className="text-2xl font-bold">
                    Loading Events...
                </h2>
            </section>
        );
    }

    return (
        <section className="bg-white py-24">
            <div className="container">
              <div className="mx-auto max-w-3xl text-center">

    <span className="rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-white">
        {header.badge}
    </span>

    <h2 className="mt-6 font-heading text-5xl font-bold text-black">
        {header.title}
    </h2>

    <p className="mt-5 leading-8 text-gray-600">
        {header.description}
    </p>

</div>

                <div className="mx-auto mt-16 max-w-xl">
                    <div className="relative">
                        <FaSearch
                            className="absolute left-5 top-1/2 
                            -translate-y-1/2 text-gray-400"
                        />
                        <input
                            type="text"
                            placeholder="Search events..."
                            value={search}
                            onChange={(e)=>
                                setSearch(e.target.value)
                            }
                            className="
                            h-14 w-full rounded-full 
                            border border-maroon/15
                            bg-white pl-14 pr-5
                            outline-none
                            focus:border-maroon
                            "
                        />
                    </div>
                </div>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    {
                        [
                            "all",
                            "upcoming",
                            "ongoing",
                            "completed"

                        ].map((item)=>(

                            <button
                                key={item}
                                onClick={()=>
                                    setStatus(item)
                                }

                                className={`
                                rounded-full px-6 py-3 
                                font-semibold capitalize transition
                                ${
                                    status === item
                                    ?
                                    "bg-maroon text-white"
                                    :
                                  "bg-gray-100 text-black hover:bg-maroon hover:text-white"
                                }
                                `}
                            >
                                {item}
                            </button>
                        ))
                    }
                </div>

                <div className="mt-16 grid gap-8 lg:grid-cols-3">
                    {
                        filteredEvents.map((item)=>(
                            <div
                                key={item._id}
                                className="
                                group relative overflow-hidden
                                rounded-[30px]
                                border border-maroon/10
                                bg-white p-8
                                shadow-[0_15px_35px_rgba(0,0,0,.08)]
                                transition-all duration-500
                                hover:-translate-y-2
                                "
                            >

                                <div className="absolute right-0 top-0">
                                    <div className="relative h-24 w-24 overflow-hidden">
                                        <div className="
                                        absolute right-0 top-0
                                        h-40 w-40
                                        translate-x-20
                                        -translate-y-20
                                        rotate-45
                                        bg-maroon
                                        " />
                                        <FaHeart className="
                                        absolute right-4 top-4
                                        z-10 text-white
                                        "/>
                                    </div>
                                </div>


                                <img

                                    src={
                                        item.image?.url
                                    }

                                    alt={
                                        item.title
                                    }

                                    className="
                                    h-60 w-full object-cover
                                    transition duration-500
                                    group-hover:scale-110
                                    "
                                />

                                <span className="
                                mt-6 block
                                font-heading text-5xl
                                font-bold text-maroon
                                ">
                                    {
                                        new Date(item.eventDate)
                                        .toLocaleDateString(
                                            "en-US",
                                            {
                                                day:"2-digit"
                                            }
                                        )
                                    }
                                </span>



                                <p className="
                                uppercase tracking-[4px]
                                text-gray-500
                                ">
                                    {
                                        new Date(item.eventDate)
                                        .toLocaleDateString(
                                            "en-US",
                                            {
                                                month:"long",
                                                year:"numeric"
                                            }
                                        )
                                    }
                                </p>

                                <h3 className="
                                mt-8 font-heading
                                text-2xl font-bold
                                text-black
                                ">
                                {item.title}
                                </h3>

                                <p className="
                                mt-4 leading-7 text-gray-600
                                ">

                                    {item.shortDescription}

                                </p>

                                <div className="
                                mt-6 space-y-3
                                ">
                                    <div className="
                                    flex items-center gap-3
                                    ">
                                        <FaCalendarAlt
                                            className="text-maroon"
                                        />
                                     <span>
                                            {
                                                new Date(item.eventDate)
                                                .toLocaleDateString()
                                            }
                                        </span>
                                    </div>
                                    <div className="
                                    flex items-center gap-3
                                    ">
                                        <FaMapMarkerAlt
                                            className="text-maroon"
                                        />
                                        <span>
                                            {item.location}
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <span
                                        className={`rounded-full px-4 py-2 text-xs font-semibold uppercase
                                        ${
                                            item.status === "Upcoming"
                                            ?
                                            "bg-blue-100 text-blue-700"
                                        :
                                            item.status === "Ongoing"
                                        ?
                                            "bg-green-100 text-green-700"
                                            :
                                            "bg-gray-200 text-gray-700"
                                        }
                                        `}
                                    >
                                        {item.status}
                                    </span>
                                </div>
                                <Link
                                    to={`/events/${item.slug}`}
                                    className="
                                    group/btn mt-8
                                    inline-flex items-center
                                    font-semibold text-maroon
                                    "
                                >
                                 View Details
                                    <FaArrowRight
                                        className="
                                        ml-2 transition
                                        group-hover/btn:translate-x-2
                                        "
                                    />
                                </Link>
                            </div>
                        ))
                    }
                </div>
                {
                    filteredEvents.length === 0 && (
                        <div className="mt-20 text-center">
                            <h3 className="
                            text-2xl font-bold text-black
                            ">
                                No Events Found
                            </h3>

                            <p className="
                            mt-3 text-gray-500
                            ">
                                Try another search or filter.
                            </p>
                        </div>
                    )
                }
            </div>
        </section>
    );
}