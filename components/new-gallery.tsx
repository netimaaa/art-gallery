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

export const NewGallery: React.FC<Props> = ({ className }) => {
  return (
    <motion.div
      id="new-gallery"
      initial={{ backgroundColor: "#E9E9DB" }}
      whileInView={{ backgroundColor: "#2C2D26" }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className={cn("bg-[#2C2D26] relative h-[1050px]", className)}
    >
      <div className="mx-auto w-[1800px] relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          viewport={{
            once: true,
          }}
          className={`${myFont.className} absolute top-[-100px] text-[#E9E9DB]/[0.05] text-[280px]`}
        >
          New gallery
        </motion.div>
      </div>
      <Container className="w-[900px]">
        <div className="text-[87px] pt-[70px] text-[#E9E9DB] text-center pb-32">
          New Gallery
        </div>
        <div className="flex gap-[50px]">
          <div className="w-[296px] text-[#E9E9DB]">
            <motion.img
              initial={{ x: 190 }}
              whileInView={{ x: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 1,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              src="/art4.png"
              alt=""
            />
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 2,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              className="flex items-center justify-between font-medium py-[14px]"
            >
              <p>1631</p>
              <p>Rembrandt Harmensz. van Rijn</p>
            </motion.div>
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 2.1,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              className="text-lg font-bold pb-[14px]"
            >
              Old Man with a Gold Chain
            </motion.h2>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 2.2,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              className="text-sm font-medium"
            >
              This evocative character study is an early example of a type of
              subject that preoccupied the great Dutch master Rembrandt van Rijn
              throughout his long career. Although his large output included
              landscapes, genre paintings, and the occasional still life.
            </motion.p>
          </div>
          <div className="w-[296px] text-[#E9E9DB]">
            <motion.img
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.4,
                ease: "easeInOut",
                delay: 1.4,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              src="/art5.png"
              alt=""
            />
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 2,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              className="flex items-center justify-between font-medium py-[14px]"
            >
              <p>1887</p>
              <p>Vincent van Gogh</p>
            </motion.div>
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 2.1,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              className="text-lg font-bold pb-[14px]"
            >
              Self-portrait
            </motion.h2>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 2.2,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              className="text-sm font-medium"
            >
              In 1886 Vincent van Gogh left his native Holland and settled in
              Paris, where his beloved brother Theo was a dealer in paintings.
              Van Gogh created at least twenty-four self-portraits during his
              two-year stay in the energetic French capital.
            </motion.p>
          </div>
          <div className="w-[296px] text-[#E9E9DB]">
            <motion.img
              initial={{ x: -190 }}
              whileInView={{ x: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 1,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              src="/art6.png"
              alt=""
            />
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 2,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              className="flex items-center justify-between font-medium py-[14px]"
            >
              <p>1881</p>
              <p>Pierre-Auguste Renoir</p>
            </motion.div>
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 2.1,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              className="text-lg font-bold pb-[14px]"
            >
              Two Sisters (On the Terrace)
            </motion.h2>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 2.2,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              className="text-sm font-medium"
            >
              “He loves everything that is joyous, brilliant, and consoling in
              life,” an anonymous interviewer once wrote about Pierre-Auguste
              Renoir. This may explain why Two Sisters (On the Terrace) is one
              of the most popular paintings in the Art Institute.
            </motion.p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-[50px] relative">
          <motion.div
            className="absolute top-0 w-[243px] h-[82px] border rounded-[150px/50px]"
            initial={{ rotate: 0 }}
            animate={{
              rotate: [0, 30, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 30,
              delay: 3,
            }}
            exit={{ rotate: 0 }}
          />
          <motion.div
            className="absolute top-[-5px] w-[243px] h-[82px] border rounded-[150px/50px]"
            animate={{
              rotate: [0, -30, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 30,
              delay: 3,
            }}
          />
          <motion.button
            initial={{ y: 0 }}
            whileHover={{ y: -2 }}
            whileTap={{ y: [0, 3, 0] }}
            transition={{
              ease: "easeInOut",
              duration: 0.15,
            }}
            className={`${myFont.className} absolute top-[21px] translate-x-[-6px] text-[#E9E9DB] text-xl`}
          >
            All gallery
          </motion.button>
        </div>
      </Container>
    </motion.div>
  );
};
