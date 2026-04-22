import React from "react";
import Navbar from "./Navbar";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Client1 from "../assets/Client-1.jpg";
import Client2 from "../assets/Client-2.jpg";
import Client3 from "../assets/Client-3.jpg";
import Client4 from "../assets/Client-4.jpg";
import Image from "next/image";
import * as motion from "motion/react-client";

export default function HeroSection() {
  const clients = [Client1, Client2, Client3, Client4];
  return (
    <div className="h-screen bg-cover bg-center relative overflow-hidden">
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
      <div className="absolute inset-0 bg-black/80">
        <div className="w-full h-full bg-hero bg-cover bg-center animate-[slowZoom_5s_ease-in-out_infinite_alternate] opacity-80"></div>
      </div>

      <Navbar />

      <div className="absolute sm:relative top-[20%] sm:top-1/4 tablet:top-[40%] max-w-310 mx-auto text-white flex flex-col tablet:flex-row justify-between tablet:items-end gap-4 sm:gap-8  px-5 sm:px-7.5">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 120 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h2 className="text-lg">[Lawn Moving]</h2>
            <h1 className="text-3xl sm:text-[44px] xl:text-7xl xl:leading-22 font-bold max-w-2xl mb-4">
              Bringing Life to Lawns &{" "}
              <span className="font-playfair-display">Gardens</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 120 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="max-w-2xl text-lg mb-6"
          >
            Expert Lawn Mowing & Gardening Services, Customized to Suit Your
            Property’s Unique Needs — Because Every Outdoor Space Deserves
            Expert Care.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 120 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Link
              href={"/contact"}
              className="flex items-center group gap-5 bg-Mint py-3 px-5 rounded-full text-Primary w-fit"
            >
              Contact Us
              <div className="h-8 w-12 rounded-full relative bg-white overflow-hidden text-lg">
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
          initial={{ opacity: 0, y: 120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="tablet:w-1/4"
        >
          <div className="backdrop-blur-2xl rounded-lg px-2 py-3 max-w-48 border border-white">
            <h3 className="text-[28px]">5k+</h3>
            <p className="mb-4">Satisfied Clients</p>
            <div className="flex ml-6 items-center">
              {clients.map((client, id) => (
                <Image
                  key={id}
                  src={client}
                  alt=""
                  width={200}
                  height={200}
                  className="w-12 h-12 object-cover rounded-full -ml-6 border border-white"
                />
              ))}
              <div className="flex items-center justify-center bg-white rounded-full text-xs h-12 w-12 text-black text-center -ml-6">
                4.5k more
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
