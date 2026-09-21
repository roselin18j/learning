import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

import { getHome } from "../../../services/home.service";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Hero() {
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadHero();
  }, []);

  const loadHero = async () => {
    try {
      const response = await getHome();

      setHero(response.data.data.hero);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

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

  if (loading) {
    return (
      <section className="py-40 text-center">
        Loading Hero...
      </section>
    );
  }

  if (!hero || !hero.isActive) return null;

  return (
    <section className="relative">

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
        speed={1000}
        navigation={hero.showNavigation}
        pagination={{
          clickable: true,
          enabled: hero.showPagination,
        }}
        autoplay={
          hero.autoPlay
            ? {
                delay: hero.autoPlaySpeed,
                disableOnInteraction: false,
              }
            : false
        }
      >

        {hero.slides
          ?.filter((slide) => slide.isActive)
          ?.sort((a, b) => a.order - b.order)
          ?.map((slide) => (

            <SwiperSlide key={slide._id}>

              <div className="relative pt-30 pb-50">

                {/* Background */}

                <div className="absolute inset-0">

                  <img
                    src={slide.image.url}
                    alt={slide.imageAlt}
                    className="h-full w-full object-cover"
                  />

                </div>

                {/* Overlay */}

                <div
                  className="absolute inset-0 bg-black"
                  style={{
                    opacity: slide.overlayOpacity,
                  }}
                ></div>

                <motion.div
                  className="relative z-10 container"
                  variants={contentVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                >

                  <div className="max-w-3xl mx-auto text-center">

                    {/* Badge */}

                    {slide.badge && (

                      <motion.span
                        variants={itemVariants}
                        className="mb-4 inline-block rounded-full bg-green px-4 py-2 text-sm font-semibold text-white"
                      >
                        {slide.badge}
                      </motion.span>

                    )}

                    {/* Title */}

                    <motion.h1
                      variants={itemVariants}
                      className="font-heading text-3xl lg:text-6xl font-bold leading-tight text-white"
                    >
                      {slide.title}
                    </motion.h1>

                    {/* Subtitle */}

                    {slide.subtitle && (

                      <motion.h3
                        variants={itemVariants}
                        className="mt-4 text-2xl text-white font-semibold"
                      >
                        {slide.subtitle}
                      </motion.h3>

                    )}

                    {/* Description */}

                    <motion.p
                      variants={itemVariants}
                      className="mt-6 text-lg leading-8 text-white/90"
                    >
                      {slide.description}
                    </motion.p>

                    {/* Buttons */}

                    <motion.div
                      variants={itemVariants}
                      className="mt-10 flex justify-center gap-4 flex-wrap"
                    >

                      {slide.primaryButton?.text && (

                        <Link
                          to={slide.primaryButton.link}
                          className="group inline-flex items-center rounded-lg bg-maroon px-8 py-4 font-semibold text-white transition hover:bg-green"
                        >
                          {slide.primaryButton.text}

                          <FaHeart className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>

                      )}

                      {slide.secondaryButton?.text && (

                        <Link
                          to={slide.secondaryButton.link}
                          className="group inline-flex items-center rounded-lg bg-green px-8 py-4 font-semibold text-white transition hover:bg-maroon"
                        >
                          {slide.secondaryButton.text}

                          <FaHeart className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>

                      )}

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