import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaClock,
} from "react-icons/fa";

export default function ContactInformation() {

    const contactInfo = [
        {
            id: 1,
            icon: <FaMapMarkerAlt />,
            title: "Visit Our Office",
            value: "123 Charity Street",
            subValue: "Madurai, Tamil Nadu 625001",
        },
        {
            id: 2,
            icon: <FaPhoneAlt />,
            title: "Call Us",
            value: "+91 98765 43210",
            subValue: "+91 91234 56789",
        },
        {
            id: 3,
            icon: <FaEnvelope />,
            title: "Email Us",
            value: "info@arakattalai.org",
            subValue: "support@arakattalai.org",
        },
        {
            id: 4,
            icon: <FaClock />,
            title: "Working Hours",
            value: "Monday - Saturday",
            subValue: "9:00 AM - 6:00 PM",
        },
    ];

    return (

        <section className="bg-white py-24">

            <div className="container">

                {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">

                    <span className="rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-white">
                        CONTACT INFORMATION
                    </span>

                    <h2 className="mt-6 font-heading text-5xl font-bold text-black">
                        We'd Love To Hear From You
                    </h2>

                    <p className="mt-6 leading-8 text-gray-600">
                        Whether you have a question, need assistance,
                        want to volunteer or partner with us,
                        our team is always ready to help.
                    </p>

                </div>

                {/* Cards */}

                <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                    {contactInfo.map((item) => (

                        <div
                            key={item.id}
                            className="group rounded-[30px] border border-maroon/10 bg-ivory p-10 text-center transition duration-300 hover:-translate-y-2 hover:border-maroon hover:shadow-xl"
                        >

                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-maroon text-3xl text-white transition duration-300 group-hover:scale-110">

                                {item.icon}

                            </div>

                            <h3 className="mt-8 font-heading text-2xl font-bold text-black">

                                {item.title}

                            </h3>

                            <p className="mt-6 font-semibold text-maroon">

                                {item.value}

                            </p>

                            <p className="mt-2 text-gray-600">

                                {item.subValue}

                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}