"use client";
import React from "react";
import NavbarSecondary from "../components/NavbarSecondary";
import Link from "next/link";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import * as motion from "motion/react-client";

import LawnImg1 from "../assets/Lawn-img-1.png";
import LawnImg2 from "../assets/Lawn-img-2.png";
import LawnImg3 from "../assets/Lawn-img-3.png";
import LawnImg4 from "../assets/Lawn-img-4.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

export default function AboutHeroSection() {
  const lawnImages = [LawnImg1, LawnImg2, LawnImg3, LawnImg4];
  const extentedLawnImages = [...lawnImages, ...lawnImages];

  return (
    <div className="bg-White-300 h-min pb-20">
      <NavbarSecondary />
      <div className="pt-30 tablet:pt-40 px-5 sm:px-7.5">
        <div className="max-w-290 mx-auto mb-8">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col laptop:flex-row laptop:items-end gap-6 laptop:gap-15"
          >
            <div>
              <h3 className="text-Primary font-medium mb-6">[About]</h3>
              <h2 className="text-3xl text-[44px] tablet:text-[60px] laptop:text-7xl font-semibold laptop:mb-4 text-AltPrimary">
                Quality Roots Growth in{" "}
                <span className="font-playfair-display">Every Project.</span>
              </h2>
            </div>
            <div className="laptop:w-1/2">
              <p className="text-Primary text-[17px] laptop:text-lg mb-4 max-w-sm">
                With years of trusted service, we transform outdoor spaces into
                beautiful.
              </p>
              <Link
                href={"/contact"}
                className="py-2 pl-6 pr-2 rounded-full bg-Mint hover:bg-Primary hover:text-Mint transition-all duration-300 flex items-center gap-6 w-fit group font-medium text-[15px] laptop:text-base"
              >
                Contact Us
                <div className="relative w-11 h-11 group-hover:bg-Mint group-hover:text-Primary bg-Primary overflow-hidden rounded-full text-Mint text-2xl">
                  <span className="absolute inset-0 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-6 group-hover:-translate-y-6">
                    <GoArrowUpRight />
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center -translate-x-6 translate-y-6 transition-transform duration-200 group-hover:translate-x-0 group-hover:translate-y-0">
                    <GoArrowUpRight />
                  </span>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <Swiper
        spaceBetween={15}
        slidesPerView={1.2}
        breakpoints={{
          620: {
            slidesPerView: 2.1,
          },
          810: {
            slidesPerView: 2.5,
          },
          1200: {
            slidesPerView: 3.3,
          },
          1500: {
            slidesPerView: 3.8,
          },
          1600: {
            slidesPerView: 4.3,
          },
        }}
        speed={5000}
        autoplay={{ delay: 0 }}
        loop={true}
        allowTouchMove={false}
        modules={[Autoplay]}
        className="h-115 w-full"
      >
        {extentedLawnImages.map((img, id) => (
          <SwiperSlide key={id}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="h-full"
            >
              <Image
                loading="eager"
                src={img}
                alt=""
                className="h-full w-full object-cover rounded-lg"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
