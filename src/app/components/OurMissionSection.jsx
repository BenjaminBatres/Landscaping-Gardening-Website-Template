import React from "react";
import PlantImg from "../assets/Plant-img.jpg";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import * as motion from "motion/react-client";
import TitleSectionSecondary from "./ui/TitleSectionSecondary";

export default function OurMissionSection() {
  const missionInfo = [
    "Providing dependable, high-quality lawn and garden care.",
    "Treating every outdoor space with precision and pride.",
    "Building trust through eco-friendly, honest service.",
  ];
  return (
    <section className="py-20 px-5 sm:px-7.5 bg-White-300">
      <div className="max-w-300 mx-auto flex flex-col laptop:flex-row gap-15">
        <div className="laptop:w-[65%]">
          <TitleSectionSecondary
            title="Our Mission"
            subtitle="Growing Beauty Through Honest"
            italic="Reliable Care"
            description="To provide dependable, eco-conscious lawn and garden care that enhances curb appeal, supports healthy growth, and gives our clients more time."
          />
          <div className="mb-8">
            {missionInfo.map((info, id) => (
              <div
                key={id}
                className="py-4 border-gray-300 border-t even:border-t last:border-b text-AltPrimary text-[15px] tablet:text-base font-medium"
              >
                {info}
              </div>
            ))}
          </div>
          <Link
            href={"/pricing"}
            className="py-2 pl-6 pr-2 rounded-full bg-Mint hover:bg-Primary hover:text-Mint transition-all duration-300 flex items-center gap-6 w-fit group font-medium text-[15px] laptop:text-base"
          >
            Learn More
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
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="laptop:w-1/2"
        >
          <figure className="h-95 tablet:h-135">
            <Image
              loading="eager"
              src={PlantImg}
              alt=""
              className="h-full w-full object-cover object-[50%_35%] rounded-lg"
            />
          </figure>
        </motion.div>
      </div>
    </section>
  );
}
