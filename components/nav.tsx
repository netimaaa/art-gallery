import { cn } from "@/lib/utils";
import { easeInOut, motion } from "framer-motion";
import { Search } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
  categories: string[];
}

export const Nav: React.FC<Props> = ({ className, categories }) => {
  return (
    <div>
      <motion.div className={cn("flex justify-between pb-[27px] ", className)}>
        <ul className="gap-12 flex items-center">
          {categories.map((category, index) => (
            <motion.li
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 6.3 + index / 10,
                duration: 0.5,
                ease: "easeInOut",
              }}
              key={index}
              className="text-lg font-medium"
            >
              <motion.div
                initial={{ y: 0 }}
                whileHover={{ y: 3 }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
              >
                <Link
                  href={
                    index == 0
                      ? "#artist"
                      : index == 1
                      ? "#new-gallery"
                      : index == 2
                      ? "#modern"
                      : "#footer"
                  }
                  className="uppercase"
                >
                  {category}
                </Link>
              </motion.div>
            </motion.li>
          ))}
        </ul>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 7.5,
            duration: 1,
            ease: "easeInOut",
            type: "spring",
          }}
          className="flex items-center font-medium text-lg uppercase"
        >
          <Search className="mr-[22px]" size={19} /> Search
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ delay: 6.2, duration: 1.5, ease: "easeInOut" }}
        className="w-full h-[1px] bg-black"
      />
    </div>
  );
};
