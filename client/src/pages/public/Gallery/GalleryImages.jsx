import { useState } from "react";
import GalleryModal from "../../../common/Modal/GalleryModal";

export default function GalleryImages() {

    const [category, setCategory] = useState("all");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const images = [
        {
            id: 1,
            title: "Medical Camp",
            category: "health",
            image:
                "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900",
        },
        {
            id: 2,
            title: "Food Distribution",
            category: "food",
            image:
                "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=900",
        },
        {
            id: 3,
            title: "School Support",
            category: "education",
            image:
                "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900",
        },
        {
            id: 4,
            title: "Women Empowerment",
            category: "women",
            image:
                "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900",
        },
        {
            id: 5,
            title: "Tree Plantation",
            category: "environment",
            image:
                "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900",
        },
        {
            id: 6,
            title: "Volunteer Activity",
            category: "volunteer",
            image:
                "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=900",
        },
        {
            id: 7,
            title: "Community Support",
            category: "community",
            image:
                "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=900",
        },
        {
            id: 8,
            title: "Child Care",
            category: "children",
            image:
                "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=900",
        },
    ];

    const filteredImages =
        category === "all"
            ? images
            : images.filter((item) => item.category === category);

    return (
        <section className="bg-white py-24">

            <div className="container">

                {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">

                    <span className="rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-white">
                        PHOTO GALLERY
                    </span>

                    <h2 className="mt-6 font-heading text-5xl font-bold text-black">
                        Moments That Inspire Hope
                    </h2>

                    <p className="mt-6 leading-8 text-gray-600">
                        Browse our activities, events and community initiatives
                        captured throughout our journey.
                    </p>

                </div>

                {/* Categories */}

                <div className="mt-16 flex flex-wrap justify-center gap-4">

                    {[
                        "all",
                        "health",
                        "education",
                        "food",
                        "women",
                        "environment",
                        "volunteer",
                        "community",
                        "children",
                    ].map((item) => (

                        <button
                            key={item}
                            onClick={() => setCategory(item)}
                            className={`rounded-full px-6 py-3 font-semibold capitalize transition ${
                                category === item
                                    ? "bg-maroon text-white"
                                    : "bg-ivory text-blackhover:bg-maroon hover:text-white"
                            }`}
                        >
                            {item}
                        </button>

                    ))}

                </div>

                {/* Gallery */}

                <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                    {filteredImages.map((item, index) => (

                        <div
                            key={item.id}
                            onClick={() => {
                                setCurrentIndex(index);
                                setIsOpen(true);
                            }}
                            className="group cursor-pointer overflow-hidden rounded-[25px] shadow-lg"
                        >

                            <div className="overflow-hidden">

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                                />

                            </div>

                            <div className="bg-white p-5">

                                <h3 className="font-heading text-xl font-bold text-black">

                                    {item.title}

                                </h3>

                                <p className="mt-2 text-sm capitalize text-maroon">

                                    {item.category}

                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

            <GalleryModal
                isOpen={isOpen}
                images={filteredImages}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                onClose={() => setIsOpen(false)}
            />

        </section>
    );
}