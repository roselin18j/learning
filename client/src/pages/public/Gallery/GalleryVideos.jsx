import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import GalleryModal from "../../../common/Modal/GalleryModal";
import GalleryService from "../../../services/gallery.service";

export default function GalleryVideos() {

    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        fetchVideos();
    }, []);

    const fetchVideos = async () => {

        try {

            const response = await GalleryService.getVideos();

            const homepageVideos = response.data.data
                .filter(
                    (video) =>
                        video.showOnHomepage === true &&
                        video.isActive === true
                )
                .sort(
                    (a, b) =>
                        a.homepageOrder - b.homepageOrder
                );

            setVideos(homepageVideos);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (

            <section className="bg-ivory py-24">

                <div className="container text-center">

                    <div className="h-10 w-10 mx-auto border-4 border-maroon border-t-transparent rounded-full animate-spin"></div>

                </div>

            </section>

        );

    }

    return (

        <>
            <section className="bg-ivory py-24">

                <div className="container">

                    {/* Heading */}

                    <div className="mx-auto max-w-3xl text-center">

                        <span className="rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-white">
                            VIDEO GALLERY
                        </span>

                        <h2 className="mt-6 font-heading text-5xl font-bold text-black">
                            Stories In Motion
                        </h2>

                        <p className="mt-6 leading-8 text-gray-600">
                            Watch highlights from our community programs,
                            volunteer activities and impactful initiatives.
                        </p>

                    </div>

                    {/* Videos */}

                    <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                        {videos.length > 0 ? (

                            videos.map((video, index) => (

                                <div
                                    key={video._id}
                                    onClick={() => {
                                        setCurrentIndex(index);
                                        setIsOpen(true);
                                    }}
                                    className="group cursor-pointer overflow-hidden rounded-[25px] bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                                >

                                    <div className="relative overflow-hidden">

                                        <video
                                            src={video.video.url}
                                            className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                                            muted
                                            preload="metadata"
                                        />

                                        <div className="absolute inset-0 flex items-center justify-center bg-black/35">

                                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-maroon text-white shadow-lg transition duration-300 group-hover:scale-110">

                                                <FaPlay className="ml-1" />

                                            </div>

                                        </div>

                                    </div>

                                    <div className="p-6">

                                        <h3 className="font-heading text-xl font-bold text-black">

                                            {video.title}

                                        </h3>

                                    </div>

                                </div>

                            ))

                        ) : (

                            <div className="col-span-full py-10 text-center text-gray-500">

                                No Videos Found

                            </div>

                        )}

                    </div>

                </div>

            </section>

            <GalleryModal
                isOpen={isOpen}
                images={videos.map((item) => ({
                    title: item.title,
                    image: item.video.url,
                    type: "video",
                }))}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                onClose={() => setIsOpen(false)}
            />

        </>

    );

}