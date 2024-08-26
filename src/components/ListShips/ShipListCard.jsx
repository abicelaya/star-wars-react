import React from "react";
import { Link } from "react-router-dom";

const ShipDetailCard = ({ ship, id }) => {
  return (
    <div className="group mt-9 p-9 w-1/2 mx-auto flex flex-col justify-center text-stone-400 bg-neutral-800 rounded-2xl shadow-lg border border-neutral-700 transition-colors duration-300 ease-in-out hover:bg-neutral-700 hover:border-neutral-600">
      <h1 className="text-lg font-medium uppercase">{ship.name}</h1>
      <hr className="border-t border-neutral-600 my-2 transition-colors duration-300 ease-in-out" />
      <p className="text-sm">{ship.model}</p>
      <Link to={`/starships/${id}`}>
        <span className="text-yellow-500 mt-2 text-sm border border-transparent hover:border-yellow-300 transition duration-200 ease-in-out inline-block rounded-full px-4 py-1 hover:text-yellow-300">
          View details
        </span>
      </Link>
    </div>
  );
};

export default ShipDetailCard;
