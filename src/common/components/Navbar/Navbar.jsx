import React, { useState } from "react";
import "../Navbar/Navbar.css";
import { FiMenu } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";
export function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="self-center mt-2">
      <button className="" onClick={() => setNavbar(!navbar)}>
        <FiMenu size={28} />
      </button>
      <nav
        className={
          navbar
            ? "nav-menu active bg-white dark:bg-dark-1 border"
            : "nav-menu bg-white dark:bg-dark-1 border"
        }
      >
        <ul
          className="w-full flex flex-col items-center"
          onClick={() => setNavbar(!navbar)}
        >
          <li className="rounded-full  hover:bg-navitem-hover dark:hover:bg-opacity-5 self-end  m-2">
            {" "}
            <button onClick={() => setNavbar(!navbar)} className="m-2 p-2 ">
              <ImCancelCircle size={18} />
            </button>
          </li>
          <Link to="/notes">
            <li className="nav-item nav-item-theme">All Notes</li>
          </Link>

          <li className="nav-item nav-item-theme ">Label 1</li>
          <li className="nav-item nav-item-theme">Label 2</li>
          <li className="nav-item nav-item-theme">Label 3</li>
          <li className="nav-item nav-item-theme">Account</li>
        </ul>
      </nav>
    </div>
  );
}
