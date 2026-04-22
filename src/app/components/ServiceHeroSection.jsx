import React from "react";
import * as motion from "motion/react-client";
import Navbar from "./Navbar";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export default function ServiceHeroSection() {
  return (
    <div className="h-screen bg-cover overflow-hidden bg-center relative">
      {/* Enter animation */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0, display: "none" }}
        transition={{
          delay: 0.3,
          duration: 0.9,
        }}
        className="absolute inset-0 bg-white/80 z-99"
      ></motion.div>

      {/* Hero Image */}
      <div className="absolute inset-0 bg-black/90">
        <div className="w-full h-full bg-service bg-cover bg-center animate-[slowZoom_7s_ease-in-out_infinite_alternate] opacity-80"></div>
      </div>

      <Navbar />

      <div className="absolute inset-0 flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col tablet:items-center px-5 sm:px-7.5"
        >
          <div>
            <h3 className="text-white mb-2 tablet:text-center">[Services]</h3>
            <h2 className="text-white text-[40px] tablet:text-[50px]/15 laptop:text-[60px]/18 font-medium max-w-180 laptop:max-w-200 tablet:text-center mb-2">
              Bringing Life to Lawns & Gardens,{" "}
              <span className="font-playfair-display">One Yard at a Time</span>
            </h2>
            <p className="text-white max-w-140  tablet:mx-auto tablet:text-center mb-4 text-[17px] laptop:text-lg">
              From routine lawn mowing to full garden makeovers, we offer a
              range of professional services
            </p>
          </div>
          <Link
            href={"/contact"}
            className="flex items-center gap-5 hover:bg-Mint hover:text-Primary bg-Primary py-2 pl-6 pr-2 rounded-full text-Mint group w-fit font-medium transition-all duration-300"
          >
            Contact Us
            <div className="relative w-11 h-11 group-hover:bg-Primary group-hover:text-Mint bg-Mint overflow-hidden rounded-full text-Primary text-2xl">
              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-6 group-hover:-translate-y-6">
                <GoArrowUpRight />
              </span>
              <span className="absolute inset-0 flex items-center justify-center -translate-x-6 translate-y-6 transition-transform duration-200 group-hover:translate-x-0 group-hover:translate-y-0">
                <GoArrowUpRight />
              </span>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
