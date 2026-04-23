"use client";
import React, { useEffect, useRef } from "react";
import Founder from "../assets/Founder.png";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import Counter from "./ui/Counter";
import * as motion from "motion/react-client";
import { useAnimation, useInView } from "motion/react";
import RevealText from "./ui/RevealText";

export default function AboutSectionSecondary() {
  const companyInfo = [
    {
      title: 10,
      symbol: "+",
      desciption:
        "With over 10 years of experience, we've refined our craft in lawn mowing.",
    },
    {
      title: 1200,
      symbol: "+",
      desciption:
        "We’ve proudly completed over 1,200 lawn and garden projects, each tailored.",
    },
    {
      title: 98,
      symbol: "%",
      desciption:
        "With a 98% customer satisfaction rate, our clients trust us to deliver reliable",
    },
    {
      title: 50,
      symbol: "+",
      desciption:
        "Proudly serving 50+ communities across England — bringing expert lawn care",
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
    <section className="pt-12.5 pb-5 tablet:py-20 px-5 sm:px-7.5">
      <div className="max-w-300 mx-auto">
        <div className="flex flex-col laptop:flex-row gap-2.5 laptop:gap-15 mb-20">
          <div className="w-1/2">
            <h3 className="text-Primary pt-2 font-medium">[About Us]</h3>
          </div>
          <div>
            <RevealText
              text={
                "At Greenspire we’ve been turning ordinary yards into thriving landscapes since 2015, with 1,200+ completed projects"
              }
            />

            <div className="border-l-3 border-Primary pl-5 gap-5 mt-10 mb-8">
              <p className="text-Primary text-xl tablet:text-[22px] laptop:text-2xl font-playfair-display font-semibold mb-8">
                “One of the most common mistakes I see is people cutting their
                grass too short, especially in spring and summer. Leaving it
                just a little longer encourages deeper roots and protects it
                from heat stress. If you’re not adjusting your blade height with
                the seasons, you’re missing a key part of lawn care.”
              </p>
              <div className="flex items-center gap-2">
                <Image
                  src={Founder}
                  alt=""
                  className="rounded-full w-12 h-12 object-cover"
                />
                <div>
                  <h4 className="text-AltPrimary text-lg tablet:text-xl font-semibold">
                    Ben Ducket
                  </h4>
                  <p className="text-Primary text-sm">Founder & CEO</p>
                </div>
              </div>
            </div>
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
        </div>
        <motion.div
          ref={containerRef}
          initial="hidden"
          variants={container}
          animate={mainControls}
          className="grid tablet:grid-cols-2 laptop:grid-cols-4 gap-4"
        >
          {companyInfo.map((info, id) => (
            <motion.div
              variants={item}
              key={id}
              className="p-5 flex flex-col gap-25 bg-White-300 rounded-lg"
            >
              <div>
                <p className="text-Primary laptop:max-w-59">
                  {info.desciption}
                </p>
              </div>
              <div>
                <h2 className="text-[52px] text-Primary font-medium">
                  <Counter
                    max={info.title}
                    symbol={info.symbol}
                    ref={containerRef}
                  />
                </h2>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
