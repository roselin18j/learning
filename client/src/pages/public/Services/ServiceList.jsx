import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaHeart } from "react-icons/fa";
import { getServices } from "../../../services/services.service";

export default function ServiceList() {

    const [servicesHeader, setServicesHeader] = useState({
        badge: "",
        title: "",
        description: "",
    });

    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {

        try {

            const response = await getServices();

            const data = response.data.data.serviceSection;

            setServicesHeader(data.header);
            setServices(data.services);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (
            <section className="py-24">
                <div className="container text-center text-lg font-medium">
                    Loading Services...
                </div>
            </section>
        );

    }

    return (
        <section className="bg-ivory py-24">

            <div className="container">

                {/* Header */}

                <div className="mx-auto max-w-3xl text-center">

                    <span className="rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-white">
                        {servicesHeader.badge}
                    </span>

                    <h2 className="mt-6 font-heading text-5xl font-bold leading-tight text-black">
                        {servicesHeader.title}
                    </h2>

                    <p className="mt-6 leading-8 text-gray-600">
                        {servicesHeader.description}
                    </p>

                </div>

                {/* Services */}

                <div className="mt-24 space-y-36">

                    {services.map((service, index) => (

                        <div
                            key={service._id}
                            className={`grid items-center gap-16 ${
                                index % 2 === 0
                                    ? "lg:grid-cols-[1fr_520px]"
                                    : "lg:grid-cols-[520px_1fr]"
                            }`}
                        >

                            {/* Content */}

                            <div
                                className={`relative ${
                                    index % 2 !== 0 ? "lg:order-2" : ""
                                }`}
                            >

                                <span className="absolute -top-10 left-0 font-heading text-[120px] font-bold leading-none text-maroon/5">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <div className="relative">

                                    <span className="inline-flex items-center gap-2 rounded-full bg-maroon/10 px-4 py-2 text-sm font-semibold text-maroon">

                                        <FaHeart className="text-xs" />

                                        Community Program

                                    </span>

                                    <h3 className="mt-6 font-heading text-5xl font-bold leading-tight text-black">
                                        {service.title}
                                    </h3>

                                    <p className="mt-8 max-w-xl leading-8 text-gray-600">
                                        {service.shortDescription}
                                    </p>

                                    <Link
                                        to={`/services/${service.slug}`}
                                        className="group mt-10 inline-flex items-center rounded-xl bg-maroon px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-darkmaroon"
                                    >

                                        Learn More

                                        <FaArrowRight className="ml-3 transition-all duration-300 group-hover:translate-x-2" />

                                    </Link>

                                </div>

                            </div>

                            {/* Image */}

                            <div
                                className={`relative ${
                                    index % 2 !== 0 ? "lg:order-1" : ""
                                }`}
                            >

                                <FaHeart className="absolute -right-6 -top-6 text-8xl text-maroon/10" />

                                <div className="overflow-hidden rounded-tl-[80px] rounded-br-[80px] rounded-tr-[20px] rounded-bl-[20px] shadow-[0_25px_60px_rgba(0,0,0,.08)]">

                                    <img
                                        src={service.image?.url}
                                        alt={service.title}
                                        className="h-[500px] w-full object-cover transition duration-700 hover:scale-105"
                                    />

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}