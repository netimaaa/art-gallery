"use client";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import React from "react";
import { Container } from "./container";
import { motion } from "framer-motion";

const myFont = localFont({ src: "./../app/fonts/Emilea.woff2" });

interface Props {
  className?: string;
}

export const Ampart: React.FC<Props> = ({ className }) => {
  const [key, setKey] = React.useState(0);
  React.useEffect(() => {
    setKey((prev) => prev + 1);
  }, []);
  return (
    <motion.div
      key={key}
      initial={{
        backgroundColor: "#E9E9DB",
      }}
      whileInView={{
        backgroundColor: "#A54C48",
      }}
      transition={{
        ease: "easeInOut",
        duration: 1,
      }}
      viewport={{
        amount: 0.25,
        once: true,
      }}
      className="bg-[#A54C48] relative z-[-10] w-full"
    >
      <div className="mx-auto w-[1500px] relative">
        <div
          className={`${myFont.className} text-[#E9E9DB]/[0.05] leading-[300px] pt-8 pb-12 text-[290px] user select-none`}
        >
          AMPART
        </div>
      </div>
      <div className={cn("relative w-[1800px] mx-auto", className)}>
        <div className="">
          <div className="flex justify-evenly">
            <div className="relative">
              <motion.img
                initial={{ x: -50, y: -50, scale: 0, opacity: 0 }}
                whileInView={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.7, delay: 0.1 }}
                viewport={{ amount: 0.4, once: true }}
                className="h-[389px] w-[389px]"
                src="/art10.png"
                alt=""
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.7, delay: 0.1 }}
                viewport={{ amount: 0.4, once: true }}
                className="absolute top-[140px] z-[-5] left-[-155px] w-[521px] h-[272px] border border-white rounded-[521px/272px] rotate-[49.7deg]"
              />
              <div
                className={`${myFont.className} flex justify-between text-white pt-[22px]`}
              >
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.7, delay: 0.1 }}
                  viewport={{ amount: 0.4, once: true }}
                >
                  1857
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.7, delay: 0.1 }}
                  viewport={{ amount: 0.4, once: true }}
                >
                  View of Cotopaxi
                </motion.p>
              </div>
            </div>
            <div>
              <motion.img
                initial={{ padding: 0, y: 50, opacity: 0 }}
                whileInView={{ padding: 16, y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.7, delay: 0.1 }}
                viewport={{ amount: 0.4, once: true }}
                className="h-[517px] w-[419px] mt-[80px] border border-white p-4 rounded-[419px/517px]"
                src="/art11.png"
                alt=""
              />
              <div
                className={`${myFont.className} flex justify-end text-white pt-[22px] relative`}
              >
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.7, delay: 0.1 }}
                  viewport={{ amount: 0.4, once: true }}
                  className="absolute top-[-30px] left-0"
                >
                  1823
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.7, delay: 0.1 }}
                  viewport={{ amount: 0.4, once: true }}
                >
                  Amédée-David
                </motion.p>
              </div>
            </div>
            <div>
              <motion.img
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeInOut", duration: 0.7, delay: 0.1 }}
                viewport={{ amount: 0.4, once: true }}
                className="h-[458px] w-[335px] border border-white rounded-t-[200px] p-4"
                src="/art12.png"
                alt=""
              />
              <div
                className={`${myFont.className} flex justify-between text-white pt-[22px]`}
              >
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.7, delay: 0.1 }}
                  viewport={{ amount: 0.4, once: true }}
                >
                  1834
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.7, delay: 0.1 }}
                  viewport={{ amount: 0.4, once: true }}
                >
                  The Interior of the Palm House
                </motion.p>
              </div>
            </div>
          </div>
          <div className="flex justify-between pt-[100px]">
            <div className={`${myFont.className} text-[#E9E9DB] ml-[11.5%]`}>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.7, delay: 0.8 }}
                viewport={{ amount: 0.4, once: true }}
                className="text-[60px] leading-[60px] w-[286px]"
              >
                Celebrate whit us
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeInOut", duration: 0.7, delay: 0.1 }}
                viewport={{ amount: 0.8, once: true }}
                className="flex"
              >
                <div className="text-[180px] leading-[160px]">70</div>
                <div className="text-[80px] pt-12">Years</div>
              </motion.div>
            </div>
            <div className="relative mr-[11.5%]">
              <motion.img
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  ease: "easeInOut",
                  delay: 0.2,
                  duration: 0.7,
                }}
                viewport={{
                  amount: 0.4,
                  once: true,
                }}
                src="/art13.png"
                className="mr-[11.5%] w-[315px] h-[203px]"
                alt=""
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.7, delay: 0.1 }}
                viewport={{ amount: 0.4, once: true }}
                className="absolute top-[50px] z-[-5] left-[-25px] w-[289px] h-[122px] border border-white rounded-[289px/122px] rotate-[38.88deg]"
              />
              <div
                className={`${myFont.className} flex justify-between text-white pt-[22px]`}
              >
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.7, delay: 0.1 }}
                  viewport={{ amount: 0.4, once: true }}
                >
                  1885
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.7, delay: 0.1 }}
                  viewport={{ amount: 0.4, once: true }}
                >
                  Magnolias
                </motion.p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[100px]"></div>
      </div>
    </motion.div>
  );
};
