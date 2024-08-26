import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/sw_logo.png";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-black text-stone-400 border-b">
      <div className="container mx-auto py-4 border-stone-400">
        <div className="flex justify-between items-center">
          <div className="w-1/3"></div>
          <div className="w-1/3 flex flex-grow justify-center">
            <img src={logo} alt="Logo" className="h-20" />
          </div>
          <div className="w-1/3 justify-end flex flex-none space-x-4">
            {user ? (
              <>
                <button
                  onClick={logout}
                  className="text-stone-400 text-base hover:text-white"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-stone-400 text-base hover:text-white"
                >
                  Log In
                </Link>
                <span>|</span>
                <Link
                  to="/register"
                  className="text-stone-400 text-base hover:text-white"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
        <nav className="mt-9 flex justify-center space-x-9">
          <Link to="/" className="text-stone-400 text-base hover:text-white">
            Home
          </Link>
          <Link
            to="/starships"
            className="text-stone-400 text-base hover:text-white"
          >
            Starships
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
