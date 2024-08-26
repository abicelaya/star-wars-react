import React from "react";

export default function ShipDetailCard({ ship }) {
  if (!ship) {
    return <div className=" text-stone-400">Cargando...</div>;
  }
  return (
    <div className="mt-12 p-10 w-1/2 mx-auto flex flex-col justify-center text-stone-400 bg-neutral-800 border border-white shadow-lg shadow-white">
      <h1 className="text-lg font-bold uppercase">{ship.name}</h1>
      <hr className="my-4 border-t border-neutral-600" />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex enim
        exercitationem non rem quo debitis amet error quaerat tempora sed?
      </p>
      <div className="mt-8 flex flex-row justify-between">
        <div className="w-1/2 pr-4">
          <p className="text-sm">Model: {ship.model}</p>
          <p className="text-sm">Cost in credits: {ship.cost_in_credits}</p>
          <p className="text-sm">
            Max atmosphering speed: {ship.max_atmosphering_speed}
          </p>
        </div>
        <div className="w-1/2 pl-4">
          <p className="text-sm">Manufacturer: {ship.manufacturer}</p>
          <p className="text-sm">Length: {ship.length}</p>
          <p className="text-sm">Crew: {ship.crew}</p>
        </div>
      </div>
    </div>
  );
}
