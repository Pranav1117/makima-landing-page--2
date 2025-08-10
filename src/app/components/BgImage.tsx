import Image from "next/image";
import React from "react";

const BgImage = () => {
  return (
    <div className="absolute h-[100vh] w-[100vw] inset-0 -z-1 blur-sm">
      <Image src={"/images/cover-4.jpg"} fill alt="" />
    </div>
  );
};

export default BgImage;
