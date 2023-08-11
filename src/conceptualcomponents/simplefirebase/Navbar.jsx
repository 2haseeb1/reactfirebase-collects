import React from "react";
import { NavLink } from "react-router-dom";
import { FaCubes } from "react-icons/fa"; // Import the Font Awesome icon

function Navbar() {
  return (
    <div className="flex justify-between bg-blue-500 p-4">
      <div className="flex items-center">
        <FaCubes className="text-3xl text-white mr-2" />
        <h1 className="text-2xl font-bold text-white">My App</h1>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <div className="flex items-center space-x-4"> {/* Center align */}
          <NavLink
            to="/"
            exact="true"
            className="nav-link text-white active"
           
          >
            Home
          </NavLink>
          <NavLink
            to="/login"
            className="nav-link text-white active"
           
          >
            Login
          </NavLink>
          <NavLink
            to="/logout"
            className="nav-link text-white active"
            
          >
            Logout
          </NavLink>
          <NavLink
            to="/register"
            className="nav-link text-white"
            
          >
            Register
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
