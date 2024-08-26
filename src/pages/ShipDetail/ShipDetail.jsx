import React, { useState, useEffect } from "react";
import ShipDetailCard from "../../components/ShipDetail/ShipDetailCard";
import { useParams } from "react-router-dom";
import skyStars from "../../images/sky_stars.webp";
import { Link } from "react-router-dom";

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

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${skyStars})`,
      }}
    >
      <div className="flex flex-col min-h-screen">
        <ShipDetailCard ship={ship} />
        <div className="flex mt-20 justify-center w-full">
          <Link
            to="/starships"
            className="bg-yellow-400 text-black font-bold text-sm py-2 px-6 rounded-full hover:bg-yellow-300 transition-colors"
          >
            Return to Starships List
          </Link>
        </div>
      </div>
    </div>
  );
}
