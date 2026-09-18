import { useState } from "react";
import {
    FaUser,
    FaEnvelope,
    FaPhoneAlt,
    FaTag,
    FaCommentDots,
    FaPaperPlane,
} from "react-icons/fa";

export default function ContactForm() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
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

        // API Integration Here

    };

    return (

        <section className="bg-ivory py-24">

            <div className="container">

                {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">

                    <span className="rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-white">
                        CONTACT FORM
                    </span>

                    <h2 className="mt-6 font-heading text-5xl font-bold text-black">
                        Send Us A Message
                    </h2>

                    <p className="mt-6 leading-8 text-gray-600">
                        We'd love to hear from you. Whether you have questions,
                        suggestions or want to support our mission, simply fill
                        out the form below and our team will get back to you.
                    </p>

                </div>

                {/* Form */}

                <div className="mx-auto mt-20 max-w-5xl rounded-[35px] bg-white p-10 shadow-[0_15px_45px_rgba(0,0,0,.08)]">

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-8"
                    >

                        {/* Row 1 */}

                        <div className="grid gap-8 md:grid-cols-2">

                            <div>

                                <label className="mb-3 block font-semibold text-black">
                                    Full Name
                                </label>

                                <div className="relative">

                                    <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-maroon" />

                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        className="h-14 w-full rounded-xl border border-maroon/15 bg-white pl-14 pr-5 outline-none transition focus:border-maroon"
                                    />

                                </div>

                            </div>

                            <div>

                                <label className="mb-3 block font-semibold text-black">
                                    Email Address
                                </label>

                                <div className="relative">

                                    <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-maroon" />

                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        className="h-14 w-full rounded-xl border border-maroon/15 bg-white pl-14 pr-5 outline-none transition focus:border-maroon"
                                    />

                                </div>

                            </div>

                        </div>

                        {/* Row 2 */}

                        <div className="grid gap-8 md:grid-cols-2">

                            <div>

                                <label className="mb-3 block font-semibold text-black">
                                    Phone Number
                                </label>

                                <div className="relative">

                                    <FaPhoneAlt className="absolute left-5 top-1/2 -translate-y-1/2 text-maroon" />

                                    <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter your phone number"
                                        className="h-14 w-full rounded-xl border border-maroon/15 bg-white pl-14 pr-5 outline-none transition focus:border-maroon"
                                    />

                                </div>

                            </div>

                            <div>

                                <label className="mb-3 block font-semibold text-black">
                                    Subject
                                </label>

                                <div className="relative">

                                    <FaTag className="absolute left-5 top-1/2 -translate-y-1/2 text-maroon" />

                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Enter subject"
                                        className="h-14 w-full rounded-xl border border-maroon/15 bg-white pl-14 pr-5 outline-none transition focus:border-maroon"
                                    />

                                </div>

                            </div>

                        </div>

                        {/* Message */}

                        <div>

                            <label className="mb-3 block font-semibold text-black">
                                Message
                            </label>

                            <div className="relative">

                                <FaCommentDots className="absolute left-5 top-6 text-maroon" />

                                <textarea
                                    rows={7}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message..."
                                    className="w-full rounded-xl border border-maroon/15 bg-white pl-14 pr-5 pt-5 outline-none transition focus:border-maroon"
                                ></textarea>

                            </div>

                        </div>

                        {/* Button */}

                        <button
                            type="submit"
                            className="group inline-flex items-center rounded-xl bg-maroon px-8 py-4 font-semibold text-white transition hover:bg-darkmaroon"
                        >

                            Send Message

                            <FaPaperPlane className="ml-3 transition group-hover:translate-x-1 group-hover:-translate-y-1" />

                        </button>

                    </form>

                </div>

            </div>

        </section>

    );

}