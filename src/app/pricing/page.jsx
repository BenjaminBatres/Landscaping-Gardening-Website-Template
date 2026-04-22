"use client";
import React, { useEffect, useRef, useState } from "react";
import NavbarSecondary from "../components/NavbarSecondary";
import { BsFire } from "react-icons/bs";
import { ImLeaf } from "react-icons/im";
import { FaCrown } from "react-icons/fa";
import { PiArrowBendUpRightLight } from "react-icons/pi";
import PricingPlanSecondary from "../components/ui/PricingPlanSecondary";
import CustomPlan from "../components/ui/CustomPlan";
import GetInTouchSection from "../components/GetInTouchSection";
import Footer from "../components/Footer";
import * as motion from "motion/react-client";
import { useAnimation, useInView } from "motion/react";

export default function page() {
  const [monthlyPrice, setMonthlyPrice] = useState(true);
  const [active, setActive] = useState(0);
  const pricingInfo = [
    {
      icon: <ImLeaf />,
      title: "Starter Plan",
      description: "Perfect for smaller gardens",
      price: monthlyPrice ? "39" : "29",
      priceTextColor: "text-[#082228]",
      perks: [
        "Lawn mowing (up to 100 m²)",
        "Edge trimming",
        "General garden tidy-up",
        "Grass clippings removal",
      ],
      hoverColor: "hover:bg-Mint hover:border-Mint",
    },
    {
      icon: <BsFire />,
      iconTextColor: "text-Primary",
      title: "Premium Plan",
      description: "Ideal for regular care & maintenance.",
      price: monthlyPrice ? "59" : "49",
      priceTextColor: "text-white",
      perks: [
        "Lawn mowing (up to 200 m²)",
        "Trimming & edging",
        "Light hedge maintenance",
        "Seasonal plant care",
        "Weed control (basic)",
      ],
      popular: "Most Popular",
      iconBackgroundColor: "bg-Mint",
      color: "text-[#e9f0f3cc]",
      hoverColor: "hover:bg-[#082228] hover:text-Mint",
      hoverIconColor: "group-hover:text-Primary",
    },
    {
      icon: <FaCrown />,
      title: "Enterprise plan",
      description: "Larger spaces or high-maintenance",
      price: monthlyPrice ? "129" : "119",
      priceTextColor: "text-[#082228]",
      perks: [
        "Lawn mowing (up to 400 m²)",
        "Hedge trimming",
        "Weed prevention treatment",
        "Flower bed maintenance",
        "Monthly seasonal service",
      ],
      hoverColor: "hover:bg-Mint hover:border-Mint",
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

  useEffect(() => {
    if (isInView) {
      mainControls.start("show");
      console.log("run?");
    }
  }, [isInView]);
  return (
    <>
      <NavbarSecondary />
      <div className="pt-40 py-20 px-7.5 bg-[#f9f9f9]">
        <div className="max-w-155 tablet:max-w-247.5 laptop:max-w-300 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="mb-7.5 tablet:mb-20"
          >
            <h3 className="mb-2 tablet:text-center">[Pricing]</h3>
            <h2 className="text-AltPrimary text-[40px] tablet:text-[50px]/15 laptop:text-[72px]/20 font-semibold max-w-150 tablet:mx-auto tablet:text-center mb-2">
              Affordable Lawn{" "}
              <span className="font-playfair-display">Care Plans</span>
            </h2>
            <p className="max-w-190 tablet:mx-auto tablet:text-center mb-4 text-[17px] laptop:text-lg text-Primary">
              Whether you need a one-time garden cleanup or regular lawn care,
              our pricing is clear, competitive, and designed to fit your needs.
            </p>
          </motion.div>
          <div className="flex flex-col laptop:items-center gap-10">
            <motion.div
              initial={{ opacity: 0, y: 90 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="bg-white space-x-1.5 rounded-4xl p-1 relative w-fit"
            >
              <button
                onClick={() => {
                  (setMonthlyPrice(true), setActive(0));
                }}
                className={`py-3 px-6 font-medium cursor-pointer ${active === 0 ? "bg-AltPrimary text-white" : "bg-transparent text-Primary hover:bg-gray-200"} rounded-full transition-all duration-300`}
              >
                Monthly
              </button>
              <button
                onClick={() => {
                  (setMonthlyPrice(false), setActive(1));
                }}
                className={`p-3 px-6 font-medium cursor-pointer ${active === 1 ? "bg-AltPrimary text-white" : "bg-transparent text-Primary hover:bg-gray-200"} rounded-full transition-all duration-300`}
              >
                Yearly
              </button>
              <div className="absolute -right-7 top-0">
                <PiArrowBendUpRightLight className="text-[28px]" />
              </div>
              <div className="absolute top-0 -right-26 py-1.5 px-2.5 rounded-full bg-Mint text-sm">
                Save 20%
              </div>
            </motion.div>
            <motion.div
              ref={containerRef}
              initial="hidden"
              variants={container}
              animate={mainControls}
              className="grid tablet:grid-cols-2 laptop:grid-cols-3 gap-5 auto-rows-[531px] w-full"
            >
              {pricingInfo.map((info, id) => (
                <PricingPlanSecondary info={info} key={id} />
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 110 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="w-full"
            >
              <CustomPlan title="Need a custom plan for your outdoor space" />
            </motion.div>
          </div>
        </div>
      </div>
      <GetInTouchSection />
      <Footer />
    </>
  );
}
