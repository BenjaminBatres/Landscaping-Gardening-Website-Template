"use client";
import React from "react";
import ContactBg from "../assets/Contact-bg.png";
import ContactForm from "./ContactForm";
import Image from "next/image";
import * as motion from "motion/react-client";

export default function ContactSection() {
  return (
    <section className="pt-10 relative">
      <Image src={ContactBg} alt="" className="h-screen laptop::h-200 object-cover" />
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="absolute inset-0 top-[10%] laptop:top-[22%] w-[95%] laptop:w-full max-w-247.5 laptop:max-w-300 mx-auto"
      >
        <ContactForm imageHeight={"h-50 laptop:h-115"}/>
      </motion.div>
    </section>
  );
}
