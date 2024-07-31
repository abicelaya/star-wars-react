import React, { useState, useEffect } from "react";
import ShipDetailCard from "../../components/ShipDetail/ShipDetailCard";
import { useParams } from "react-router-dom";

export default function ShipDetail() {
  const { id } = useParams();
  const [ship, setShip] = useState(null);

  useEffect(() => {
    const fetchShip = async () => {
        
      const urlShip = `https://swapi.dev/api/starships/${id}/`;
      const result = await fetch(urlShip, {
        headers: {
          Accept: "application/json",
        },
      });

      const ship = await result.json();
      setShip(ship);
      console.log(ship);
    };

    fetchShip();
  }, [id]);

  return <ShipDetailCard ship={ship} />;
}
