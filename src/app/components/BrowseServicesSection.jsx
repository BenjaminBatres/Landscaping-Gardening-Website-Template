"use client";
import React, { useEffect, useRef } from "react";
import * as motion from "motion/react-client";
import { useAnimation, useInView } from "motion/react";
import ServiceCard from "./ui/ServiceCard";
import servicesInfo from "../data/service-info";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

export default function BrowseServicesSection({ id }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const mainControls = useAnimation();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.4, // delay between items
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("show");
    }
  }, [isInView]);
  return (
    <section className="py-20 px-5 sm:px-7.5">
      <div className="max-w-247.5 laptop:max-w-300 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col tablet:flex-row justify-between tablet:items-center gap-5 tablet:gap-0 mb-10 laptop:mb-12"
        >
          <div>
            <h3 className="text-AltPrimary font-medium">[Our Services]</h3>
            <h2 className="text-[34px] tablet:text-[40px] laptop:text-[52px]/15  text-AltPrimary font-medium ">
              Browse All Our{" "}
              <span className="font-playfair-display">Services</span>
            </h2>
          </div>
          <Link
            href={"/"}
            className="flex items-center gap-6 bg-Mint hover:bg-AltPrimary hover:text-Mint transition-all duration-300 py-1 pl-6 pr-1 laptop:pr-0.5 rounded-full text-Primary group w-fit font-medium cursor-pointer"
          >
            View All
            <div className="relative w-12 h-12 bg-Primary group-hover:bg-Mint group-hover:text-AltPrimary text-Mint overflow-hidden rounded-full text-2xl">
              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-6 group-hover:-translate-y-6">
                <GoArrowUpRight />
              </span>
              <span className="absolute inset-0 flex items-center justify-center -translate-x-6 translate-y-6 transition-transform duration-200 group-hover:translate-x-0 group-hover:translate-y-0">
                <GoArrowUpRight />
              </span>
            </div>
          </Link>
        </motion.div>
        <motion.div
          ref={containerRef}
          initial="hidden"
          variants={container}
          animate={mainControls}
          className="grid tablet:grid-cols-2 laptop:grid-cols-3 gap-x-4 gap-y-15"
        >
          {servicesInfo
            .slice(0, 4)
            .filter((service) => service.id !== id)
            .map((service) => (
              <ServiceCard key={service.id} item={item} service={service} />
            ))}
        </motion.div>
      </div>
    </section>
  );
}
