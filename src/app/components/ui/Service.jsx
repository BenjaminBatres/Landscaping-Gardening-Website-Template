import Image from "next/image";
import React, { useState } from "react";
import { IoCheckmark } from "react-icons/io5";
import Jamie from "../../assets/Leslie-Alexander.png";
import HightlightsSection from "./HightlightsSection";

export default function Service({ service, id }) {
  const [loaded, setLoaded] = useState(false);

  
  return (
    <>
      {service.id === id && (
        <div className="bg-linear-to-b from-White-300">
          <div className="px-5 sm:px-7.5">
            <div className="max-w-300 mx-auto mb-8">
              <div className="flex flex-col laptop:flex-row justify-between gap-2 laptop:gap-20 laptop:items-end">
                <h2 className="leading-[1.2em] -tracking-[0.02em] text-[44px] tablet:text-[58px] laptop:text-7xl text-Primary font-semibold max-w-140">
                  {service.title}
                </h2>
                <div>
                  <p className="text-Primary text-[17px] laptop:text-lg max-w-125 laptop:max-w-170 ">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <figure className="h-125 relative">
            {!loaded && <div className="skeleton"></div>}
            <Image
            onLoad={() => setLoaded(true)}
              src={service.image}
              alt=""
              className="w-full h-full object-cover "
            />
          </figure>
          <div className="py-7.5 tablet:py-20 laptop:py-25 px-5 sm:px-7.5 bg-white">
            <div className="max-w-300 mx-auto flex flex-col laptop:flex-row gap-7.5 laptop:gap-15 relative">
              <div className="laptop:w-[40%]">
                <div className="sticky top-30">
                  <h2 className="text-Primary text-[21px] laptop:text-2xl font-medium mb-4">
                    What's Included
                  </h2>
                  <div className="grid tablet:grid-cols-2 gap-2.5 laptop:gap-4 laptop:grid-cols-1">
                    {service.included.map((included, id) => (
                      <div
                        key={id}
                        className="flex items-center gap-2 bg-White-300 rounded-lg p-2"
                      >
                        <div className="h-5 w-5 bg-AltPrimary rounded-full flex justify-center items-center">
                          <IoCheckmark className="text-Mint text-sm" />
                        </div>
                        <span className="text-Primary font-medium text-[15px] laptop:text-[17px]">
                          {included}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="laptop:w-[65%]">
                <h2 className="text-[29px] laptop:text-[32px] text-AltPrimary mb-2 font-medium">
                  {service.paragraphTitle}
                </h2>
                <div className="mb-7.5">
                  {service.paragraph.map((para, id) => (
                    <p
                      key={id}
                      className="text-Primary text-[15px] laptop:text-base mb-3"
                    >
                      {para}
                    </p>
                  ))}
                </div>

                <HightlightsSection
                  service={service.highlights}
                  sectionTitle={"Client Benefit Highlights"}
                />

                <div className="border-l-3 border-Primary pl-5 gap-5 mt-10 mb-8">
                  <p className="text-Primary text-xl tablet:text-[22px] laptop:text-2xl font-playfair-display font-semibold mb-8">
                    “{service.quote}”
                  </p>
                  <div className="flex items-center gap-2">
                    <Image
                      src={Jamie}
                      alt=""
                      className="rounded-full w-12 h-12 object-cover"
                    />
                    <div>
                      <h4 className="text-AltPrimary text-lg tablet:text-xl font-medium">
                        Jamie Rowe
                      </h4>
                      <p className="text-Primary text-sm">
                        Lawn care Specialist
                      </p>
                    </div>
                  </div>
                </div>
                <HightlightsSection
                  service={service.generals}
                  sectionTitle={"General Cleanup Tips (All Year Round)"}
                />
                <div className="grid tablet:grid-cols-2 gap-2.5 mt-10">
                  {service.images.map((img, id) => (
                    <div
                      key={id}
                      className="tablet:nth-[1]:col-span-2 w-full h-75 tablet:h-full tablet:nth-[1]:h-100 relative"
                    >
                      {!loaded && <div className="skeleton rounded-md"></div>}
                      <Image
                      onLoad={() => setLoaded(true)}
                        src={img}
                        height={1000}
                        width={1000}
                        alt=""
                        className="object-cover h-full w-full rounded-xl"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
