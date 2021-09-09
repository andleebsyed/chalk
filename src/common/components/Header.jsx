import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";
import { useTheme } from "../hooks/useTheme";
import { Navbar } from "./Navbar/Navbar";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchNotes } from "../../features/notes/notesSlice";
export function ThemeToggle() {
  const [colorTheme, setTheme] = useTheme();
  return (
    <button
      onClick={() => setTheme(colorTheme)}
      className="outline-none self-center ml-auto"
    >
      {colorTheme === "dark" ? (
        <IoMoonOutline size={28} />
      ) : (
        <HiOutlineLightBulb size={28} />
      )}
    </button>
  );
}
export function Header() {
  const dispatch = useDispatch()
  function searchHandler(e) {
    const searchTitle = e.target.value;
    dispatch(searchNotes({ searchTitle }))
  }
  return (
    <div className="p-2  border-b border-opacity-10 min-w-screen  flex justify-between  sticky top-0 bg-white dark:bg-dark-1">
      <div className="flex justify-between">
        <Navbar />
        <Link to="/home" className="self-center">
          <p className="ml-1 self-center text-blue font-bold text-xl">
            Chalk
          </p>
        </Link>
      </div>
      <div className="self-center  rounded-lg flex p-1  bg-white border dark:border-opacity-0 border-black">
        <div>
          <FiSearch size={28} className=" hidden sm:inline mr-2 dark:text-black  " />
        </div>
        <input
          type="text"
          className="rounded-lg h-9 text-black   outline-none sm:w-[450px] "
          placeholder="Search Notes..."
          onChange={(e) => searchHandler(e)}
        />
      </div>
      <ThemeToggle />
    </div>
  );
}
