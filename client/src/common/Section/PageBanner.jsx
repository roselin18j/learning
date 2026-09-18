import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

export default function PageBanner({
    title,
    image,
}) {
    return (
        <section
            className="relative flex h-[420px] items-center justify-center overflow-hidden"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay */}

            <div className="absolute inset-0 bg-black/60" />

            {/* Decorative Blur */}

            <div className="absolute left-0 top-0 h-60 w-60 rounded-full bg-maroon/20 blur-[120px]" />

            <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-maroon/20 blur-[120px]" />

            {/* Content */}

            <div className="container relative z-10 text-center">

                <h1 className="font-heading text-6xl font-bold text-white">

                    {title}

                </h1>

                <div className="mt-6 flex items-center justify-center gap-3 text-white/90">

                    <Link
                        to="/"
                        className="transition hover:text-ivory"
                    >
                        Home
                    </Link>

                    <FaChevronRight className="text-xs" />

                    <span className="font-semibold text-ivory">

                        {title}

                    </span>

                </div>

            </div>
        </section>
    );
}