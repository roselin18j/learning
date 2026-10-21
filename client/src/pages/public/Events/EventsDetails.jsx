import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageBanner from "../../../common/Section/PageBanner";
import bannerImg from "../../../assets/images/ban1.jpeg";
import { getEventBySlug } from "../../../services/events.service";

export default function EventsDetails() {
    const { slug } = useParams();

    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchEvent();
    }, [slug]);

    const fetchEvent = async () => {
        try {
            const res = await getEventBySlug(slug);
            setEvent(res.data.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="py-32 text-center">
                Loading...
            </div>
        );
    }

    if (!event) {
        return (
            <div className="py-32 text-center">
                Event not found.
            </div>
        );
    }

    return (
        <>
            <PageBanner
                title={event.title}
                image={event.image?.url || bannerImg}
            />

            <section className="py-20">
                <div className="container">

                    <img
                        src={event.image?.url}
                        alt={event.title}
                        className="mb-10 h-[500px] w-full rounded-xl object-cover"
                    />

                    <div className="mb-8 flex flex-wrap gap-4">

                        <span className="rounded-full bg-maroon px-5 py-2 text-white">
                            {event.status}
                        </span>

                        <span className="rounded-full bg-gray-100 px-5 py-2">
                            {new Date(event.eventDate).toLocaleDateString()}
                        </span>

                        <span className="rounded-full bg-gray-100 px-5 py-2">
                            {event.location}
                        </span>

                    </div>

                    <h1 className="mb-6 text-5xl font-bold">
                        {event.title}
                    </h1>

                    <p className="mb-10 text-xl text-gray-600">
                        {event.shortDescription}
                    </p>

                    <div
                        className="prose max-w-none"
                        dangerouslySetInnerHTML={{
                            __html: event.description,
                        }}
                    />

                </div>
            </section>
        </>
    );
}