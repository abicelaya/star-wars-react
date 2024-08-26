import React, { useContext } from "react";
import { ShipContext } from "../../context/ShipContext";
import ShipListCard from "../../components/ListShips/ShipListCard";
import skyStars from "../../images/301824.jpg";

export default function ListShips() {
  const { ships, loadMoreShips, loading } = useContext(ShipContext);

  const extractShipId = (url) => {
    const parts = url.split("/");
    return parts[parts.length - 2];
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${skyStars})`,
      }}
    >
      <div className="container mx-auto py-4">
        {ships.map((ship) => (
          <ShipListCard
            key={ship.url}
            ship={ship}
            id={extractShipId(ship.url)}
          />
        ))}
        <div className="text-center mt-4">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <button
              onClick={loadMoreShips}
              className="bg-yellow-500 text-black text-lg py-2 px-6 rounded-full hover:bg-yellow-400 transition-colors"
            >
              Ver más
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
