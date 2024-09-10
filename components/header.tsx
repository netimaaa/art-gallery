"use client";
import React, { useEffect } from "react";
import { Nav } from "./nav";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  categories: string[];
}

export const Header: React.FC<Props> = ({ className, categories }) => {
  const ref = React.useRef(null);
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0 });
    }, 0);
  }, []);
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 9000);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className={cn("mb-[200px]", className)}>
      <motion.div
        ref={ref}
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 0, y: 1200 }}
        transition={{
          delay: 4.2,
          duration: 0.6,
          ease: "easeIn",
        }}
        className="w-full h-[1100px] absolute top-0 left-0 bg-[#E9E9DB] z-10"
      ></motion.div>
      <motion.div
        initial={{ x: 0, rotateX: 0, y: 0, scale: 1.15 }}
        animate={{ x: -630, rotate: -90, y: 40, scale: 1 }}
        transition={{
          delay: 3,
          duration: 0.7,
        }}
        className="flex absolute top-[5%] left-[37.5%] z-10"
      >
        <motion.div
          initial={{ y: "-200px", opacity: 0 }}
          animate={{ y: "0px", opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: 1.5,
            type: "spring",
          }}
          className=" text-[170px] font-medium pt-[22.5%]"
        >
          L
        </motion.div>
        <motion.div
          initial={{ y: "-200px", opacity: 0 }}
          animate={{ y: "0px", opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: 1.4,
            type: "spring",
          }}
          className=" text-[170px] font-medium pt-[22.5%]"
        >
          A
        </motion.div>
        <motion.div
          initial={{ y: "-200px", opacity: 0 }}
          animate={{ y: "0px", opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: 0.2,
            type: "spring",
            mass: 1.1,
          }}
          className=" text-[170px] font-medium pt-[22.5%]"
        >
          M
        </motion.div>
        <motion.div
          initial={{ y: "-200px", opacity: 0 }}
          animate={{ y: "0px", opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: 1.4,
            type: "spring",
          }}
          className=" text-[170px] font-medium pt-[22.5%]"
        >
          D
        </motion.div>
        <motion.div
          initial={{ y: "-200px", opacity: 0 }}
          animate={{ y: "0px", opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: 1.5,
            type: "spring",
          }}
          className=" text-[170px] font-medium pt-[22.5%]"
        >
          A
        </motion.div>
      </motion.div>

      <div className="h-fit flex items-center pt-[55px]">
        <div className="text-[170px] font-medium -rotate-90 uppercase opacity-0">
          lamda
        </div>
        <div id="header" className="w-[972px] ">
          <Nav categories={categories} />
          <div className="pt-[27px] relative">
            <motion.div
              initial={{ x: -800 }}
              animate={{ x: 0 }}
              transition={{
                delay: 4.5,
                duration: 2,
                type: "spring",
              }}
              className="absolute font-bold text-[156px] uppercase left-[-10px] text-[#E9E9DB]"
            >
              american
            </motion.div>
            <img width={972} src="/art1.png" alt="" />
            <motion.div
              initial={{ x: 700 }}
              animate={{ x: 0 }}
              transition={{
                delay: 4.7,
                duration: 2,
                type: "spring",
              }}
              className="absolute font-bold text-[156px] uppercase text-[#E9E9DB] top-[620px] left-[350px]"
            >
              gothic
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
