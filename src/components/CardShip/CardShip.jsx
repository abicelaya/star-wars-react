import React, { useEffect, useState } from "react";

export default function CardShip() {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    const fetchShips = async () => {
      const urlShips = "https://swapi.dev/api/starships/";
      const result = await fetch(urlShips, {
        headers: {
          Accept: "application/json",
        },
      });

      const ships = await result.json();
      setShips(ships.results);
      console.log(ships);
      return ships;
    };
    fetchShips();
  }, []);

  return (
    <>
      {ships.map((ship, index) => (
        <div
          key={index}
          className="mt-9 px-4 py-4 w-1/2 mx-auto flex flex-col justify-center text-stone-400 bg-neutral-900"
        >
          <h1 className="text-lg">{ship.name}</h1>
          <p className="text-sm">{ship.model}</p>
        </div>
      ))}
    </>
  );
}
