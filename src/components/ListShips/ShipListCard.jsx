import React from "react";
import { Link } from "react-router-dom";


export default function ShipListCard({ ship, id }) {
  return (
    <div className="mt-9 px-4 py-4 w-1/2 mx-auto flex flex-col justify-center text-stone-400 bg-neutral-900 ">
      <h1 className="text-lg font-medium uppercase">{ship.name}</h1>
      <p className="text-sm">{ship.model}</p>
      <Link to={`/starships/${id}`}>
        <span
          className="text-yellow-500 text-sm border border-transparent hover:border-yellow-300 transition duration-200 ease-in-out inline-block rounded-full px-4 py-1 hover:text-yellow-300"
        >
          Ver detalles
        </span>
      </Link>
    </div>
  );
}
