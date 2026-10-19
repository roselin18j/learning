import { useEffect, useState } from "react";
import GalleryModal from "../../../common/Modal/GalleryModal";
import GalleryService from "../../../services/gallery.service";

export default function GalleryImages() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {

        try {

            setLoading(true);

            const response = await GalleryService.getImages();

            // Show only homepage images
            const homepageImages = response.data.data
                .filter(
                    (item) =>
                        item.showOnHomepage === true &&
                        item.isActive === true
                )
                .sort(
                    (a, b) =>
                        a.homepageOrder - b.homepageOrder
                );

            setImages(homepageImages);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (
            <section className="py-24 text-center">
                Loading...
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

                        {images.length === 0 ? (

                            <div className="text-center text-gray-500">
                                No Images Found
                            </div>

                        ) : (

                            images.map((item, index) => (

                                <div
                                    key={item._id}
                                    onClick={() => {
                                        setCurrentIndex(index);
                                        setIsOpen(true);
                                    }}
                                    className="group relative mb-6 cursor-pointer overflow-hidden rounded-[30px]"
                                >

                                    <img
                                        src={item.image.url}
                                        alt={item.title}
                                        className="w-full rounded-[30px] transition duration-700 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/40"></div>

                                    <div className="absolute bottom-6 left-6 right-6 translate-y-8 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                                        <h3 className="font-heading text-2xl text-white">
                                            {item.title}
                                        </h3>

                                    </div>

                                </div>

                            ))

                        )}

                    </div>

                </div>

            </section>

            <GalleryModal
                isOpen={isOpen}
                images={images.map(item => ({
                    title: item.title,
                    image: item.image.url,
                    type: "image",
                }))}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                onClose={() => setIsOpen(false)}
            />
        </>
    );

}