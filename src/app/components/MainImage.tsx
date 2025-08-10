"use client";
import Image from "next/image";
import { motion, TargetAndTransition } from "motion/react";

const MainImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100, filter: "blur(5px)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.5 }}
      className="z-100 absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[50vw] max-w-[400px]"
    >
      <div className="relative w-full h-auto aspect-[2.3/4]">
        {" "}
        <Image
          src="/images/standing-2.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>{" "}
    </motion.div>
  );
};

export default MainImage;
