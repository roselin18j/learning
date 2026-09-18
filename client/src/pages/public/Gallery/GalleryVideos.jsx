import { FaPlay } from "react-icons/fa";

export default function GalleryVideos() {

    const videos = [
        {
            id: 1,
            title: "Community Health Camp Highlights",
            thumbnail:
                "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900",
            url: "https://www.youtube.com/",
        },
        {
            id: 2,
            title: "Food Distribution Program",
            thumbnail:
                "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=900",
            url: "https://www.youtube.com/",
        },
        {
            id: 3,
            title: "Education Support Initiative",
            thumbnail:
                "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900",
            url: "https://www.youtube.com/",
        },
        {
            id: 4,
            title: "Tree Plantation Drive",
            thumbnail:
                "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900",
            url: "https://www.youtube.com/",
        },
    ];

    return (

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

                    {videos.map((video) => (

                        <a
                            key={video.id}
                            href={video.url}
                            target="_blank"
                            rel="noreferrer"
                            className="group overflow-hidden rounded-[25px] bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >

                            <div className="relative overflow-hidden">

                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
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

                        </a>

                    ))}

                </div>

            </div>

        </section>

    );
}