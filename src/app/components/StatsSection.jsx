import Image from "next/image";
import React from "react";
import StatsBg from "../assets/Stats-bg.png";
import { FaHourglassEnd } from "react-icons/fa";
import { FaRegFileLines } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";
import { FaCodeBranch } from "react-icons/fa6";
import StatCard from "./ui/StatCard";

export default function StatsSection() {
  const companyStats = [
    {
      icon: <FaHourglassEnd />,
      title: 10,
      symbol: "+",
      description:
        "With over 10 years of experience, we've refined our craft in lawn mowing.",
    },
    {
      icon: <FaRegFileLines />,
      title: 1200,
      symbol: "+",
      description:
        "We’ve proudly completed over 1,200 lawn and garden projects, each tailored.",
    },
    {
      icon: <MdPeopleAlt />,
      title: 98,
      symbol: "%",
      description:
        "With a 98% customer satisfaction rate, our clients trust us to deliver reliable",
    },
    {
      icon: <FaCodeBranch />,
      title: 50,
      symbol: "+",
      description:
        "Proudly serving 50+ communities across England — bringing expert lawn care",
    },
  ];
  return (
    <div className="relative">
      <Image src={StatsBg} alt="" className="h-300 laptop:h-147 object-cover" />
      
      <div className="max-w-300 mx-auto absolute inset-0 top-18  tablet:top-1/4 laptop:top-[35%] w-[95%] laptop:w-full">
        <div className="grid tablet:grid-cols-2 laptop:grid-cols-4 gap-4">
          {companyStats.map((stat, id) => (
            <StatCard key={id} stat={stat} />
          ))}
        </div>
      </div>
    </div>
  );
}
