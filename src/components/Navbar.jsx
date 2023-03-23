import React from "react";
import NavbarLogo from "./../images/navbar-logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="flex bg-slate-400 text-white text-lg font-bold justify-between">
        <ul className="flex gap-20 ml-20 mt-5 child:cursor-pointer hover:child:text-slate-100 hover:child:scale-110">
          <li>Home</li>
          <li>Product</li>
          <li>About us</li>
        </ul>
        <div className="w-[5%] p-3">
          <img className="rounded-full cursor-pointer hover:scale-105" src={NavbarLogo} alt="" />
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
