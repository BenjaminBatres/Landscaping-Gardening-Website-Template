"use client";
import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { TfiClose } from "react-icons/tfi";

import NavLinks from "./NavLinks";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function Menu({ links }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)} className="pr-2 tablet:hidden">
        <IoIosMenu className="text-3xl text-black/70 cursor-pointer" />
      </button>
      <div
        className={`tablet:hidden fixed top-0 left-0 h-full w-[65%] sm:w-80 bg-AltPrimary transition-transform duration-400 z-99 ${isOpen ? "translate-x-0  delay-600" : "-translate-x-full delay-200"}`}
      >
        <div className="px-6">
          <div className="h-20 flex items-center justify-end">
            <TfiClose
              onClick={() => setIsOpen(false)}
              className="text-2xl cursor-pointer text-white"
            />
          </div>
          <ul className="flex flex-col gap-4">
            {links.map((link, id) => (
              <li key={id}>
                <NavLinks link={link} />
              </li>
            ))}
            <Link
              href={"/contact"}
              className="flex items-center gap-2 bg-Mint py-3 px-6 rounded-full w-fit text-Primary text-[15px] mt-2"
            >
              Get Started
              <BsArrowRight className="text-xl" />
            </Link>
          </ul>
        </div>
      </div>
      <div
        onClick={() => setIsOpen(false)}
        className={`tablet:hidden fixed inset-0 flex justify-center items-center bg-[#262825]/30 z-90 transition-all duration-700 ${isOpen ? "translate-x-0" : "-translate-x-full delay-500"}`}
      ></div>
    </>
  );
}
