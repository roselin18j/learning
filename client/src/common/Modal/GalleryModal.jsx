import { useEffect } from "react";
import {
    FaTimes,
    FaChevronLeft,
    FaChevronRight,
} from "react-icons/fa";

export default function GalleryModal({
    isOpen,
    images = [],
    currentIndex = 0,
    setCurrentIndex,
    onClose,
}) {

    useEffect(() => {

        if (!isOpen) return;

        const handleKeyDown = (e) => {

            if (e.key === "Escape") {
                onClose();
            }

            if (e.key === "ArrowRight") {
                setCurrentIndex((prev) =>
                    prev === images.length - 1 ? 0 : prev + 1
                );
            }

            if (e.key === "ArrowLeft") {
                setCurrentIndex((prev) =>
                    prev === 0 ? images.length - 1 : prev - 1
                );
            }

        };

        document.addEventListener("keydown", handleKeyDown);

        document.body.style.overflow = "hidden";

        return () => {

            document.removeEventListener("keydown", handleKeyDown);

            document.body.style.overflow = "auto";

        };

    }, [isOpen, images.length]);

    if (!isOpen) return null;

    const prevImage = () =>
        setCurrentIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );

    const nextImage = () =>
        setCurrentIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );

    return (

        <div
            onClick={onClose}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-5"
        >

            <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-6xl"
            >

                {/* Close */}

                <button
                    onClick={onClose}
                    className="absolute -top-14 right-0 text-3xl text-white hover:text-maroon"
                >
                    <FaTimes />
                </button>

                {/* Previous */}

                <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/15 p-4 text-white backdrop-blur hover:bg-maroon"
                >
                    <FaChevronLeft />
                </button>

                {/* Image */}

                <img
                    src={images[currentIndex].image}
                    alt={images[currentIndex].title}
                    className="max-h-[85vh] w-full rounded-3xl object-contain"
                />

                {/* Next */}

                <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/15 p-4 text-white backdrop-blur hover:bg-maroon"
                >
                    <FaChevronRight />
                </button>

                {/* Bottom */}

                <div className="mt-6 flex items-center justify-between text-white">

                    <h3 className="text-2xl font-heading font-bold">
                        {images[currentIndex].title}
                    </h3>

                    <p>
                        {currentIndex + 1} / {images.length}
                    </p>

                </div>

            </div>

        </div>

    );

}