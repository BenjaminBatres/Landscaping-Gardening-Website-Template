"use client";
import React, { useEffect, useRef } from "react";
import MowingLawn from "../assets/Mowing-lawn.jpg";
import Image from "next/image";
import TitleSection from "./ui/TitleSection";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import * as motion from "motion/react-client";

export default function ValuesSection() {
  const lawnInfo = [
    "Every cut, trim, and plant is handled with precision and pride.",
    "On time, on point, and always professional.",
    "Healthy yards, safe methods, greener choices.",
    "Healthy yards, safe methods, greener choices.",
    "Your satisfaction is our top priority—every visit, every time.",
  ];
  return (
    <section className="py-20 px-5 sm:px-7.5">
      <div className="max-w-155 tablet:max-w-300 mx-auto flex flex-col lg:flex-row gap-10 lg:gap-20">
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
          <figure className="h-170 lg:h-177">
            <Image
              loading="eager"
              src={MowingLawn}
              height={2000}
              width={2000}
              alt=""
              className="rounded-lg h-full w-full object-cover object-[0%_60%]"
            />
          </figure>
        </motion.div>
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <TitleSection
              title={"Core Values"}
              subTitle={"It’s Not Just "}
              italic={"Lawn Care"}
              marginBottom={"16px"}
            />
            <p className="text-Primary text-[15px] lg:text-base max-w-180 mb-10 lg:mb-15">
              We’ve been turning ordinary yards into thriving, beautiful
              landscapes since 2015. Whether it's regular mowing, seasonal
              cleanups, or complete garden makeovers — we’re here to help you
              grow something amazing.
            </p>
            <div className="mb-10">
              {lawnInfo.map((info, id) => (
                <div
                  key={id}
                  className="border-t border-gray-300 nth-[5]:border-b py-4 text-Primary font-semibold text-[15px] lg:text-base"
                >
                  {info}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <Link
              href={"/pricing"}
              className="flex items-center group gap-2 py-4 px-6 bg-Primary w-fit text-Mint rounded-full"
            >
              Get Started
              <div className="overflow-hidden relative h-2 w-6">
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-full">
                  <BsArrowRight className="text-2xl" />
                </span>
                <span className="absolute inset-0 flex items-center justify-center -translate-x-full transition-transform duration-300 group-hover:translate-x-0">
                  <BsArrowRight className="text-2xl" />
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
