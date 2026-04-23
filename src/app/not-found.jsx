import React from "react";
import Navbar from "./components/Navbar";
import NotFoundImg from "./assets/undraw_quiet-street_v45k.svg";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export default function NotFound() {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-5">
        <div className="relative mb-4">
          <Image
            src={NotFoundImg}
            loading="eager"
            alt="not found"
            className="w-220"
          />
          <h1 className="absolute inset-0 flex justify-center items-center text-[100px] sm:text-[120px] md:text-[160px] font-bold text-AltPrimary">
            404
          </h1>
        </div>
        <h3 className="text-[26px] tablet:text-4xl laptop:text-[40px] text-AltPrimary font-semibold text-center mb-2">
          Oops! No page Found
        </h3>
        <p className="text-[17px] laptop:text-lg text-Primary text-center mb-8">
          The page you are looking for is not available or doesn’t belong to
          this website!
        </p>
        <Link
          href={"/"}
          className="flex items-center gap-5 bg-AltPrimary tablet:hover:bg-Mint tablet:hover:text-AltPrimary transition-all duration-300 py-1 pl-6 pr-1 rounded-full text-Mint group w-fit font-medium mb-12"
        >
          Back to Home Now
          <div className="relative w-12 h-12 bg-Mint tablet:group-hover:bg-AltPrimary tablet:group-hover:text-Mint overflow-hidden rounded-full text-Primary text-2xl">
            <span className="absolute inset-0 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-6 group-hover:-translate-y-6">
              <GoArrowUpRight />
            </span>
            <span className="absolute inset-0 flex items-center justify-center -translate-x-6 translate-y-6 transition-transform duration-200 group-hover:translate-x-0 group-hover:translate-y-0">
              <GoArrowUpRight />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
