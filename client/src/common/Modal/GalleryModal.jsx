import { useEffect, useRef } from "react";
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

    const videoRef = useRef(null);

    const stopVideo = () => {

        if (videoRef.current) {

            videoRef.current.pause();
            videoRef.current.currentTime = 0;

        }

    };

    useEffect(() => {

        if (!isOpen || images.length === 0) return;

        const handleKeyDown = (e) => {

            if (e.key === "Escape") {

                stopVideo();
                onClose();

            }

            if (e.key === "ArrowRight") {

                stopVideo();

                setCurrentIndex((prev) =>
                    prev === images.length - 1 ? 0 : prev + 1
                );

            }

            if (e.key === "ArrowLeft") {

                stopVideo();

                setCurrentIndex((prev) =>
                    prev === 0 ? images.length - 1 : prev - 1
                );

            }

        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {

            stopVideo();

            document.removeEventListener(
                "keydown",
                handleKeyDown
            );

            document.body.style.overflow = "auto";

        };

    }, [isOpen, images.length]);

    if (!isOpen || images.length === 0) return null;

    const current = images[currentIndex];

    const prevImage = () => {

        stopVideo();

        setCurrentIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );

    };

    const nextImage = () => {

        stopVideo();

        setCurrentIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );

    };

    const closeModal = () => {

        stopVideo();
        onClose();

    };

    return (

        <div
            onClick={closeModal}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-5"
        >

            <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-6xl"
            >

                {/* Close */}

                <button
                    onClick={closeModal}
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

                {/* Media */}

                {current.type === "video" ? (

                    <video
                        ref={videoRef}
                        src={current.image}
                        controls
                        autoPlay
                        className="max-h-[85vh] w-full rounded-3xl object-contain"
                    />

                ) : (

                    <img
                        src={current.image}
                        alt={current.title}
                        className="max-h-[85vh] w-full rounded-3xl object-contain"
                    />

                )}

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
                        {current.title}
                    </h3>

                    <p>
                        {currentIndex + 1} / {images.length}
                    </p>

                </div>

            </div>

        </div>

    );

}