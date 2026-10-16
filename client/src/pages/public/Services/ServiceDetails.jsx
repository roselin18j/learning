import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft, FaHeart } from "react-icons/fa";
import { getServices } from "../../../services/services.service";

export default function ServiceDetails() {

    const { slug } = useParams();

    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchService();
    }, [slug]);

    const fetchService = async () => {

        try {

            const response = await getServices();

            const services =
                response.data.data.serviceSection.services;

            const selectedService = services.find(
                (item) => item.slug === slug
            );

            setService(selectedService || null);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (

            <section className="py-32">

                <div className="container text-center">

                    <h2 className="text-3xl font-semibold">
                        Loading...
                    </h2>

                </div>

            </section>

        );

    }

    if (!service) {

        return (

            <section className="py-32">

                <div className="container text-center">

                    <h2 className="text-4xl font-bold">
                        Service Not Found
                    </h2>

                    <p className="mt-4 text-gray-600">
                        The requested service could not be found.
                    </p>

                    <Link
                        to="/services"
                        className="mt-8 inline-flex rounded-lg bg-maroon px-6 py-3 font-semibold text-white"
                    >
                        Back to Services
                    </Link>

                </div>

            </section>

        );

    }

    return (

        <>

            {/* Hero */}

            <section className="relative overflow-hidden bg-maroon py-24 text-white">

                <div className="absolute -right-20 top-0 text-[220px] text-white/5">

                    <FaHeart />

                </div>

                <div className="container">

                    <Link
                        to="/services"
                        className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm hover:bg-white/20"
                    >

                        <FaArrowLeft />

                        Back to Services

                    </Link>

                    <h1 className="mt-10 max-w-4xl text-5xl font-bold leading-tight lg:text-6xl">

                        {service.title}

                    </h1>

                    <p className="mt-8 max-w-3xl text-lg leading-9 text-white/90">

                        {service.shortDescription}

                    </p>

                </div>

            </section>

            {/* Image */}

            <section className="-mt-16">

                <div className="container">

                    <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">

                        <img
                            src={service.image?.url}
                            alt={service.title}
                            className="h-[550px] w-full object-cover"
                        />

                    </div>

                </div>

            </section>

            {/* Description */}

            <section className="bg-white py-24">

                <div className="container">

                    <div className="mx-auto max-w-5xl">

                        <div className="mb-12">



                           <h2 className="mt-6 text-4xl font-bold">
     {service.title}
</h2>

                        </div>

                        <div
                            className="prose prose-lg max-w-none prose-headings:font-bold prose-img:rounded-xl prose-img:shadow-lg prose-a:text-maroon prose-li:my-2"
                            dangerouslySetInnerHTML={{
                                __html: service.description,
                            }}
                        />

                    </div>

                </div>

            </section>

            {/* CTA */}

            <section className="bg-gray-50 py-24">

                <div className="container">

                    <div className="rounded-3xl bg-maroon px-8 py-16 text-center text-white lg:px-20">

                        <h2 className="text-4xl font-bold">

                            Together We Can Make a Difference

                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg text-white/90">

                            Join us in creating a better future for individuals,
                            families and communities through compassion,
                            education and support.

                        </p>

                        <Link
                            to="/contact"
                            className="mt-10 inline-flex rounded-xl bg-white px-8 py-4 font-semibold text-maroon transition hover:bg-gray-100"
                        >

                            Contact Us

                        </Link>

                    </div>

                </div>

            </section>

        </>

    );

}