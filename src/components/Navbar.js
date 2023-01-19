import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header sticky top-0 left-0 bg-red h-14 flex z-40 w-full shadow-md bg-white dark:bg-[#282828]">
      <div className="w-full flex justify-between h-full mx-auto max-w-6xl items-center relative sm:px-8 px-4">
        <div></div>
        <nav className="nav-options flex transition-all w-full items-center bg-transparent justify-end">
          <Link
            to="/"
            className="w-full text-center my-2 py-2 font-normal font-sans capitalize px-4 mx-2 text-black dark:text-white whitespace-nowrap"
          >
            Home
          </Link>
          <Link
            to="/"
            className="w-full text-center my-2 py-2 font-normal font-sans capitalize px-4 mx-2 text-black dark:text-white whitespace-nowrap"
          >
            My Recipe 
          </Link>
        
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
