"use client";
import React, { useEffect, useRef } from "react";
import TitleSection from "./ui/TitleSection";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import LandScaping from "../assets/Landscaping.jpg";
import Image from "next/image";
import Counter from "./ui/Counter";
import * as motion from "motion/react-client";
import { useAnimation, useInView } from "motion/react";

export default function AbouSection() {
  const features = [
    {
      title: 1200,
      symbol: "+",
      subTitle: "Transforming yard",
      desciption: "Into beautiful, thriving spaces across the city.",
    },
    {
      title: 10,
      symbol: "+",
      subTitle: "Lawn Care Specialists",
      desciption: "Expert Lawn & Garden Services Since 2015",
    },
    {
      title: 98,
      symbol: "%",
      subTitle: "Customer Satisfaction",
      desciption: "Trusted by Homeowners for Quality Service",
    },
    {
      title: 50,
      symbol: "+",
      subTitle: "Multiple local areas",
      desciption: "Serving Local Areas with Professional Care.",
    },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const mainControls = useAnimation();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3, // delay between items
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
    <section className="py-20 px-5 sm:px-7.5 bg-White-300">
      <div className="max-w-247.5 laptop:max-w-300 mx-auto">
        <TitleSection title={"About Us"} />

        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 tablet:gap-12 mb-10 tablet:my-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.4,
              delay: 0.5,
            }}
            className="lg:w-1/2"
          >
            <Image
              src={LandScaping}
              alt=""
              loading="eager"
              className="rounded-xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="lg:w-1/2"
          >
            <h2 className="text-[25px] leading-8 xl:text-[32px]/10 mb-5 text-Primary font-medium">
              At <span className="font-playfair-display">Greenspire </span>we’ve
              been turning ordinary yards into thriving landscapes since 2015,
              with 1,200+ completed projects. We take pride in delivering
              tailored solutions that match your space, style, and schedule.
            </h2>
            <p className="text-Primary text-[15px] sm:text-base xl:text-lg mb-6">
              Every successful outdoor transformation begins with a thoughtful
              conversation. During this first stage, our team takes the time to
              understand your goals, preferences, and pain points — whether
              you’re struggling with uneven growth, overgrown hedges, patchy
              turf, or a garden that simply needs a fresh start.
            </p>
            <Link
              href={"/about-us"}
              className="flex items-center group gap-5 bg-Mint hover:bg-Mint/90 transition-colors duration-300 py-1 pl-4 pr-1 rounded-full text-Primary w-fit"
            >
              More About us
              <div className="h-8 w-9 rounded-full relative bg-white overflow-hidden text-lg">
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-full">
                  <BsArrowRight />
                </span>
                <span className="absolute inset-0 flex items-center justify-center -translate-x-full transition-transform duration-300 group-hover:translate-x-0">
                  <BsArrowRight />
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
        <motion.div
          ref={containerRef}
          initial="hidden"
          variants={container}
          animate={mainControls}
          className="grid tablet:grid-cols-2 xl:grid-cols-4 gap-4 "
        >
          {features.map((feature, id) => (
            <motion.div
              variants={item}
              key={id}
              className="py-7 px-5 flex flex-col gap-20 bg-white rounded-lg"
            >
              <div>
                <h2 className="text-6xl mb-2">
                  <span className="sm:hidden">
                    {feature.title + feature.symbol}
                  </span>
                  <Counter
                    max={feature.title}
                    symbol={feature.symbol}
                    ref={containerRef}
                  />
                </h2>
              </div>
              <div>
                <h3 className="text-xl text-Primary font-semibold mb-2">
                  {feature.subTitle}
                </h3>
                <p className="text-Primary">{feature.desciption}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
