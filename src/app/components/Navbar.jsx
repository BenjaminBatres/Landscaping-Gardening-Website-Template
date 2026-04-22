"use client";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

import NavLinks from "./ui/NavLinks";
import Menu from "./ui/Menu";
import * as motion from "motion/react-client";
import { useScroll, useMotionValueEvent, useSpring } from "motion/react";

export default function Navbar() {
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
          className="hidden tablet:flex items-center gap-5 bg-Mint py-2 px-4 rounded-full text-Primary group"
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
        <Menu links={links} />
      </nav>
    </motion.header>
  );
}
