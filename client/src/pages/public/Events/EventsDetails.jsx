import { useParams } from "react-router-dom";
import PageBanner from "../../../common/Section/PageBanner";
import bannerImg from "../../../assets/images/ban1.jpeg";

export default function EventsDetails() {

    const { slug } = useParams();

    return (
        <>
            <PageBanner
                title="Event Details"
                image={bannerImg}
            />

            <section className="py-24">

                <div className="container">

                    <div className="mx-auto max-w-3xl text-center">

                        <span className="rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-white">
                            EVENT DETAILS
                        </span>

                        <h2 className="mt-6 font-heading text-5xl font-bold text-black">
                            {slug
                                .split("-")
                                .map(
                                    word =>
                                        word.charAt(0).toUpperCase() +
                                        word.slice(1)
                                )
                                .join(" ")}
                        </h2>

                        <p className="mt-8 leading-8 text-gray-600">
                            Detailed information about this event will be
                            displayed here once the backend API is integrated.
                            Visitors will be able to view the complete event
                            description, images, schedule, location,
                            participation details and other updates.
                        </p>

                    </div>

                </div>

            </section>
        </>
    );
}