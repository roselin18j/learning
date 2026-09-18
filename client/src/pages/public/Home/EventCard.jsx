import React from "react";
import {
    FaHeart,
    FaArrowRight,
    FaCalendarAlt,
    FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function EventCard() {

    const events = [
        {
            id: 1,
            date: "25",
            month: "August 2026",
            title: "Community Health Camp",
            description:
                "Free health check-ups, medical consultations and medicines for underprivileged families.",
            location: "Madurai, Tamil Nadu",
            eventDate: "25 August 2026",
        },
        {
            id: 2,
            date: "12",
            month: "September 2026",
            title: "Food Distribution Drive",
            description:
                "Providing nutritious meals and groceries to families facing financial hardship.",
            location: "Dindigul, Tamil Nadu",
            eventDate: "12 September 2026",
        },
        {
            id: 3,
            date: "08",
            month: "October 2026",
            title: "Education Support Program",
            description:
                "Distributing school bags, books and learning materials to underprivileged children.",
            location: "Theni, Tamil Nadu",
            eventDate: "08 October 2026",
        },
    ];

    return (
        <section className="py-24 bg-ivory">

            <div className="container">

                <div className="text-center max-w-3xl mx-auto">

                    <span className="rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-white">
                        UPCOMING EVENTS
                    </span>

                    <h2 className="mt-6 text-5xl font-heading font-bold text-black">
                        Join Our Upcoming Events
                    </h2>

                    <p className="mt-5 leading-8 text-gray-600">
                        Be part of meaningful initiatives that bring hope,
                        compassion and positive change to our communities.
                    </p>

                </div>

                <div className="mt-16 grid gap-8 lg:grid-cols-3">

                    {events.map((item) => (

                        <div
                            key={item.id}
                            className="group relative overflow-hidden rounded-[30px] border border-maroon/10 bg-white p-8 shadow-[0_15px_35px_rgba(0,0,0,.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(109,8,8,.18)]"
                        >

                            {/* Folded Corner */}

                            <div className="absolute top-0 right-0">

                                <div className="relative h-24 w-24 overflow-hidden">

                                    <div className="absolute top-0 right-0 h-40 w-40 rotate-45 bg-maroon translate-x-20 -translate-y-20"></div>

                                    <FaHeart className="absolute right-4 top-4 z-10 text-white" />

                                </div>

                            </div>

                            {/* Date */}

                            <span className="text-5xl font-heading font-bold text-maroon">
                                {item.date}
                            </span>

                            <p className="uppercase tracking-[4px] text-gray-500">
                                {item.month}
                            </p>

                            {/* Title */}

                            <h3 className="mt-8 text-2xl font-heading font-bold text-black">
                                {item.title}
                            </h3>

                            <p className="mt-4 leading-7 text-gray-600">
                                {item.description}
                            </p>

                            {/* Event Info */}

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

                            <Link
                                to="/events"
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

// import React from "react";
// import {
//     FaArrowRight,
//     FaCalendarAlt,
//     FaMapMarkerAlt,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";

// export default function EventCard() {

//     const events = [
//         {
//             id: 1,
//             date: "25",
//             month: "August 2026",
//             title: "Community Health Camp",
//             description:
//                 "Free health check-ups, medical consultations and medicines for underprivileged families.",
//             location: "Madurai, Tamil Nadu",
//             eventDate: "25 August 2026",
//         },
//         {
//             id: 2,
//             date: "12",
//             month: "September 2026",
//             title: "Food Distribution Drive",
//             description:
//                 "Providing nutritious meals and groceries to families facing financial hardship.",
//             location: "Dindigul, Tamil Nadu",
//             eventDate: "12 September 2026",
//         },
//         {
//             id: 3,
//             date: "08",
//             month: "October 2026",
//             title: "Education Support Program",
//             description:
//                 "Distributing school bags, books and learning materials to underprivileged children.",
//             location: "Theni, Tamil Nadu",
//             eventDate: "08 October 2026",
//         },
//     ];

//     return (
//         <section className="py-24 bg-ivory">

//             <div className="container">

//                 <div className="max-w-2xl">

//                     <div className="flex items-center gap-3">
//                         <span className="w-6 h-0.5 bg-gold" />
//                         <span className="text-sm font-semibold text-maroon">
//                             Get involved
//                         </span>
//                     </div>

//                     <h2 className="mt-4 text-4xl lg:text-5xl font-heading font-bold text-blackleading-tight">
//                         Upcoming on the ground
//                     </h2>

//                     <p className="mt-5 leading-8 text-black/70">
//                         Be part of meaningful initiatives that bring hope,
//                         compassion and positive change to our communities.
//                     </p>

//                 </div>

//                 <div className="mt-14 divide-y divide-maroon/15 border-t border-b border-maroon/15">

//                     {events.map((item) => (

//                         <div
//                             key={item.id}
//                             className="grid gap-4 py-8 sm:grid-cols-[110px_1fr_180px] sm:items-center"
//                         >

//                             {/* Date */}
//                             <div>
//                                 <span className="text-4xl font-heading font-bold text-maroon">
//                                     {item.date}
//                                 </span>
//                                 <p className="uppercase tracking-[2px] text-xs text-black/50 mt-1">
//                                     {item.month}
//                                 </p>
//                             </div>

//                             {/* Title + description */}
//                             <div>
//                                 <h3 className="text-xl font-heading font-bold text-black">
//                                     {item.title}
//                                 </h3>

//                                 <p className="mt-2 leading-7 text-black/70">
//                                     {item.description}
//                                 </p>

//                                 <Link
//                                     to="/events"
//                                     className="group/btn mt-3 inline-flex items-center font-semibold text-maroon"
//                                 >
//                                     Learn More
//                                     <FaArrowRight className="ml-2 text-sm transition-transform duration-300 group-hover/btn:translate-x-1" />
//                                 </Link>
//                             </div>

//                             {/* Location / date meta */}
//                             <div className="space-y-2 sm:text-right">

//                                 <div className="flex items-center gap-2 sm:justify-end">
//                                     <FaCalendarAlt className="text-gold" />
//                                     <span className="text-sm text-black/70">{item.eventDate}</span>
//                                 </div>

//                                 <div className="flex items-center gap-2 sm:justify-end">
//                                     <FaMapMarkerAlt className="text-gold" />
//                                     <span className="text-sm text-black/70">{item.location}</span>
//                                 </div>

//                             </div>

//                         </div>

//                     ))}

//                 </div>

//                 <div className="mt-14">

//                     <Link
//                         to="/events"
//                         className="group inline-flex items-center rounded-sm bg-maroon px-7 py-4 font-semibold text-white transition-colors duration-300 hover:bg-darkmaroon"
//                     >
//                         <span>View All Events</span>
//                         <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
//                     </Link>

//                 </div>

//             </div>

//         </section>
//     );
// }