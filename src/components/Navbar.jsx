import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex  gap-4 p-4 bg-gray-800 text-white justify-between items-center">
      <h1 className="font-bold text-3xl">E-Com</h1>
      <div className="flex gap-10 text-2xl font-semibold cursor-pointer ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/home/products">Products</NavLink>
        <NavLink to="/home/user">User</NavLink>
      </div>
      <button className="bg-white text-black px-4 py-2 rounded font-bold text-xl">Logout</button>
    </div>
  );
};

export default Navbar;
