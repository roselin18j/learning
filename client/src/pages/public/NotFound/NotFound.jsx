import { Link } from "react-router-dom";
import { FaArrowLeft, FaHome, FaHeart } from "react-icons/fa";
import bannerImg from "../../../assets/images/ban1.jpeg";
import PageBanner from "../../../common/Section/PageBanner";

export default function NotFound() {

    return (
        <>
            <PageBanner
                title="404 - Page Not Found"
                image={bannerImg}
            />

            <section className="bg-ivory py-24">

                <div className="container">

                    <div className="mx-auto max-w-4xl rounded-[40px] bg-white px-8 py-20 text-center shadow-xl">

                        {/* 404 */}

                        <div className="relative inline-block">

                            <span className="font-heading text-[130px] font-bold leading-none text-maroon/10">
                                404
                            </span>

                            <FaHeart className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl text-maroon" />

                        </div>

                        {/* Heading */}

                        <h2 className="mt-10 font-heading text-5xl font-bold text-black">
                            Oops! Page Not Found
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-600">
                            The page you are looking for may have been moved,
                            deleted or the URL may be incorrect. Let's help you
                            get back to making a difference.
                        </p>

                        {/* Buttons */}

                        <div className="mt-14 flex flex-wrap justify-center gap-5">

                            <Link
                                to="/"
                                className="group inline-flex items-center rounded-xl bg-maroon px-8 py-4 font-semibold text-white transition hover:bg-darkmaroon"
                            >

                                <FaHome className="mr-3" />

                                Back To Home

                            </Link>

                            <Link
                                to="/contact"
                                className="group inline-flex items-center rounded-xl border border-darkmaroon px-8 py-4 font-semibold text-blacktransition hover:border-maroon hover:bg-maroon hover:text-white"
                            >

                                <FaArrowLeft className="mr-3 transition group-hover:-translate-x-1" />

                                Contact Us

                            </Link>

                        </div>

                        {/* Help Text */}

                        <div className="mt-16 rounded-2xl bg-ivory p-8">

                            <h3 className="font-heading text-2xl font-bold text-black">
                                Need Assistance?
                            </h3>

                            <p className="mt-4 leading-7 text-gray-600">
                                If you reached this page through one of our
                                website links, please let us know. We will fix
                                the issue as soon as possible.
                            </p>

                        </div>

                    </div>

                </div>

            </section>
        </>
    );

}