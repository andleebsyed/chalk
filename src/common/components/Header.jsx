import React, { useState } from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FiMenu, FiSearch } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";
import { useTheme } from "../hooks/useTheme";
import { Navbar } from "./Navbar/Navbar";
export function Header() {
  const [colorTheme, setTheme] = useTheme();
  return (
    <div className="p-2  border-b border-opacity-10 min-w-screen flex justify-between ">
      <div className="flex justify-between">
        <Navbar />
        <p className="ml-1 self-center text-blue-700 font-bold text-xl">
          Chalk
        </p>
      </div>
      <div className="self-center  rounded-lg flex p-1  bg-white border dark:border-opacity-0 border-black">
        <button className=" hidden sm:inline mr-2 dark:text-black ">
          <FiSearch size={28} className="" />
        </button>
        <input
          type="text"
          className=" rounded-lg h-9 text-black   outline-none sm:w-[450px] "
          placeholder="Search Notes..."
        />
      </div>
      <button onClick={() => setTheme(colorTheme)} className="outline-none">
        {colorTheme === "dark" ? (
          <IoMoonOutline size={28} />
        ) : (
          <HiOutlineLightBulb size={28} />
        )}
      </button>
    </div>
  );
}
