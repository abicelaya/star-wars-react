import React from "react";
import { Link } from "react-router-dom";
import "./ShipListCard.css"

export default function ShipListCard({ ship, id }) {
  return (
    <div className="mt-9 px-4 py-4 w-1/2 mx-auto flex flex-col justify-center text-stone-400 bg-neutral-900">
      <h1 className="text-lg">{ship.name}</h1>
      <p className="text-sm">{ship.model}</p>
      <Link to={`/starships/${id}`} className="text-yellow-500 hover-underline-shadow">
        Ver detalles
      </Link>
    </div>
  );
}
