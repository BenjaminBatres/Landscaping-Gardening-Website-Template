"use client";
import React, { useEffect, useRef } from "react";
import TitleSection from "./ui/TitleSection";

import TreeCutting from "../assets/Tree-cutting.jpg";
import YardCare from "../assets/Yard-care.png";
import FlowerMaze from "../assets/Flower-maze.png";
import GardenRenovation from "../assets/Yard-care.png";
import Image from "next/image";

import * as motion from "motion/react-client";
import { scale, useAnimation, useInView } from "motion/react";
export default function GallerySection() {
  const galleryInfo = [
    {
      title: "Tree Cutting",
      description:
        "At look at full-service jobs where we’ve handled mowing, planting, trimming, and more.",
      image: TreeCutting,
      span: "tablet:row-span-2",
    },
    {
      title: "Complete Yard Care",
      description:
        "Polished, sharp edges that boost your home’s curb appeal effortlessly.",
      image: YardCare,
    },
    {
      title: "Flower Maze Trim",
      description:
        "Perfectly trimmed edges that make your outdoor space look neat and inviting.",
      image: FlowerMaze,
    },
    {
      title: "Garden Renovation",
      description:
        "Clean-cut edges that keep your landscape looking flawless year-round.",
      image: GardenRenovation,
      span: "tablet:col-span-2",
    },
  ];

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
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
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
    <section className="py-20 px-5 sm:px-7.5 bg-White-300">
      <div className="max-w-155 tablet:max-w-300 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col laptop:items-center"
        >
          <TitleSection title={"Gallery"} />
          <h2 className="text-[34px] tablet:text-[40px] laptop:text-[52px]/15 mb-10 lg:mb-12 text-Primary max-w-2xl font-semibold laptop:text-center">
            From Patchy Lawns to{" "}
            <span className="font-playfair-display">Explore Our Gallery</span>
          </h2>
        </motion.div>
        <motion.div
          ref={containerRef}
          initial="hidden"
          animate={mainControls}
          variants={container}
          className="grid tablet:grid-cols-2 laptop:grid-cols-3 gap-4 tablet:auto-rows-[277px]"
        >
          {galleryInfo.map((gallery, id) => (
            <motion.div
              variants={item}
              className={`${gallery.span} relative rounded-xl`}
              key={id}
            >
              <Image
                loading="eager"
                src={gallery.image}
                alt=""
                className="h-110 sm:h-full w-full object-cover object-[50%_85%] rounded-xl"
              />
              <div
                className="absolute bottom-0 w-full p-7.5 rounded-xl space-y-2"
                style={{
                  background:
                    "linear-gradient(rgba(20, 20, 15, 0) 0%, rgba(0, 0, 0, 0.88) 63.964%)",
                }}
              >
                <h2 className="text-white text-2xl font-semibold">
                  {gallery.title}
                </h2>
                <p className="text-white text-sm">{gallery.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
