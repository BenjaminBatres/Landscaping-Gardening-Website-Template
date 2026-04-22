"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import TitleSection from "./ui/TitleSection";
// icons
import { PiPlantFill } from "react-icons/pi";
import { FaLeaf } from "react-icons/fa6";
import { GiHighGrass } from "react-icons/gi";
import { GiLeafSwirl } from "react-icons/gi";
import { BsArrowRight } from "react-icons/bs";
//imgs
import BushTrim from "../assets/Bush-trim.jpg";
import BlowCleanup from "../assets/Blow-cleanup.jpg";
import GrassAdjustment from "../assets/Grass-adjustment.jpg";
import WeedWacker from "../assets/Weed-wacker.jpg";

export default function ServicesSection() {
  const services = [
    {
      id: "lawn-health-inspection",
      title: "Lawn Health Inspection",
      icon: <PiPlantFill />,
      description:
        "Stay ahead of problems with routine checks for soil, pests, and turf condition — keeping your lawn resilient all year.",
      image: BushTrim,
    },
    {
      id: "debris-blow-cleanup",
      title: "Debris/Blow Cleanup",
      icon: <FaLeaf />,
      description:
        "Enjoy a spotless lawn and outdoor space with complete post-service cleanup, leaving your garden tidy and presentable.",
      image: BlowCleanup,
    },
    {
      id: "grass-height-adjustment",
      title: "Grass Adjustment",
      icon: <GiHighGrass />,
      description:
        "Protect root health and maintain vibrancy with expert mowing height adjustments matched to each season’s conditions.",
      image: GrassAdjustment,
    },
    {
      id: "edge-trimming-lawn-definition",
      title: "Edge Trimming & Lawn Definition",
      icon: <GiLeafSwirl />,
      description:
        "Achieve crisp, sharp lawn borders that enhance curb appeal and prevent grass from spreading into beds and pathways.",
      image: WeedWacker,
      hidden: "hidden tablet:block laptop:hidden",
    },
  ];
  return (
    <section className="py-20 px-5 sm:px-7.5 bg-White-300">
      <div className="max-w-155 laptop:max-w-300 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col laptop:items-center"
        >
          <TitleSection title={"Our Services"} />
          <h2 className="text-[34px] tablet:text-[40px] laptop:text-[52px]/15 mb-10 lg:mb-12 text-Primary max-w-3xl font-semibold laptop:text-center">
            Services Designed To Keep Your{" "}
            <span className="font-playfair-display">Outdoors Thriving</span>
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid tablet:grid-cols-2 laptop:grid-cols-3 gap-5"
        >
          {services.map((service, id) => (
            <div
              key={id}
              className={`relative group laptop:cursor-pointer ${service.hidden}`}
            >
              <Image
                loading="eager"
                src={service.image}
                alt=""
                className="rounded-xl h-110 laptop:h-full object-cover "
              />
              <div className="absolute transition-all duration-500 laptop:group-hover:top-[40%] bottom-10 laptop:top-[70%] w-full">
                <div className="bg-AltPrimary w-[90%] tablet:max-w-85 mx-auto p-5 rounded-xl space-y-5.5 ">
                  <div className="bg-white w-11 h-11 rounded-full flex items-center justify-center">
                    <span className="text-xl text-Primary">{service.icon}</span>
                  </div>
                  <h2 className="text-2xl text-Mint font-semibold collapse-title">
                    {service.title}
                  </h2>
                  <div className="laptop:max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-45">
                    <p className="text-Secondary text-[15px] mb-5">
                      {service.description}
                    </p>
                    <Link
                      href={"/"}
                      className="py-3 px-8 text-Primary group/link tablet:text-lg bg-Mint w-fit rounded-full flex items-center gap-2"
                    >
                      See Details
                      <div className="overflow-hidden relative h-6 w-6">
                        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover/link:translate-x-full">
                          <BsArrowRight className="text-2xl" />
                        </span>
                        <span className="absolute inset-0 flex items-center justify-center -translate-x-full transition-transform duration-300 group-hover/link:translate-x-0">
                          <BsArrowRight className="text-2xl" />
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
