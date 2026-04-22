import * as motion from "motion/react-client";
import React, { useRef } from "react";
import { RiHeart2Fill } from "react-icons/ri";
import { PiPlantFill } from "react-icons/pi";
import { GiWheelbarrow } from "react-icons/gi";
import HowWeWorkImg from "../assets/HowWeWork-img.jpg";
import Image from "next/image";
import Counter from "./ui/Counter";

export default function HowWeWorkSection() {
  const howWeWorkInfo = [
    {
      icon: <RiHeart2Fill />,
      title: "Consult & Assess",
      descritpion:
        "We start by understanding your garden’s needs through a free consultation or site visit.",
    },
    {
      icon: <PiPlantFill />,
      title: "Plan & Schedule",
      descritpion:
        "Based on your goals, we create a tailored service plan and book a time that fits your routine.",
    },
    {
      icon: <GiWheelbarrow />,
      title: "Deliver & Maintain",
      descritpion:
        "Our expert team gets to work — providing reliable, high-quality care to keep your outdoor space thriving.",
    },
  ];

  const ref = useRef(null);
  return (
    <div className="py-20 px-5 sm:px-7.5 bg-White-300">
      <div className="max-w-300 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col laptop:flex-row justify-between laptop:items-center gap-2.5 laptop:gap-0 mb-12"
        >
          <div className="laptop:w-1/2">
            <h3 className="text-AltPrimary text-[15px] tablet:text-base font-medium mb-2">
              [How We Work]
            </h3>

            <h2 className="text-[44px]/14 tablet:text-[40px] laptop:text-[52px] -tracking-[0.02em] laptop:tracking-normal max-w-150 laptop:max-w-full text-AltPrimary font-semibold ">
              How We Bring Your{" "}
              <span className="font-playfair-display">Garden to Life</span>
            </h2>
          </div>

          <div className="max-w-160 laptop:max-w-full laptop:w-[45%]">
            <p className="text-Primary text-[15px] laptop:text-base">
              We make garden care simple, efficient, and stress-free from start
              to finish. Professional results through a proven process.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col-reverse items-center tablet:flex-row gap-15">
          <div className="space-y-6 tablet:w-1/2">
            {howWeWorkInfo.map((info, id) => (
              <div key={id} className="border-b border-[#e3e3e3]">
                <div className="flex items-center gap-2 mb-5">
                  <div className="flex justify-center items-center h-8 laptop:h-10 w-8 laptop:w-10 bg-AltPrimary rounded-full">
                    <div className="text-Mint text-xl laptop:text-2xl">
                      {info.icon}
                    </div>
                  </div>
                  <h2 className="text-[21px] laptop:text-2xl text-AltPrimary font-semibold">
                    {info.title}
                  </h2>
                </div>
                <p className="text-Primary text-[17px] laptop:text-lg mb-6">
                  {info.descritpion}
                </p>
              </div>
            ))}
          </div>

          <div className="tablet:w-[45%] max-w-125.5 h-112 relative">
            <Image
              src={HowWeWorkImg}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute top-[60%] laptop:top-[63%] inset-0 ">
              <div className="bg-AltPrimary py-5 px-4 w-[90%] rounded-lg max-w-200 mx-auto">
                <h2 className="text-Mint text-[40px] font-medium">
                  <Counter max={1200} ref={ref} symbol={"+"} />
                </h2>
                <p className="text-Secondary text-[13px] laptop:text-sm">
                  We’ve proudly completed over 1,200 lawn and garden projects,
                  each tailored to meet the unique needs of our clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
