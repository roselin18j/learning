import bannerImg from "../../../assets/images/ban1.jpeg";
import bannerImg2 from "../../../assets/images/ban2.jpeg";
import bannerImg3 from "../../../assets/images/ban3.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Autoplay,
    Navigation,
    Pagination,
} from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaHeart } from "react-icons/fa";
export default function Hero() {
    const contentVariants = {
        hidden: {
            opacity: 0,
            y: 60,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    };
    const slides = [
        {
            image: bannerImg,
            badge: "Together We Build Hope",
            title: "Every Small Act Of Kindness Creates A Better Tomorrow",
            description:
                "Join us in transforming lives through education, healthcare, disaster relief, and community development across Tamil Nadu.",
        },
        {
            image: bannerImg2,
            badge: "Support Every Family",
            title: "Together We Can Change Thousands Of Lives",
            description:
                "Empowering communities through compassion, education, healthcare, and social support.Creating opportunities that inspire hope and create lasting change.",
        },
        {
            image: bannerImg3,
            badge: "Be The Reason Someone Smiles",
            title: "Your Kindness Can Inspire Hope For Everyone",
            description:
                "Volunteer, donate, and become part of a movement that creates lasting impact.Together, we can inspire hope, empower lives, and build stronger communities.",
        },
    ];
    return (
        <section className="relative">

            <Swiper
                modules={[
                    Autoplay,
                    Navigation,
                    Pagination
                ]}
                loop={true}
                speed={1000}
                navigation
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                    
                    disableOnInteraction: false,
                }}
                className=""
            >

                {slides.map((slide, index) => (

                    <SwiperSlide key={index}>

                        <div className="relative  pt-30 pb-50">

                            <div className="absolute inset-0">

                                <img
                                    src={slide.image}
                                    alt=""
                                    className="h-full w-full object-cover"
                                />

                            </div>

                            <div className="absolute inset-0 bg-black/70"></div>

                            <motion.div
                                className="relative z-10 container"
                                variants={contentVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false }}
                            >

                                <div className="max-w-3xl mx-auto text-center">

                                    <motion.span
                                        variants={itemVariants}
                                        className="mb-4 inline-block rounded-full bg-green px-4 py-2 text-sm font-semibold text-white"
                                    >
                                        {slide.badge}
                                    </motion.span>

                                    <motion.h1
                                        variants={itemVariants}
                                        className="font-heading text-3xl font-bold leading-none text-white lg:text-6xl line-height"
                                    >
                                        {slide.title}
                                    </motion.h1>

                                    <motion.p
                                        variants={itemVariants}
                                        className="mt-4 max-w-6xl font-body text-lg leading-8 text-white/90"
                                    >
                                        {slide.description}
                                    </motion.p>

                                    <motion.div
                                        variants={itemVariants}
                                        className="mt-10 flex gap-4 justify-center"
                                    >


                                        <button className="group inline-flex items-center rounded-lg bg-maroon px-8 py-4 font-semibold text-white hover:bg-green transition">
                                            Donate Now
                                               <FaHeart className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                                        </button>

                                        <button className="group inline-flex items-center rounded-lg  bg-green px-8 py-4 font-semibold text-white hover:bg-maroon transition">
                                            Become Volunteer
                                               <FaHeart className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                                        </button>

                                    </motion.div>

                                </div>

                            </motion.div>
                        </div>

                    </SwiperSlide>

                ))}

            </Swiper>

        </section>
    );
}