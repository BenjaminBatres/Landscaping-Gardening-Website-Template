"use client";
import React from "react";
import Image from "next/image";
import * as motion from "motion/react-client";
// icons
import { PiPlantFill } from "react-icons/pi";
import { GiRibbonMedal } from "react-icons/gi";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { BsWatch } from "react-icons/bs";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
// Images
import LawnEdge from "../assets/Lawn-edge.jpg";
import Greenhouse from "../assets/Greenhouse.png";
import Watering from "../assets/Watering.jpg";
import OnTimeService from "../assets/On-Time-Service.jpg";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

export default function ChooseUsSection() {
  const features = [
    {
      image: LawnEdge,
    },
    {
      icon: <PiPlantFill />,
      title: "Tailored Lawn & Garden Solutions",
      description:
        "Crisp, defined edges that elevate your curb appeal and give your landscape a pristine look.",
    },
    {
      image: Watering,
    },
    {
      icon: <GiRibbonMedal />,
      title: "Fully Licensed & Insured",
      description:
        "Well-defined edges that make your lawn stand out and look perfectly maintained.",
    },
    {
      image: Greenhouse,
    },
    {
      icon: <HiWrenchScrewdriver />,
      title: "Modern Tools & and Techniques",
      description:
        "Crisp, defined edges that elevate your curb appeal and give your landscape a pristine look.",
    },
    {
      image: OnTimeService,
    },
    {
      icon: <BsWatch />,
      title: "Reliable & On-Time Service",
      description:
        "Crisp, defined edges that elevate your curb appeal and give your landscape a pristine look.",
    },
  ];

  const extendedSlides = [...features, ...features];

  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="px-5 sm:px-7.5"
      >
        <div className="max-w-247.5 laptop:max-w-300 mx-auto flex flex-col laptop:flex-row laptop:items-center mb-10">
          <div className="laptop:w-[65%]">
            <h3 className="text-sm text-Primary py-1 px-3 border border-gray-300 w-fit rounded-full mb-3.5">
              Choose Us
            </h3>
            <h2 className="text-[34px] tablet:text-[40px] laptop:text-[52px]/15 mb-2 lg:mb-5 text-Primary max-w-xl font-semibold">
              Here’s Why Our Clients Love
              <span className="font-playfair-display"> Working With Us</span>
            </h2>
          </div>
          <div className="laptop:w-[35%]">
            <p className="text-Primary max-w-150 text-[15px] laptop:text-base">
              "We believe great lawn care is more than just cutting grass — it’s
              about building trust, delivering consistent results, and treating
              every yard like our own.",
            </p>
          </div>
        </div>
      </motion.div>

      <Swiper
        slidesPerView={1.2}
        breakpoints={{
          810: {
            slidesPerView: 2.3,
          },
          1200: {
            slidesPerView: 4.3,
          },
          1300: {
            slidesPerView: 5.3,
          },
        }}
        spaceBetween={20}
        centeredSlides
        navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
        grabCursor
        loop={true}
        autoplay={{ delay: 5000 }}
        modules={[Navigation, Autoplay]}
        className="overflow-visible"
      >
        {extendedSlides.map((feature, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className={`h-95 overflow-hidden bg-White-300 rounded-lg `}
            >
              {feature.image ? (
                <Image
                  loading="eager"
                  src={feature.image}
                  alt=""
                  className="object-cover h-full"
                />
              ) : (
                <div className="p-7 flex flex-col justify-between h-full">
                  <div>
                    <div className="h-11 w-11 rounded-full flex justify-center items-center bg-white">
                      <div className="text-xl text-Primary">{feature.icon}</div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-Primary text-2xl font-semibold mb-6">
                      {feature.title}
                    </h2>
                    <p className="text-Primary">{feature.description}</p>
                  </div>
                </div>
              )}
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="px-5 sm:px-7.5"
      >
        <div className="flex max-w-247.5 laptop:max-w-300 mx-auto gap-4 mt-8">
          <button className="h-11 w-11 flex justify-center items-center bg-AltPrimary text-white rounded-full transition cursor-pointer arrow-left">
            <GoArrowLeft className="text-2xl" />
          </button>

          <button className="h-11 w-11 flex justify-center items-center bg-AltPrimary text-white rounded-full transition cursor-pointer arrow-right">
            <GoArrowRight className="text-2xl" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
