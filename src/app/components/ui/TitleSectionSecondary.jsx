import * as motion from "motion/react-client";
import React from "react";

export default function TitleSectionSecondary({
  title,
  subtitle,
  italic,
  description,
  color,
  custom,
  customPara
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <h3 className={`${color ? color : 'text-Primary'} font-medium mb-4`}>[{title}]</h3>
      <h2 className={`${custom ? custom : 'text-Primary text-[34px]/10 tablet:text-[40px]/12 laptop:text-[52px]/15 font-medium'} mb-4`} >
        {subtitle} <span className="font-playfair-display">{italic}</span>
      </h2>
      <p className={`${customPara ?  customPara : "text-AltPrimary" } mb-8`}>{description}</p>
    </motion.div>
  );
}
