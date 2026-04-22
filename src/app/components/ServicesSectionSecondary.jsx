"use client";
import React, { useEffect, useRef } from "react";
import BushTrim from "../assets/Bush-trim.jpg";
import BlowCleanup from "../assets/Blow-cleanup.jpg";
import GrassAdjustment from "../assets/Grass-adjustment.jpg";
import WeedWacker from "../assets/Weed-wacker.jpg";
import LawnMowing from "../assets/Lawn-Mowing-Maintenance.jpg";
import LawnCare from "../assets/Lawn-care.jpg";


import * as motion from "motion/react-client";
import { useAnimation, useInView } from "motion/react";
import ServiceCard from "./ui/ServiceCard";

export default function ServicesSectionSecondary() {
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
    hidden: { opacity: 0, y:100 },
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
  const services = [
    {
      id: "lawn-health-inspection",
      title: "Lawn Health Inspection",
      description:
        "Stay ahead of problems with routine checks for soil, pests, and turf condition — keeping your lawn resilient all year.",
      image: BushTrim,
    },
    {
      id: "debris-blow-cleanup",
      title: "Debris/Blow Cleanup",
      description:
        "Enjoy a spotless lawn and outdoor space with complete post-service cleanup, leaving your garden tidy and presentable.",
      image: BlowCleanup,
    },
    {
      id: "grass-height-adjustment",
      title: "Grass Adjustment",
      description:
        "Protect root health and maintain vibrancy with expert mowing height adjustments matched to each season’s conditions.",
      image: GrassAdjustment,
    },
    {
      id: "edge-trimming-lawn-definition",
      title: "Edge Trimming & Lawn Definition",
      description:
        "Achieve crisp, sharp lawn borders that enhance curb appeal and prevent grass from spreading into beds and pathways.",
      image: WeedWacker,
    },
    {
      id: "lawn-mowing-maintence",
      title: "Lawn Health Inspection",
      description:
        "Boost soil health and strengthen grass with year-round fertilisation plans designed for lasting growth and resilience.",
      image: LawnMowing,
    },
    {
      id: "seasonal-fertilisation-lawn-nutrition",
      title: "Seasonal Fertilisation & Lawn Nutrition",
      description:
        "Keep your lawn neat, green, and thriving with professional mowing, trimming, and seasonal care tailored to your space.",
      image: LawnCare,
    },
  ];
  return (
    <section className="py-20 px-5 sm:px-7.5">
      <div className="max-w-247.5 laptop:max-w-300 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="text-AltPrimary font-medium">[Our Services]</h3>
          <h2 className="text-[34px] tablet:text-[40px] laptop:text-[52px]/15 mb-10 lg:mb-12 text-AltPrimary font-medium ">
            Browse All Our{" "}
            <span className="font-playfair-display">Services</span>
          </h2>
        </motion.div>
        <motion.div
          ref={containerRef}
          initial="hidden"
          variants={container}
          animate={mainControls}
          className="grid tablet:grid-cols-2 laptop:grid-cols-3 gap-x-4 gap-y-15"
        >
          {services.map((service) => (
           <ServiceCard key={service.id} item={item} service={service}/>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
