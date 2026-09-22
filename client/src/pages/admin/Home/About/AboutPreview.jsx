import { FaHeart, FaArrowRight } from "react-icons/fa";

export default function AboutPreview({ about }) {
    if (!about) {
        return (
            <div className="bg-white rounded-3xl shadow-sm border p-12 text-center text-slate-500">
                No About Section Found
            </div>
        );
    }

    return (
        <div className="bg-white rounded-3xl shadow-sm border overflow-hidden">

            {/* Header */}

            <div className="px-8 py-6 border-b">

                <h2 className="text-2xl font-bold">
                    Live Preview
                </h2>

                <p className="text-slate-500 mt-1">
                    This is how your About section appears on the website.
                </p>

            </div>

            {/* Preview */}

            <div className="p-10 bg-[#F9F7F2]">

                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left */}

                    <div>

                        <div className="flex items-center gap-3">

                            <span className="w-10 h-[2px] bg-[#6B1246]" />

                            <span className="uppercase tracking-[3px] text-sm font-semibold text-[#7AA641]">

                                {about.badge}

                            </span>

                        </div>

                        <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-900">

                            {about.title}

                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">

                            {about.description}

                        </p>

                        <div className="mt-10 space-y-8">

                            {about.features?.map((feature, index) => (

                                <div
                                    key={index}
                                    className="flex gap-5"
                                >

                                    <div
                                        className="
                                            w-12
                                            h-12
                                            rounded-xl
                                            bg-[#6B1246]/10
                                            flex
                                            items-center
                                            justify-center
                                            text-[#6B1246]
                                            shrink-0
                                        "
                                    >

                                        <FaHeart />

                                    </div>

                                    <div>

                                        <h4 className="text-lg font-semibold">

                                            {feature.title}

                                        </h4>

                                        <p className="text-slate-600 mt-2">

                                            {feature.description}

                                        </p>

                                    </div>

                                </div>

                            ))}

                        </div>

                        <button
                            className="
                                mt-10
                                inline-flex
                                items-center
                                gap-3
                                bg-[#7AA641]
                                hover:bg-[#6B1246]
                                text-white
                                px-7
                                py-4
                                rounded-xl
                                transition
                            "
                        >

                            Learn More

                            <FaArrowRight />

                        </button>

                    </div>

                    {/* Right */}

                    <div className="relative">

                        <div
                            className="
                                absolute
                                left-5
                                top-5
                                w-full
                                h-full
                                rounded-[40px]
                                bg-[#7AA641]/10
                            "
                        />

                        <img
                            src={about.image?.url}
                            alt={about.image?.alt}
                            className="
                                relative
                                rounded-[40px]
                                shadow-2xl
                                object-cover
                                w-full
                                h-[620px]
                            "
                        />

                    </div>

                </div>

            </div>

        </div>
    );
}