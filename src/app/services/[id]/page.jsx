"use client";
import NavbarSecondary from "@/app/components/NavbarSecondary";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import servicesInfo from "@/app/data/service-info";
import Service from "@/app/components/ui/Service";
import StatsSection from "@/app/components/StatsSection";
import HowWeWorkSection from "@/app/components/HowWeWorkSection";
import BrowseServicesSection from "@/app/components/BrowseServicesSection";
import GetInTouchSection from "@/app/components/GetInTouchSection";
import Footer from "@/app/components/Footer";
export default function page() {
  const { id } = useParams();

  return (
    <>
      <NavbarSecondary />
      <div className="pt-35 laptop:pt-40 bg-White-300">
        <div className="px-5 sm:px-7.5">
          <div className="max-w-300 mx-auto">
            <div className="flex gap-1 tablet:gap-4 items-center text-AltPrimary font-medium mb-2 laptop:mb-8 text-[15px] laptop:text-base ">
              <Link href={"/"}>Home</Link>
              <MdArrowForwardIos className="h-3 w-3" />
              <Link href={"/services"}>Services</Link>
              <MdArrowForwardIos className="h-3 w-3" />
              <div className="text-[#b9b9b8] line-clamp-1">
                {servicesInfo.map(
                  (service) => service.id === id && service.title,
                )}
              </div>
            </div>
          </div>
        </div>
        {servicesInfo.map((service) => (
          <Service key={service.id} id={id} service={service} />
        ))}
      </div>
      <StatsSection />
      <HowWeWorkSection />
      <BrowseServicesSection id={id} />
      <GetInTouchSection />
      <Footer />
    </>
  );
}
