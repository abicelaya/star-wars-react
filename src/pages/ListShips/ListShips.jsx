import React, { useContext } from "react";
import { ShipContext } from "../../context/ShipContext"; // Importa el contexto
import ShipListCard from "../../components/ListShips/ShipListCard";

export default function ListShips() {
  const { ships, loadMoreShips, loading } = useContext(ShipContext);

  const extractShipId = (url) => {
    const parts = url.split("/");
    return parts[parts.length - 2];
  };

  return (
    <div>
      {ships.map((ship) => (
        <ShipListCard key={ship.url} ship={ship} id={extractShipId(ship.url)} />
      ))}
      <div className="text-center mt-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <button
            onClick={loadMoreShips}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            View More
          </button>
        )}
      </div>
    </div>
  );
}
