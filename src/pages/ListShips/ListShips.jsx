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
      console.log(ships)
    };
    fetchShips();
  }, []);

  const extractShipId = (url) => {
    const parts = url.split("/");
    return parts[parts.length - 2];
  };

  return (
    <div>
      {ships.map((ship) => (
        <ShipListCard key={ship.url} ship={ship} id={extractShipId(ship.url)} />
      ))}
    </div>
  );
}
