import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/sw_logo.png";

const Header = () => {
  return (
    <header className="bg-black text-stone-400 border-b">
      <div className="container mx-auto py-4 border-stone-400">
        <div className="flex justify-between items-center">
          <div className="w-1/3"></div>
          <div className="w-1/3 flex flex-grow justify-center">
            <img src={logo} alt="Logo" className="h-20" />
          </div>
          <div className="w-1/3 justify-end flex flex-none space-x-4">
            <Link
              to="#"
              className="text- text-sm hover:text-white hover:underline"
            >
              LOG IN
            </Link>
            <span>|</span>
            <Link to="#" className="text-stone-400 text-sm hover:text-white">
              SIGN UP
            </Link>
          </div>
        </div>
        <nav className="mt-9 flex justify-center space-x-9">
          <Link to="/" className="text-stone-400 text-sm hover:text-white">
            HOME
          </Link>
          <Link
            to="/starships"
            className="text-stone-400 text-sm hover:text-white"
          >
            STARSHIPS
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
