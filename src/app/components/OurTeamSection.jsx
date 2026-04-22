"use client";
import React from "react";
import TitleSectionSecondary from "./ui/TitleSectionSecondary";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import AlbertFlores from "../assets/Albert-Flores.png";
import LeslieAlexander from "../assets/Leslie-Alexander.png";
import DarrellSteward from "../assets/Darrell-Steward.png";
import DarleneRobertson from "../assets/Darlene-Robertson.png";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

import * as motion from "motion/react-client";

export default function OurTeamSection() {
  const ourTeam = [
    {
      name: "Albert Flores",
      role: "Landscape Designer",
      image: AlbertFlores,
    },
    {
      name: "Leslie Alexander",
      role: "Lawn Care Specialist",
      image: LeslieAlexander,
    },
    {
      name: "Darrell Steward",
      role: "Garden Specialist",
      image: DarrellSteward,
    },
    {
      name: "Darlene Robertson",
      role: "Client Service Coordinator",
      image: DarleneRobertson,
    },
  ];

  const extendedOurTeam = [...ourTeam, ...ourTeam];

  return (
    <section className="pt-20 pb-25 tablet:pb-30">
      <div className="px-5 sm:px-7.5">
        <div className="max-w-300 mx-auto">
          <div className="flex justify-between items-end">
            <TitleSectionSecondary
              title="Our Team"
              subtitle="Our Approach to Expert"
              italic="Garden Care"
              maxWidth={"max-w-110"}
            />
            <div className="mb-8">
              <div className="flex max-w-220 laptop:max-w-300 mx-auto gap-4 mt-8">
                <button className="h-11 w-11 flex justify-center items-center bg-AltPrimary text-white rounded-full transition cursor-pointer arrow-left">
                  <GoArrowLeft className="text-2xl" />
                </button>

                <button className="h-11 w-11 flex justify-center items-center bg-AltPrimary text-white rounded-full transition cursor-pointer arrow-right">
                  <GoArrowRight className="text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ dela: 0.2, duration: 0.6 }}
      >
        <Swiper
          slidesPerView={1.2}
          breakpoints={{
            810: {
              slidesPerView: 2.3,
            },
            1200: {
              slidesPerView: 3.8,
            },
            1300: {
              slidesPerView: 4.5,
            },
          }}
          spaceBetween={24}
          centeredSlides
          navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
          loop={true}
          autoplay={{ delay: 5000 }}
          allowTouchMove={false}
          modules={[Navigation, Autoplay]}
          className="overflow-visible"
        >
          {extendedOurTeam.map((member, id) => (
            <SwiperSlide key={id}>
              <div>
                <Image
                  src={member.image}
                  loading="eager"
                  alt=""
                  className="rounded-lg mb-8"
                />
                <h2 className="text-AltPrimary text-[28px] font-medium mb-1">
                  {member.name}
                </h2>
                <p className="text-AltPrimary text-xl ">{member.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
