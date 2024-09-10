"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import localFont from "next/font/local";
import React from "react";

const myFont = localFont({ src: "./../app/fonts/Emilea.woff2" });

interface Props {
  className?: string;
}

export const MultipleModern: React.FC<Props> = ({ className }) => {
  const [key, setKey] = React.useState(0);
  React.useEffect(() => {
    setKey((prev) => prev + 1);
  }, []);
  return (
    <motion.div
      key={key}
      initial={{ backgroundColor: "#2C2D26" }}
      whileInView={{ backgroundColor: "#E9E9DB" }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className={cn("relative z-[-5]", className)}
    >
      <div className="w-[1300px] mx-auto pt-[60px]">
        <div className="flex items-center">
          <div className="pr-[139px] relative">
            <motion.img
              initial={{ x: 40, scale: 0, opacity: 0 }}
              whileInView={{ x: 0, scale: 1, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.9, delay: 0.7 }}
              viewport={{ amount: 0.8, once: true }}
              className=""
              src="/art9.png"
              alt="image"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.7 }}
              viewport={{ amount: 0.4, once: true }}
              className="absolute top-[310px] z-[-5] left-[210px] w-[454px] h-[216px] bg-[#B2A298] rounded-[454px/216px] rotate-[-49.7deg]"
            />
          </div>
          <div id="modern" className={`w-[533px]`}>
            <motion.h1
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                ease: "easeInOut",
              }}
              viewport={{
                amount: 0.2,
                once: true,
              }}
              className={`${myFont.className} text-[40px]`}
            >
              Multiple Modernisms in the Americas
            </motion.h1>
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                ease: "easeInOut",
              }}
              viewport={{
                amount: 0.2,
                once: true,
              }}
              className="pt-[39px] pb-[30px]"
            >
              For many years these works, along with other beloved paintings and
              sculptures, have been located in galleries 262–65 in the Rice
              Building. We in Arts of the Americas recently re-envisioned and
              reinstalled these galleries, seeking to present art of North
              America in a more lively and engaging manner.{" "}
            </motion.p>
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                ease: "easeInOut",
              }}
              viewport={{
                amount: 0.2,
                once: true,
              }}
              className=""
            >
              Our intention was to contextualize old favorites in new ways,
              introduce a greater variety of objects, and offer more complex and
              interesting narratives that highlight the true breadth and depth
              of our collection.
            </motion.p>
          </div>
        </div>
        <div className="flex items-center pl-[6%]">
          <div className={`w-[533px] pr-[139px] `}>
            <motion.h1
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                ease: "easeInOut",
              }}
              viewport={{
                amount: 0.2,
                once: true,
              }}
              className={`${myFont.className} text-[40px]`}
            >
              Multiple Modernisms in the Americas
            </motion.h1>
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                ease: "easeInOut",
              }}
              viewport={{
                amount: 0.2,
                once: true,
              }}
              className="pt-[39px] pb-[30px]"
            >
              For many years these works, along with other beloved paintings and
              sculptures, have been located in galleries 262–65 in the Rice
              Building. We in Arts of the Americas recently re-envisioned and
              reinstalled these galleries, seeking to present art of North
              America in a more lively and engaging manner.{" "}
            </motion.p>
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                ease: "easeInOut",
              }}
              viewport={{
                amount: 0.2,
                once: true,
              }}
              className=""
            >
              Our intention was to contextualize old favorites in new ways,
              introduce a greater variety of objects, and offer more complex and
              interesting narratives that highlight the true breadth and depth
              of our collection.
            </motion.p>
          </div>
          <div className="relative ">
            <motion.img
              initial={{ x: -50, y: -50, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 0.7,
                delay: 0.1,
              }}
              viewport={{
                amount: 0.5,
                once: true,
              }}
              className=""
              src="/art7.png"
              alt="image"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.7, delay: 0.1 }}
              viewport={{ amount: 0.4, once: true }}
              className="absolute top-[70px] z-[-5] left-[-80px] w-[521px] h-[272px] border border-red-800 rounded-[521px/272px] rotate-[-49.7deg]"
            />
            <motion.img
              initial={{ x: -50, y: -50, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 0.7,
                delay: 0.1,
              }}
              viewport={{
                amount: 0.5,
                once: true,
              }}
              height={196}
              className="absolute top-[250px] left-[350px]"
              src="/art8.png"
              alt="image"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.7, delay: 0.1 }}
              viewport={{ amount: 0.4, once: true }}
              className="absolute top-[140px] z-[-5] left-[135px] w-[521px] h-[272px] border border-red-800 rounded-[521px/272px] rotate-[49.7deg]"
            />
            <div className="h-[200px]"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
