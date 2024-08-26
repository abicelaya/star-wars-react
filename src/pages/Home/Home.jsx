import React from "react";
import { Link } from "react-router-dom";
import starWars from "../../images/ralph_mcquarrie_04.jpg";

const Home = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-end text-white"
      style={{
        backgroundImage: `url(${starWars})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative flex flex-col items-end p-6 w-1/3">
        <h1 className="text-4xl mb-4 ">Welcome to the Star Wars Fleet</h1>
        <p className="text-lg mb-6">
          Explore the iconic ships of Star Wars. Discover the Millennium Falcon,
          Star Destroyers, and more. Get ready for a galaxy of adventures!
        </p>
        <div className="flex justify-center w-full">
          <Link
            to="/starships"
            className="bg-yellow-400 font-bold text-black text-sm py-2 px-6 rounded-full hover:bg-yellow-300 transition-colors"
          >
            View starships
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
