import React, { useState } from "react";
import "../Navbar/Navbar.css";
import { FiMenu } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeAuth } from "../../../features/auth/authSlice";
export function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const { authorized } = useSelector(state => state.auth)
  const { labels } = useSelector(state => state.notes)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  function logoutHandler() {
    localStorage.clear()
    dispatch(removeAuth())
    navigate('/', { replace: true })
  }
  return (
    <div className="self-center mt-2">
      <button className="" onClick={() => setNavbar(!navbar)}>
        <FiMenu size={28} />
      </button>
      <nav
        className={`overflow-y-auto nav-menu bg-white dark:bg-dark-1 border-r border-selected-navitem-light dark:border-selected-navitem-dark fixed no-scrollbar ${navbar ? "active" : ""}`}
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
          <NavLink
            to="/home/notes"
            className="nav-item nav-item-theme"
            activeClassName="selected"
          >
            <li>All Notes</li>
          </NavLink>

          {labels?.map(label =>
            <NavLink to={`/label/${label._id}`} key={label._id}
              className="nav-item nav-item-theme"
              activeClassName="selected">
              <div key={label._id} >{label.labelName}</div>
            </NavLink>

          )}
          <NavLink to="/account" className="nav-item nav-item-theme"
            activeClassName="selected">
            <li>Account</li>
          </NavLink>

          {authorized && <li className="nav-item nav-item-theme" onClick={() => logoutHandler()}>Logout</li>}
        </ul>
      </nav>
    </div>
  );
}
