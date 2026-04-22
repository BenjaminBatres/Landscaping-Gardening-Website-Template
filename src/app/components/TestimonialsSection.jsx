"use client";
import React from "react";
import Link from "next/link";
import * as motion from "motion/react-client";
import Image from "next/image";
import BrandonStokes from "../assets/Brandon-Stokes.jpg";
import JakeKelis from "../assets/Jake-Kelis.jpg";
// Icons
import { GoArrowUpRight } from "react-icons/go";
import { ImQuotesLeft } from "react-icons/im";
import { FaStar } from "react-icons/fa";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

export default function TestimonialsSection() {
  const testimonials = [
    {
      image: BrandonStokes,
      name: "Brandon Stokes",
      description:
        "They treated our small garden with as much attention as a big landscape job. The results were incredible — clean edges, healthy plants, and a fresh look!",
    },
    {
      image: JakeKelis,
      name: "Jake Kelis",
      description:
        "The team is always on time, professional, and super friendly. They transformed our patchy yard into something we’re proud of. Highly recommend!",
    },
  ];

  const extendedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];
  return (
    <section className="py-20 bg-White-300">
      <div className="px-5 sm:px-7.5">
        <div className="max-w-247.5 laptop:max-w-300 mx-auto flex flex-col tablet:flex-row justify-between tablet:items-end tablet:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-AltPrimary font-medium">[Testimonials]</h3>
            <h2 className="text-[34px] tablet:text-[40px] laptop:text-[52px]/15 mb-4 tablet:mb-10 lg:mb-12 text-AltPrimary font-medium max-w-xs tablet:max-w-md">
              What Our Happy Clients{" "}
              <span className="font-playfair-display">Are Saying</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Link
              href={"/about-us"}
              className="flex items-center gap-5 bg-AltPrimary laptop:bg-Mint hover:bg-AltPrimary hover:text-Mint transition-all duration-300 py-1 pl-6 pr-1 rounded-full text-Mint laptop:text-Primary group w-fit font-medium mb-12"
            >
              See All
              <div className="relative w-12 h-12 bg-Mint laptop:bg-Primary group-hover:bg-Mint group-hover:text-AltPrimary overflow-hidden rounded-full text-Primary laptop:text-Mint text-2xl">
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-6 group-hover:-translate-y-6">
                  <GoArrowUpRight />
                </span>
                <span className="absolute inset-0 flex items-center justify-center -translate-x-6 translate-y-6 transition-transform duration-200 group-hover:translate-x-0 group-hover:translate-y-0">
                  <GoArrowUpRight />
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides
        breakpoints={{
          810: {
            slidesPerView: 1.3,
          },
          1500: {
            slidesPerView: 2.3,
          },
        }}
        speed={15000}
        autoplay={{ delay: 0 }}
        loop={true}
        allowTouchMove={false}
        modules={[Autoplay]}
        className="hidden! tablet:block!"
      >
        {extendedTestimonials.map((testimonial, id) => (
          <SwiperSlide key={id}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col tablet:flex-row tablet:gap-10 h-130 bg-white rounded-lg p-3 tablet:p-0 tablet:bg-transparent"
            >
              <div>
                <figure className="h-50 w-50 tablet:h-full tablet:w-90 mb-6">
                  <Image
                    loading="eager"
                    src={testimonial.image}
                    alt=""
                    className="h-full object-cover rounded-lg"
                  />
                </figure>
              </div>
              <div>
                <ImQuotesLeft className="text-[66px] tablet:text-[86px] text-AltPrimary mb-6 tablet:mb-8" />
                <p className="text-AltPrimary text-lg laptop:text-xl font-medium mb-4 tablet:mb-12">
                  {testimonial.description}
                </p>
                <div className="flex gap-1 mb-3">
                  {new Array(5).fill(0).map((_, id) => (
                    <FaStar className="text-[#ffc008] text-[22px]" key={id} />
                  ))}
                </div>
                <h2 className="text-AltPrimary text-xl font-semibold">
                  {testimonial.name}
                </h2>
                <p className="text-Primary">Owner of green haven supplies</p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="px-5 sm:px-7.5 space-y-6 tablet:hidden">
        {testimonials.map((testimonial, id) => (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3, duration: 0.6 }}
            key={id}
            className="bg-white rounded-lg p-3"
          >
            <figure className="h-1/4 w-1/2 sm:w-1/4 mb-6">
              <Image
                loading="eager"
                src={testimonial.image}
                alt=""
                className="h-full w-full object-cover  rounded-lg"
              />
            </figure>

            <ImQuotesLeft className="text-[66px] tablet:text-[86px] text-AltPrimary mb-6 tablet:mb-8" />
            <p className="text-AltPrimary text-lg laptop:text-xl font-medium mb-4 tablet:mb-12">
              {testimonial.description}
            </p>
            <div className="flex gap-1.5 mb-3">
              {new Array(5).fill(0).map((_, id) => (
                <FaStar className="text-[#ffc008] text-[22px]" key={id} />
              ))}
            </div>
            <h2 className="text-AltPrimary text-lg font-semibold">
              {testimonial.name}
            </h2>
            <p className="text-Primary text-[15px]">
              Owner of green haven supplies
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
