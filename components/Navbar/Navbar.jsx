import React from "react";
import NavImg from "../../src/assets/logo.png";
// import CoinImg from "../../src/assets/";

const Navbar = ({availableBalence}) => {
  return (
    <div className="max-w-[1200px] m-auto">
      <div className="bg-white  navbar shadow-sm">
        <div className="flex-1">
          <img className="w-[60px] h-[60px]" src={NavImg} alt="" />
        </div>
        <div className=" text-black items-center text-center">
          <ol className="flex gap-5  items-center">
            <li>Home</li>
            <li>Fixture</li>
            <li>Teams</li>
            <li>Schedules</li>
            <button className="shadow-sm p-3 m-1 rounded-md font-semibold ">
              <span>{availableBalence}</span>
              <span className="ml-1">Coin</span>
              <img src="null" alt="" />
            </button>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
