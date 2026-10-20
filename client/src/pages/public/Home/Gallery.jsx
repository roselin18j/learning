import { useEffect, useState } from "react";
import {
    FaHeart,
    FaSearchPlus,
    FaPlay,
} from "react-icons/fa";
import GalleryModal from "../../../common/Modal/GalleryModal";
import GalleryService from "../../../services/gallery.service";

export default function Gallery() {

    const [gallery, setGallery] = useState([]);
    const [loading, setLoading] = useState(true);

    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        fetchGallery();
    }, []);

    const fetchGallery = async () => {

        try {

            const [imagesRes, videosRes] = await Promise.all([
                GalleryService.getImages(),
                GalleryService.getVideos(),
            ]);

            const homepageImages = imagesRes.data.data
                .filter(
                    (item) =>
                        item.showOnHomepage &&
                        item.isActive
                )
                .map((item) => ({
                    _id: item._id,
                    type: "image",
                    title: item.title,
                    image: item.image.url,
                    homepageOrder: item.homepageOrder,
                }));

            const homepageVideos = videosRes.data.data
                .filter(
                    (item) =>
                        item.showOnHomepage &&
                        item.isActive
                )
                .map((item) => ({
                    _id: item._id,
                    type: "video",
                    title: item.title,
                    image: item.video.url,
                    homepageOrder: item.homepageOrder,
                }));

            const allGallery = [
                ...homepageImages,
                ...homepageVideos,
            ].sort(
                (a, b) =>
                    a.homepageOrder - b.homepageOrder
            );

            setGallery(allGallery);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (

            <section className="py-24 bg-white">

                <div className="container text-center">

                    <div className="h-10 w-10 mx-auto border-4 border-maroon border-t-transparent rounded-full animate-spin"></div>

                </div>

            </section>

        );

    }

    return (

        <>
            <section className="py-24 bg-white">

                <div className="container">

                    <div className="text-center max-w-3xl mx-auto">

                        <span className="rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-white">
                            OUR GALLERY
                        </span>

                        <h2 className="mt-6 text-5xl font-heading font-bold text-black">
                            Moments That Inspire Hope
                        </h2>

                    </div>

                    <div className="mt-16 columns-1 md:columns-2 lg:columns-3 gap-6">

                        {gallery.map((item, index) => (

                            <div
                                key={item._id}
                                onClick={() => {
                                    setCurrentIndex(index);
                                    setIsOpen(true);
                                }}
                                className="group relative mb-6 cursor-pointer overflow-hidden rounded-[30px]"
                            >

                                {item.type === "image" ? (

                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full rounded-[30px] transition duration-700 group-hover:scale-110"
                                    />

                                ) : (

                                    <video
                                        src={item.image}
                                        className="w-full rounded-[30px]"
                                        muted
                                        preload="metadata"
                                    />

                                )}

                                <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/40"></div>

                                <FaHeart className="absolute right-5 top-5 text-2xl text-white opacity-0 transition duration-500 group-hover:opacity-100" />

                                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100">

                                    {item.type === "image" ? (

                                        <FaSearchPlus className="text-5xl text-white" />

                                    ) : (

                                        <FaPlay className="text-5xl text-white" />

                                    )}

                                </div>

                                <div className="absolute bottom-6 left-6 right-6 translate-y-8 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                                    <h3 className="font-heading text-2xl text-white">

                                        {item.title}

                                    </h3>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            <GalleryModal
                isOpen={isOpen}
                images={gallery}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                onClose={() => setIsOpen(false)}
            />
        </>

    );

}