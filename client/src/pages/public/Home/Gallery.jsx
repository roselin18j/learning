import React, { useState } from "react";
import { FaHeart, FaSearchPlus } from "react-icons/fa";
import GalleryModal from "../../../common/Modal/GalleryModal";

export default function Gallery() {
    const gallery = [
        {
            id: 1,
            image: "https://picsum.photos/id/1015/700/900",
            title: "Medical Camp",
        },
        {
            id: 2,
            image: "https://picsum.photos/id/1025/700/700",
            title: "Food Distribution",
        },
        {
            id: 3,
            image: "https://picsum.photos/id/1035/700/900",
            title: "Education Support",
        },
        {
            id: 4,
            image: "https://picsum.photos/id/1045/700/700",
            title: "Community Service",
        },
        {
            id: 5,
            image: "https://picsum.photos/id/1055/700/900",
            title: "Volunteer Program",
        },
        {
            id: 6,
            image: "https://picsum.photos/id/1065/700/800",
            title: "Tree Plantation",
        },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

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
                                key={item.id}
                                onClick={() => {
                                    setCurrentIndex(index);
                                    setIsOpen(true);
                                }}
                                className="group relative mb-6 cursor-pointer overflow-hidden rounded-[30px]"
                            >

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full rounded-[30px] transition duration-700  group-hover:scale-110"
                                />

                                {/* Overlay */}

                                <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/40"></div>

                                {/* Heart */}

                                <FaHeart className="absolute right-5 top-5 text-2xl text-white opacity-0 transition duration-500 group-hover:opacity-100" />

                                {/* Center Icon */}

                                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100">

                                    <FaSearchPlus className="text-5xl text-white" />

                                </div>

                                {/* Bottom */}

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