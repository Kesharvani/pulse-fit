import "./SideBar.css";
import React from "react";
import { NavLink } from "react-router-dom";
export default function SideBar() {
  const colorObject = ({ isActive, isPending }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "#FFFFF7" : "white",
      textDecoration: "none",
    };
  };
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" style={colorObject}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/exercise" style={colorObject}>
            Exercise
          </NavLink>
        </li>
        <li>
          <NavLink to="/food" style={colorObject}>
            Food
          </NavLink>
        </li>
        <li>
          <NavLink to="/goal" style={colorObject}>
            Goals
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
