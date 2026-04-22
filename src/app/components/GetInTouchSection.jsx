import React from "react";
import GetInTouchBg from "../assets/GetInTouch-bg.jpg";
import FlowersGrass from "../assets/Flowers-Grass.png";
import Image from "next/image";
import TitleSectionSecondary from "./ui/TitleSectionSecondary";
import { PiHourglassLowFill } from "react-icons/pi";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import * as motion from "motion/react-client";

export default function GetInTouchSection() {
  return (
    <section className="relative">
      <figure className="relative h-180  sm:h-160 laptop:h-170">
        <Image src={GetInTouchBg} alt="" className="h-full object-cover" />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 top-[8%] laptop:top-[30%] max-w-300 mx-auto w-full px-5 sm:px-7.5 xl:px-0">
          <div className="flex flex-col laptop:flex-row justify-between laptop:items-end gap-8 laptop:gap-10">
            <div className="laptop:w-[45%]">
              <TitleSectionSecondary
                title="Get in Touch"
                subtitle="Ready to Get"
                italic={"Started"}
                color={"text-white"}
                custom="text-white text-[50px]/15 laptop:text-7xl font-semibold"
                customPara={"max-w-xl laptop:max-w-120 text-white text-lg"}
                description={
                  "Let our expert team handle the hard work while you enjoy a lush, beautiful yard. Get in touch today for a free quote!"
                }
              />
              <Link
                href={"/contact"}
                className="flex items-center gap-5 bg-Mint py-2 pl-6 pr-2 rounded-full text-Primary group w-fit font-medium"
              >
                Contact Us
                <div className="relative w-11 h-11 bg-Primary overflow-hidden rounded-full text-Mint text-2xl">
                  <span className="absolute inset-0 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-6 group-hover:-translate-y-6">
                    <GoArrowUpRight />
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center -translate-x-6 translate-y-6 transition-transform duration-200 group-hover:translate-x-0 group-hover:translate-y-0">
                    <GoArrowUpRight />
                  </span>
                </div>
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="p-3 rounded-lg bg-white tablet:w-fit flex flex-col tablet:flex-row gap-3">
                <Image
                  src={FlowersGrass}
                  alt=""
                  className="h-30 w-full tablet:w-39 rounded-lg
                 object-cover"
                />
                <div>
                  <div className="flex items-center tablet:items-start tablet:flex-col gap-2 tablet:gap-0">
                    <div className="h-10 w-10 flex justify-center items-center bg-Primary text-Mint rounded-full text-lg mb-2">
                      <PiHourglassLowFill />
                    </div>
                    <h2 className="text-AltPrimary font-medium text-[21px] tablet:text-2xl">
                      10+ Years
                    </h2>
                  </div>
                  <p className="text-xs tablet:text-sm tablet:max-w-50 text-Primary">
                    We’ve spent over a decade perfecting our lawn and garden
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </figure>
    </section>
  );
}
