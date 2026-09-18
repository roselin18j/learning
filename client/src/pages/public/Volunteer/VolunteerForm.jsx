import React, { useState } from "react";
import {
    FaUser,
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaBriefcase,
    FaHandsHelping,
} from "react-icons/fa";

export default function VolunteerForm() {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        city: "",
        occupation: "",
        interest: "",
        message: "",
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(formData);

        // API Later

    };

    return (

        <section className="bg-white py-24">

            <div className="container">

                <div className="mx-auto max-w-3xl text-center">

                    <span className="rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-white">
                        VOLUNTEER REGISTRATION
                    </span>

                    <h2 className="mt-6 font-heading text-5xl font-bold text-black">
                        Become A Volunteer
                    </h2>

                    <p className="mt-6 leading-8 text-gray-600">
                        Join our mission to create positive change. Complete the
                        form below and our team will contact you shortly.
                    </p>

                </div>

                <div className="mx-auto mt-20 max-w-5xl overflow-hidden rounded-[35px] border border-maroon/10 bg-ivory shadow-xl">

                    <div className="grid lg:grid-cols-[420px_1fr]">

                        {/* Left */}

                        <div className="bg-maroon p-12 text-white">

                            <h3 className="font-heading text-4xl font-bold">
                                Join Our Team
                            </h3>

                            <p className="mt-6 leading-8 text-white/90">
                                Volunteers are the heart of our organization.
                                Whether you have a few hours or can contribute
                                regularly, your support makes a meaningful
                                difference.
                            </p>

                            <div className="mt-10 space-y-6">

                                <div className="flex items-center gap-4">

                                    <FaHandsHelping className="text-2xl" />

                                    <span>Community Service</span>

                                </div>

                                <div className="flex items-center gap-4">

                                    <FaHandsHelping className="text-2xl" />

                                    <span>Flexible Volunteering</span>

                                </div>

                                <div className="flex items-center gap-4">

                                    <FaHandsHelping className="text-2xl" />

                                    <span>Make Real Impact</span>

                                </div>

                            </div>

                        </div>

                        {/* Right */}

                        <div className="bg-white p-10 lg:p-12">

                            <form
                                onSubmit={handleSubmit}
                                className="grid gap-6 md:grid-cols-2"
                            >

                                <div className="relative">

                                    <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-maroon" />

                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder="Full Name"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="h-14 w-full rounded-xl border border-gray-200 pl-14 pr-4 outline-none focus:border-maroon"
                                    />

                                </div>

                                <div className="relative">

                                    <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-maroon" />

                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="h-14 w-full rounded-xl border border-gray-200 pl-14 pr-4 outline-none focus:border-maroon"
                                    />

                                </div>

                                <div className="relative">

                                    <FaPhoneAlt className="absolute left-5 top-1/2 -translate-y-1/2 text-maroon" />

                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="h-14 w-full rounded-xl border border-gray-200 pl-14 pr-4 outline-none focus:border-maroon"
                                    />

                                </div>

                                <div className="relative">

                                    <FaMapMarkerAlt className="absolute left-5 top-1/2 -translate-y-1/2 text-maroon" />

                                    <input
                                        type="text"
                                        name="city"
                                        placeholder="City"
                                        value={formData.city}
                                        onChange={handleChange}
                                        className="h-14 w-full rounded-xl border border-gray-200 pl-14 pr-4 outline-none focus:border-maroon"
                                    />

                                </div>

                                <div className="relative">

                                    <FaBriefcase className="absolute left-5 top-1/2 -translate-y-1/2 text-maroon" />

                                    <input
                                        type="text"
                                        name="occupation"
                                        placeholder="Occupation"
                                        value={formData.occupation}
                                        onChange={handleChange}
                                        className="h-14 w-full rounded-xl border border-gray-200 pl-14 pr-4 outline-none focus:border-maroon"
                                    />

                                </div>

                                <div>

                                    <select
                                        name="interest"
                                        value={formData.interest}
                                        onChange={handleChange}
                                        className="h-14 w-full rounded-xl border border-gray-200 px-4 outline-none focus:border-maroon"
                                    >

                                        <option value="">
                                            Select Interest
                                        </option>

                                        <option>
                                            Education Support
                                        </option>

                                        <option>
                                            Healthcare Camps
                                        </option>

                                        <option>
                                            Food Distribution
                                        </option>

                                        <option>
                                            Event Management
                                        </option>

                                        <option>
                                            Community Outreach
                                        </option>

                                    </select>

                                </div>

                                <div className="md:col-span-2">

                                    <textarea
                                        rows="5"
                                        name="message"
                                        placeholder="Tell us why you would like to volunteer..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full rounded-xl border border-gray-200 p-4 outline-none focus:border-maroon"
                                    ></textarea>

                                </div>

                                <div className="md:col-span-2">

                                    <button
                                        type="submit"
                                        className="rounded-xl bg-maroon px-8 py-4 font-semibold text-white transition hover:bg-darkmaroon"
                                    >
                                        Submit Application
                                    </button>

                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}