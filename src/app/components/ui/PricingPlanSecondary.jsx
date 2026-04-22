import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { IoCheckmarkOutline } from "react-icons/io5";
import * as motion from "motion/react-client";

export default function PricingInfoSecondary({ info }) {
  const item = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        // delay: 0.3,
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.div  variants={item} className="bg-White-300 nth-[2]:bg-Primary py-10 px-8 rounded-xl shadow-[0_1px_12px_2px_rgba(0,0,0,0.06)] flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div
            className={`w-10 h-10 tablet:w-11 tablet:h-11 flex justify-center items-center ${info.iconBackgroundColor || "bg-Primary"} rounded-full`}
          >
            <div
              className={`${info.iconTextColor || "text-Mint"} p-2 rounded-full tablet:text-xl`}
            >
              {info.icon}
            </div>
          </div>
          <h3
            className={`text-[21px] laptop:text-2xl ${info.popular ? "text-white" : "text-Primary"} font-semibold`}
          >
            {info.title}
          </h3>
        </div>
        <p
          className={`text-[17px] laptop:text-lg mb-1 tablet:mb-7.5 ${info.color || "text-Primary"}`}
        >
          {info.description}
        </p>
        <h2
          className={`${info.color || "text-Primary"} text-2xl tablet:text-[28px] mb-7.5 `}
        >
          <span
            className={`text-[34px] tablet:text-[42px] laptop:text-[52px] font-semibold ${info.priceTextColor}`}
          >
            ${info.price}
          </span>
          <span className="text-lg laptop:text-xl">/visit</span>
        </h2>
        <div className="space-y-2.5">
          {info.perks.map((perk, id) => (
            <div
              key={id}
              className={`flex items-center gap-1 ${info.color || "text-Primary"}`}
            >
              <IoCheckmarkOutline />
              <span className="text-[15px] laptop:text-base">{perk}</span>
            </div>
          ))}
        </div>
      </div>
      <Link
        href={"/contact"}
        className={`${info.iconBackgroundColor} ${info.hoverColor} transition-all duration-500 ease-in-out pl-6 pr-1 py-1 border group border-Primary rounded-full w-full flex items-center justify-between text-Primary font-medium `}
      >
        Get Started
        <div
          className={`overflow-hidden relative h-12 w-12 group-hover:${info.iconBackgroundColor} ${info.hoverIconColor} bg-Primary text-Mint rounded-full`}
        >
          <span className="absolute inset-0 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-6 group-hover:-translate-y-6">
            <FiArrowUpRight className="text-2xl" />
          </span>
          <span className="absolute inset-0 flex items-center justify-center -translate-x-6 translate-y-6 transition-transform duration-200 group-hover:translate-x-0 group-hover:translate-y-0">
            <FiArrowUpRight className="text-2xl" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
