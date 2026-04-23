"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { RiTiktokLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

import * as motion from "motion/react-client";
import { useAnimation, useInView } from "motion/react";

export default function Footer() {
  const links = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about-us",
      name: "About Us",
    },
    {
      path: "/services",
      name: "Services",
    },
    {
      path: "/pricing",
      name: "Pricing",
    },
    {
      path: "/contact",
      name: "Contact Us",
    },
  ];

  const socials = [
    <FaInstagram />,
    <CiFacebook />,
    <RiTiktokLine />,
    <FaXTwitter />,
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
    <footer className="py-20 px-5 sm:px-7.5 bg-Primary">
      <div className="max-w-247.5 laptop:max-w-300 mx-auto">
        <div className="flex flex-col laptop:flex-row gap-10 justify-between mb-10">
          <div className="laptop:w-1/3">
            <p className="text-Secondary max-w-xl">
              We’re dedicated to making your outdoors look its best. From
              regular lawn mowing to complete garden care, our experienced team
              delivers reliable service with a personal touch.
            </p>
          </div>
          <div className="laptop:w-1/2">
            <ul className="flex flex-col tablet:flex-row laptop:justify-end gap-8 mb-8">
              {links.map((link, id) => (
                <li key={id}>
                  <Link
                    href={link.path}
                    className="text-Secondary text-[17px] tablet:text-lg"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex laptop:justify-end gap-2">
              {socials.map((social, id) => (
                <div
                  key={id}
                  className="h-8 w-8 flex justify-center items-center bg-Mint rounded-full text-Primary text-lg"
                >
                  {social}
                </div>
              ))}
            </div>
          </div>
        </div>
        <motion.h2
          ref={containerRef}
          initial="hidden"
          animate={mainControls}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="uppercase bg-linear-to-b from-stone-500/10 to-Secondary bg-clip-text text-transparent text-5xl sm:text-7xl lg:text-[80px] xl:text-8xl mb-4"
        >
          Everygreen lawn care
        </motion.h2>
        <div className="sm:float-right text-Secondary">
          © Copywrite {new Date().getFullYear()} Batreswebdesign. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
