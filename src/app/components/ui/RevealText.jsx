'use client';

import { motion } from 'framer-motion';

export default function RevealText({ text }) {
  const words = text.split(" ");

  return (
    <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-150px" }} // 👈 triggers slightly earlier
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.12, // 👈 controls delay between words
          },
        },
      }}
      className="flex flex-wrap gap-2"
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20, filter: 'blur(6px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
          className="inline-block text-[34px]/8 tablet:text-[40px]/10 laptop:text-[52px]/15 text-Primary font-medium"
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}