import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import ContactImg from "../assets/Contact-img.jpg";
import Image from "next/image";

export default function ContactForm({imageHeight}) {
  const inputFields = [
    {
      label: "Full Name*",
      type: "text",
      id: "name",
      stateKey: "name",
    },
    {
      label: "Email Address*",
      type: "text",
      id: "email",
      stateKey: "email",
    },
    {
      label: "Phone Number*",
      type: "number",
      id: "subject",
      stateKey: "subject",
    },
    {
      label: "Your Message",
      type: "textarea",
      id: "Message",
      stateKey: "Message",
    },
  ];
  return (
    <div className="flex flex-col laptop:flex-row gap-7.5 laptop:gap-15 rounded-xl bg-white p-5 tablet:p-10 ">
      <div className="laptop:w-[45%]">
        <figure className={imageHeight}>
          <Image
            src={ContactImg}
            loading="eager"
            alt=""
            height={1000}
            width={1000}
            className="w-full h-full object-cover object-top rounded-xl"
          />
        </figure>
      </div>
      <div className="laptop:w-[55%] space-y-5">
        {inputFields.map((field, id) => (
          <div key={id}>
            {field.type === "textarea" ? (
              <textarea
                placeholder={field.label}
                className="w-full h-35 resize-y border-b border-[#e3e3e3] placeholder:text-AltPrimary font-light outline-0 py-4 r-4"
              ></textarea>
            ) : field.type === "number" ? (
              <div className="flex flex-col tablet:flex-row gap-5">
                <div className="py-4 border-b border-[#e3e3e3] tablet:w-1/2">
                  <input
                    type="text"
                    placeholder={field.label}
                    className="font-light text-AltPrimary placeholder:text-AltPrimary placeholder:font-light outline-0 w-full"
                  />
                </div>
                <div className="border-b pt-4 border-[#e3e3e3] tablet:w-1/2">
                  <select className="outline-0 pb-4 max-w-200 w-full text-Primary font-light">
                    <option disabled>Service Interested In</option>
                    <option>Fertilization & Weed Control</option>
                    <option>Seasonal Cleanups</option>
                    <option>Garden Design & Planting</option>
                    <option>Hedge Trimming & Shaping</option>
                    <option>Lawn Mowing</option>
                    <option>Hedge Trimming</option>
                  </select>
                </div>
              </div>
            ) : (
              <div className="py-4 pr-4 border-b border-[#e3e3e3]">
                <input
                  type="text"
                  placeholder={field.label}
                  className="font-light text-AltPrimary placeholder:text-AltPrimary placeholder:font-light outline-0"
                />
              </div>
            )}
          </div>
        ))}
        <button className="flex items-center gap-6 text-Mint font-semibold bg-Primary py-1 pl-6 pr-1 group rounded-full w-fit">
          Send
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
        </button>
      </div>
    </div>
  );
}
