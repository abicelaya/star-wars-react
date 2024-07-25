import React, { useEffect, useState } from "react";

import ShipListCard from "../../components/ListShips/ShipListCard";

export default function ListShips() {
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
    };
    fetchShips();
  }, []);

  return (
    <div>
      {ships.map((ship) => (
        <ShipListCard key={ship.url} ship={ship} />
      ))}
    </div>
  );
}
