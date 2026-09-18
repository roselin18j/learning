import React from "react";
import { FaHeart } from "react-icons/fa";

export default function OurTeam() {

    const team = [
        {
            id: 1,
            name: "John David",
            role: "Managing Trustee",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",
        },
        {
            id: 2,
            name: "Mary Grace",
            role: "Secretary",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600",
        },
        {
            id: 3,
            name: "Samuel Joseph",
            role: "Treasurer",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600",
        },
        {
            id: 4,
            name: "Sarah Daniel",
            role: "Volunteer Coordinator",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600",
        },
    ];

    return (
        <section className="bg-white py-24">

            <div className="container">

                <div className="mx-auto max-w-3xl text-center">

                    <span className="rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-white">
                        OUR TEAM
                    </span>

                    <h2 className="mt-6 font-heading text-5xl font-bold text-black">
                        The People Behind
                        <br />
                        Every Smile
                    </h2>

                    <p className="mt-6 leading-8 text-gray-600">
                        Our dedicated team works together with compassion,
                        integrity and commitment to create meaningful change in
                        every community we serve.
                    </p>

                </div>

                <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {team.map((member) => (

                        <div
                            key={member.id}
                            className="group overflow-hidden rounded-[30px] border border-maroon/10 bg-ivory transition-all duration-300 hover:-translate-y-2"
                        >

                            <div className="relative overflow-hidden">

                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="h-[340px] w-full object-cover transition duration-500 group-hover:scale-105"
                                />

                                <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-maroon text-white shadow-lg">

                                    <FaHeart />

                                </div>

                            </div>

                            <div className="p-6 text-center">

                                <h3 className="font-heading text-2xl font-bold text-black">
                                    {member.name}
                                </h3>

                                <p className="mt-2 text-maroon font-medium">
                                    {member.role}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}