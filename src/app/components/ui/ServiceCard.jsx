import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import * as motion from "motion/react-client";

export default function ServiceCard({ service, item }) {
  return (
    <motion.div variants={item}>
      <Link href={`/services/${service.id}`} className="group">
        <figure className="aspect-3/2 tablet:aspect-[0.96904/1] w-full overflow-hidden rounded-lg mb-4">
          <Image
            loading="eager"
            height={1000}
            width={1000}
            src={service.image}
            alt=""
            className="h-full w-full object-cover rounded-lg laptop:group-hover:scale-110 transition-all duration-600 ease-in-out"
          />
        </figure>
        <h2 className="text-AltPrimary text-lg laptop:text-xl font-semibold mb-2">
          {service.title}
        </h2>
        <p className="text-Primary text-[15px] laptop:text-base mb-5">
          {service.description}
        </p>
        <button className="flex items-center gap-2 border border-AltPrimary bg-AltPrimary laptop:bg-transparent group-hover:bg-AltPrimary group-hover:text-Mint transition-all duration-300 py-1 pl-6 pr-1 rounded-full text-Mint laptop:text-Primary group w-fit font-medium cursor-pointer">
          View Details
          <div className="relative w-11 h-11 bg-Mint laptop:bg-Primary group-hover:bg-Mint group-hover:text-AltPrimary overflow-hidden rounded-full text-Primary laptop:text-Mint text-2xl">
            <span className="absolute inset-0 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-6 group-hover:-translate-y-6">
              <GoArrowUpRight />
            </span>
            <span className="absolute inset-0 flex items-center justify-center -translate-x-6 translate-y-6 transition-transform duration-200 group-hover:translate-x-0 group-hover:translate-y-0">
              <GoArrowUpRight />
            </span>
          </div>
        </button>
      </Link>
    </motion.div>
  );
}
