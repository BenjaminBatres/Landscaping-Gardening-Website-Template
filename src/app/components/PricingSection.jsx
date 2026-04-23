"use client";
import React, { useEffect, useRef } from "react";
import { ImLeaf } from "react-icons/im";
import { BsFire } from "react-icons/bs";
import PricingPlan from "./ui/PricingPlan";
import * as motion from "motion/react-client";
import { useAnimation, useInView } from "motion/react";
import CustomPlan from "./ui/CustomPlan";

export default function PricingSection() {
  const pricingInfo = [
    {
      icon: <ImLeaf />,
      title: "Starter Plan",
      description: "Perfect for smaller gardens",
      price: "39",
      priceTextColor: "text-[#082228]",
      perks: [
        "Lawn mowing (up to 100 m²)",
        "Weed Control",
        "Edge trimming",
        "Flower Bed Care",
        "General garden tidy-up",
        "Priority Sheduling",
        "Grass clippings removal",
        "Basic spot treatment",
      ],
      hoverColor: "hover:bg-Mint hover:border-Mint",
    },
    {
      icon: <BsFire />,
      iconTextColor: "text-Primary",
      title: "Premium Plan",
      description: "Ideal for regular care & maintenance.",
      price: "59",
      priceTextColor: "text-white",
      perks: [
        "Lawn mowing (up to 200 m²)",
        "Weed Control",
        "Trimming & edging",
        "Assigned expert",
        "Light hedge maintenance",
        "Priority Sheduling",
        "Seasonal plant care",
        "Advanced spot treatment",
      ],
      popular: "Most Popular",
      iconBackgroundColor: "bg-Mint",
      color: "text-[#e9f0f3cc]",
      hoverColor: "hover:bg-[#082228] hover:text-Mint",
      hoverIconColor: "group-hover:text-Primary",
    },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <section className="py-20 px-5 tablet:px-7.5">
      <div className="max-w-247.5 laptop:max-w-300 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 75 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col laptop:items-center mb-8"
        >
          <h3 className="text-sm text-Primary py-1 px-3 border border-gray-300 w-fit rounded-full mb-3">
            Pricing
          </h3>
          <h2 className="text-[34px] tablet:text-[40px] lg:text-[52px]/15 mb-2 lg:mb-5 text-Primary max-w-lg font-semibold laptop:text-center">
            Affordable Lawn{" "}
            <span className="font-playfair-display">Care Plans</span>
          </h2>
          <p className="text-Primary max-w-150 laptop:text-center">
            Whether you need a one-time garden cleanup or regular lawn care, our
            pricing is clear, competitive, and designed to fit your needs.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 75 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex flex-col laptop:flex-row gap-5 mb-5">
            {pricingInfo.map((info, id) => (
              <PricingPlan key={id} info={info} />
            ))}
          </div>
          <CustomPlan title={"Need a Custom Plan"} />
        </motion.div>
      </div>
    </section>
  );
}
