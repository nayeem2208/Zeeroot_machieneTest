import React from "react";
import { Link, useLocation } from "react-router-dom";


function NavBar() {
    let location =useLocation()
    const isActive = (pathname) => location.pathname === pathname;
  return (
    <div className=" flex justify-between h-12 items-center">
        <div>
        <h1 className="text-4xl font-bold ml-2 md:mx-12 text-white">Zeeroot</h1></div>
      <div className="flex w-2/5 md:w-1/6  justify-evenly font-semibold md:text-2xl text-gray-800">
        <Link to='/' className={isActive('/') ? 'text-cyan-800 font-bold underline  underline-offset-8' : ''}><h1 className="mr-2">Home</h1></Link>
        <Link to='/users' className={isActive('/users') ? 'text-cyan-800 font-bold underline  underline-offset-8' : ''}><h1>Users</h1></Link>
      </div>
      <div className="w-1/5 hidden md:block"></div>

    </div>
  );
}

export default NavBar;
