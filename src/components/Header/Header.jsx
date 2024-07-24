import React from "react";
import logo from "../../assets/sw_logo.png";

const Header = () => {
  return (
    <header className="bg-black text-stone-400 border-b">
      <div className="container mx-auto py-4   border-stone-400">
        <div className="flex justify-between items-center">
          <div className="flex flex-grow justify-center">
            <img src={logo} alt="Logo" className="h-20" />
          </div>
          <div className="flex flex-none space-x-4">
            <a
              href="#"
              className="text-stone-400 text-sm  hover:text-white hover:underline"
            >
              LOG IN
            </a>
            <span>|</span>
            <a href="#" className="text-stone-400 text-sm  hover:text-white">
              SIGN UP
            </a>
          </div>
        </div>
        <nav className="mt-9 flex justify-center space-x-9">
          <a href="#" className="text-stone-400 text-sm hover:text-white ">
            HOME
          </a>
          <a href="#" className="text-stone-400 text-sm  hover:text-white">
            STARSHIPS
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
