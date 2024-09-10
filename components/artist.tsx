"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useLenis } from "lenis/dist/lenis-react.js";
import localFont from "next/font/local";
import React from "react";

const myFont = localFont({ src: "./../app/fonts/Emilea.woff2" });

interface Props {
  className?: string;
}

export const Artist: React.FC<Props> = ({ className }) => {
  const [key, setKey] = React.useState(0);
  React.useEffect(() => {
    setKey((prev) => prev + 1);
  }, []);
  return (
    <div id="artist" className={cn("relative h-[1000px] pt-8", className)}>
      <motion.div
        key={key}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
        className={`${myFont.className} text-[120px] uppercase text-red-800`}
      >
        the aq art<span className="text-black">ist</span>
      </motion.div>
      <div className="pt-[70px] pb-16 w-[400px]">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="font-bold text-[32px] pb-8"
        >
          Grant Wood
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.52,
          }}
          viewport={{ once: true }}
          className="text-normal"
        >
          Grant Wood, famous for his representations of the Midwest—of which the
          Art Institute’s American Gothic (1930.934) is his most recognizable
          example—intended The Pump to be an illustration for Sinclair Lewis’s
          novel Main Street (1920).{" "}
        </motion.p>
      </div>
      <div className="w-[400px]">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="font-bold text-[32px] pb-8"
        >
          American Gothic
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.52,
          }}
          viewport={{ once: true }}
          className="text-normal"
        >
          This image of a contemporary water pump would have been a perfect fit
          for Lewis’s novel about life in a midwestern town. The drawing was
          given to the Art Institute by Carter Manny, Jr., who received it as a
          high school graduation gift from the artist in 1937.{" "}
        </motion.p>
      </div>
      <motion.img
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
          delay: 0.22,
        }}
        viewport={{ once: true }}
        className="absolute z-20 top-[40%] left-[36%]"
        src="/art3.png"
        alt=""
      />
      <motion.img
        initial={{ x: 200, opacity: 0, rotate: 30 }}
        whileInView={{ x: 0, opacity: 1, rotate: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
          delay: 0.22,
        }}
        viewport={{ once: true }}
        className="absolute z-10 top-[25%] left-[57%]"
        src="/art2.png"
        alt=""
      />
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
          delay: 0.22,
        }}
        viewport={{ once: true }}
        className="absolute z-0 top-[48%] left-[41%]"
        src="/circles.png"
        alt=""
      />
    </div>
  );
};
