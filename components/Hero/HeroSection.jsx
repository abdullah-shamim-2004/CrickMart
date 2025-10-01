import React from "react";
import HeroImg from "../../src/assets/banner-main.png";

const HeroSection = () => {
  return (
    <div className="max-w-[1200px] m-auto ">
      <div className="flex flex-col justify-center items-center text-center my-4 bg-gray-300 rounded-xl">
        <img className="w-[200px] h-[200px] my-4" src={HeroImg} alt="" />
        <h1 className="text-2xl font-bold mb-2.5">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-gray-400 mb-1.5">Beyond Baundaries Beyond Limits</p>
        <div className="border-2 border-gray-400 rounded-2xl">
          {" "}
          <button className="btn  font-bold bg-amber-400 rounded-xl border-none m-1">
            Claim Free Cradit
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
