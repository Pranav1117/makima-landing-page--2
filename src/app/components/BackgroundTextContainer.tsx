"use client";
import React from "react";
import { Nunito } from "next/font/google";
import { Anton, Outfit, Dosis } from "next/font/google";
import { motion } from "motion/react";

const anton = Anton({ weight: "400", subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700"] });
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "700"] });
const dosis = Dosis({ subsets: ["latin"], weight: ["400", "700"] });

const BackgroundTextContainer = () => {
  return (
    <div className="flex flex-col justify-around items-center gap-2 h-[calc(100vh-180px)]">
      <div className={`flex justify-between h-[30%]`}>
        <motion.div
          initial={{ opacity: 0, y: 10, x: 50, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className={`${nunito.className} w-[40%] text-black text-md py-4 space-y-4`}
        >
          <div className="bg-[#3b3947] h-7 w-50 mx-auto"></div>
          <div className="flex gap-4">
            <div className="bg-[#d6ac79] h-auto w-20"></div>
            <motion.div className="leading-none">
              {" "}
              Makima is a velvet chain, wrapping the world in a smile that hides
              the bite of her will. In her gaze, mercy and damnation dance so
              closely they are mistaken for love.
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10, x: -50, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="w-[35%] text-black px-4"
        >
          <div className="mx-auto text-center inline-block">
            <div className="flex items-center justify-between">
              <div className="space-y-3 ">
                <div className="bg-[#d6ac79] h-3 w-22"></div>
                <div className="bg-neutral-400 h-3 w-22"></div>
                <div className="bg-[#d6ac79] h-3 w-22"></div>
              </div>
              <div className={`${dosis.className} font-[700] text-[8rem]`}>
                Envie{" "}
              </div>
              <div className="space-y-3 ">
                <div className="bg-[#d6ac79] h-3 w-22"></div>
                <div className="bg-neutral-400 h-3 w-22"></div>
                <div className="bg-[#d6ac79] h-3 w-22"></div>
              </div>
            </div>
            <p className={`${dosis.className} text-2xl -mt-10`}>SEU BLOG</p>

            <div className="text-center leading-none">
              Makima walks through chaos as if it were a quiet garden. Her voice
              is silk, but every word is a leash. Power bends toward her not
              from fear alone, but from desire. To love her is to step willingly
              into the wolf’s open jaws.
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-between text-black w-[100vw] h-[55%]">
        <motion.div
          initial={{ opacity: 0, y: -20, x: 70, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="w-[40%] p-3 flex items-center justify-center flex-col text-center -mt-8 text-neutral-500"
        >
          <div>
            <h2 className={`${anton.className} text-[7rem]`}>Plata</h2>
            <h3 className={`${outfit.className} text-[3rem] -mt-10`}>Forma</h3>
          </div>
          <div className="text-xs mt-1">
            MAKIMA (マキマ, Makima) IS THE MAIN FEMALE ANTAGONIST IN THE
            CHAINSAW MAN SERIES{" "}
          </div>
          <div className="bg-[#d6ac79] h-8 w-40 mt-1"></div>

          <div className="flex gap-4 mt-4">
            <div className="w-16 h-16 rounded-full border-8 border-black"></div>

            <div className="w-16 h-16 rounded-full border-8 border-orange-400"></div>
          </div>
        </motion.div>
        <div className="w-[40%] flex items-center gap-2">
          {/* <div className="relative w-[60%] -bottom-10 aspect-[6/4]">
            <Image
              src={"/images/standing.png"}
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <div className="text-red-900">
            <div className="text-[2rem] font-bold">マ</div>
            <div className="text-[2rem] font-bold">キ</div>
            <div className="text-[2rem] font-bold">マ</div>
          </div>
          <div  className="text-neutral-700">
            <div className="text-[2rem] font-bold">マ</div>
            <div className="text-[2rem] font-bold">キ</div>
            <div className="text-[2rem] font-bold">マ</div>
          </div>
          <div  className="text-red-900">
            <div className="text-[2rem] font-bold">マ</div>
            <div className="text-[2rem] font-bold">キ</div>
            <div className="text-[2rem] font-bold">マ</div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BackgroundTextContainer;
