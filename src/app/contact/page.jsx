import React from "react";
import NavbarSecondary from "../components/NavbarSecondary";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import * as motion from "motion/react-client";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function page() {
  const contactInfo = [
    {
      icon: <AiOutlineMail />,
      title: "Email",
      description:
        "Have a question or need assistance? Reach out to us via email",
      contact: "hello@pentaclay.com",
    },
    {
      icon: <BsFillTelephoneFill />,
      title: "Call Us",
      description: "Get instant help from our team—no waiting, no hassle.",
      contact: "(123) 345 678",
    },
  ];
  return (
    <>
      <NavbarSecondary />
      <div className="pt-30 tablet:pt-40 pb-20 px-5 sm:px-7.5 bg-linear-to-b from-White-300 to-white ">
        <div className="max-w-300 mx-auto">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-AltPrimary text-[15px] tablet:text-base font-medium mb-2"
          >
            [Get In Touch]
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col laptop:flex-row justify-between laptop:items-end gap-2.5 laptop:gap-0 laptop:mb-12"
          >
            <div className="laptop:w-[70%]">
              <h2 className="text-[44px]/14 tablet:text-[60px]/15 laptop:text-[72px]/20 -tracking-[0.02em] laptop:tracking-normal text-AltPrimary font-semibold ">
                Reach Out & Let Nature’s{" "}
                <span className="font-playfair-display">Revival Begin</span>
              </h2>
            </div>

            <div className="max-w-90 tablet:max-w-full tablet:w-[30%]">
              <p className="text-Primary text-[17px] laptop:text-lg">
                Have a question, need a quote, or want to schedule a visit?
                Reach out — we’d love to hear from you.
              </p>
            </div>
          </motion.div>

          <ContactForm />
        </div>
      </div>
      <div className="py-20 px-5 sm:px-7.5">
        <div className="max-w-300 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-[40px] text-AltPrimary font-medium">
              Need More <span className="font-playfair-display">Help?</span>
            </h2>
            <p className="text-Primary">
              Reach out to our support team anytime — we're just a message away.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid tablet:grid-cols-2 gap-4 tablet:gap-6"
          >
            {contactInfo.map((info, id) => (
              <div key={id} className="bg-White-300 rounded-[20px] py-7 px-6">
                <div className="flex justify-center items-center h-15 w-15 rounded-full bg-white mb-6">
                  <div className="text-3xl text-AltPrimary">{info.icon}</div>
                </div>
                <h2 className="text-[21px] laptop:text-2xl text-AltPrimary font-semibold mb-3">
                  {info.title}
                </h2>
                <p className="text-Primary text-[15px] laptop:text-base laptop:max-w-70 mb-8">
                  {info.description}
                </p>
                <h3 className="text-[21px] laptop:text-2xl text-Primary font-semibold">
                  {info.contact}
                </h3>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
