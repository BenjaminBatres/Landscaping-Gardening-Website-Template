import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

export default function CustomPlan({title}) {
  return (
    <div className="bg-Mint w-full rounded-lg p-5 tablet:p-10 flex flex-col laptop:flex-row justify-between laptop:items-center gap-7.5 laptop:gap-y-0">
      <div>
        <h2 className="text-[30px] tablet:text-[34px] laptop:text-[40px] font-semibold text-AltPrimary mb-1 max-w-xl">
          {title}
        </h2>
        <p className="text-Primary max-w-130 text-[17px] laptop:text-lg">
          We’ll tailor our services to match your garden’s size, style, and
          needs — let’s build the perfect plan for you.
        </p>
      </div>
      <div>
        <Link
          href={"/contact"}
          className="flex items-center gap-6 text-Mint font-semibold bg-Primary py-1 pl-6 pr-1 group rounded-full w-fit"
        >
          Contact Us
          <div
            className={`h-12 w-12 relative overflow-hidden flex justify-center items-center bg-Mint text-Primary rounded-full`}
          >
            <span className="absolute inset-0 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-6 group-hover:-translate-y-6">
              <FiArrowUpRight className="text-xl" />
            </span>
            <span className="absolute inset-0 flex items-center justify-center -translate-x-6 translate-y-6 transition-transform duration-200 group-hover:translate-x-0 group-hover:translate-y-0">
              <FiArrowUpRight className="text-xl" />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
