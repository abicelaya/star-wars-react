import React, { useContext } from "react";
import { ShipContext } from "../../context/ShipContext";
import ShipListCard from "../../components/ListShips/ShipListCard";
import skyStars from "../../images/sky_stars.webp";

export default function ListShips() {
  const { ships, loadMoreShips, loading } = useContext(ShipContext);

  const extractShipId = (url) => {
    const parts = url.split("/");
    return parts[parts.length - 2];
  };

  return (
    <div
      className="relative min-h-screen "
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
        <div className="text-center mt-8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <button
              onClick={loadMoreShips}
              className="bg-yellow-500 text-black font-bold text-sm py-2 px-6 rounded-full hover:bg-yellow-400 transition-colors"
            >
              View more
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
