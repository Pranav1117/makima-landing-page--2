"use client";
import React from "react";
import { Nunito } from "next/font/google";
import { motion } from "motion/react";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700"] });

const Baner = () => {
  return (
    <div className="absolute bottom-2 text-white space-y-5">
      <div className="bg-[#3b3947] h-32 w-[100vw] flex justify-between items-center text-[7rem] text-center">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className={`${nunito.className} w-[45%]`}
        >
          MAKIMA
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="w-[45%] flex items-center justify-end gap-4"
        >
          <p className="w-[60%]">マキマ</p>
          <div className=" bg-white w-40 h-10 "></div>
        </motion.div>
      </div>
      <div className="bg-[#d6ac79] h-8 w-[100vw]"> </div>
    </div>
  );
};

export default Baner;
