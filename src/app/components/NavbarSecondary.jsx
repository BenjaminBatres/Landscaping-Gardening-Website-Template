"use client";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { GoArrowUpRight } from "react-icons/go";

import NavLinks from "./ui/NavLinks";
import Menu from "./ui/Menu";
import * as motion from "motion/react-client";
import { useScroll, useMotionValueEvent, useSpring } from "motion/react";

export default function NavbarSecondary() {
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
  ];
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (current > previous && current > 300) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      animate={{
        y: hidden ? -140 : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 w-full z-10 py-4 px-5 tablet:px-0"
    >
      <nav className="flex justify-between items-center max-w-300 mx-auto p-2 bg-white rounded-full shadow-lg">
        <Link href={"/"}>
          <Image
            loading="eager"
            src={Logo}
            alt="logo"
            className="w-45 sm:w-55 tablet:w-60 99 "
          />
        </Link>
        <ul className="hidden tablet:flex gap-8">
          {links.map((link, id) => (
            <NavLinks key={id} link={link} />
          ))}
        </ul>
        <Link
          href={"/contact"}
          className="hidden tablet:flex items-center gap-5 bg-White-300 py-2 pl-6 pr-2 rounded-full text-Primary group"
        >
          Get Started
          <div className="relative w-11 h-11 bg-Primary overflow-hidden rounded-full text-Mint text-2xl">
            <span className="absolute inset-0 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-6 group-hover:-translate-y-6">
              <GoArrowUpRight />
            </span>
            <span className="absolute inset-0 flex items-center justify-center -translate-x-6 translate-y-6 transition-transform duration-200 group-hover:translate-x-0 group-hover:translate-y-0">
              <GoArrowUpRight />
            </span>
          </div>
        </Link>

        <Menu links={links} />
      </nav>
    </motion.header>
  );
}
