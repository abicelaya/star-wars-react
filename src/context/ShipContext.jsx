import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ShipContext = createContext();

export const ShipProvider = ({ children }) => {
  const [ships, setShips] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchShips = async (url) => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setShips((prevShips) => [...prevShips, ...response.data.results]);
      setNextPage(response.data.next);
    } catch (error) {
      console.error("Error fetching ships:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreShips = () => {
    if (nextPage) {
      fetchShips(nextPage);
    }
  };

  useEffect(() => {
    fetchShips("https://swapi.dev/api/starships/");
  }, []);

  return (
    <ShipContext.Provider value={{ ships, loadMoreShips, loading }}>
      {children}
    </ShipContext.Provider>
  );
};
