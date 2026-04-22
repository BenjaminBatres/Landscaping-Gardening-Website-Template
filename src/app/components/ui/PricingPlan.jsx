import Link from "next/link";
import React from "react";
import { IoCheckmarkOutline } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";

export default function PricingPlan({ info }) {
  return (
    <div className="laptop:w-1/2 border border-gray-300 py-7.5 tablet:py-10 px-4 tablet:px-8 rounded-xl nth-[2]:bg-Primary">
      <div className="flex flex-col-reverse laptop:flex-row justify-between gap-5">
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
            className={`text-[27px] tablet:text-[32px] ${info.popular ? "text-white" : "text-Primary"} font-semibold`}
          >
            {info.title}
          </h3>
        </div>
        {info.popular && (
          <span className="text-[15px] font-medium text-Primary bg-white py-1 px-3 rounded-full h-fit w-fit">
            {info.popular}
          </span>
        )}
      </div>
      <p
        className={`text-lg laptop:text-xl mb-1 tablet:mb-6 ${info.color || "text-Primary"}`}
      >
        {info.description}
      </p>
      <h2
        className={`${info.color || "text-Primary"} text-2xl tablet:text-[28px] mb-4`}
      >
        <span
          className={`text-[34px] tablet:text-[52px] font-semibold ${info.priceTextColor}`}
        >
          ${info.price}
        </span>
        /visit
      </h2>
      <div className="flex flex-col tablet:flex-row flex-wrap justify-between mb-8 gap-2 tablet:gap-0">
        {info.perks.map((perk, id) => (
          <div
            key={id}
            className={`tablet:w-1/2 flex items-center gap-1 ${info.color || "text-Primary"}`}
          >
            <IoCheckmarkOutline />
            <span className="text-[15px] tablet:text-base">{perk}</span>
          </div>
        ))}
      </div>
      <Link
        href={"/contact"}
        className={`${info.iconBackgroundColor} ${info.hoverColor} transition-all duration-500 ease-in-out pl-6 pr-1 py-1 border group border-Primary rounded-full w-full flex items-center justify-between text-Primary font-medium `}
      >
        Get Started
        <div
          className={`overflow-hidden relative h-11 w-11 group-hover:${info.iconBackgroundColor} ${info.hoverIconColor} bg-Primary text-Mint rounded-full`}
        >
          <span className="absolute inset-0 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-6 group-hover:-translate-y-6">
            <FiArrowUpRight className="text-2xl" />
          </span>
          <span className="absolute inset-0 flex items-center justify-center -translate-x-6 translate-y-6 transition-transform duration-200 group-hover:translate-x-0 group-hover:translate-y-0">
            <FiArrowUpRight className="text-2xl" />
          </span>
        </div>
      </Link>
    </div>
  );
}
