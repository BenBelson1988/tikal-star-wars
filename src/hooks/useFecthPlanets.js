import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchPlanets = () => {
  const [planets, setPlanets] = useState([]);
  const [isLoading2, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPlanets();
  }, []);

  const fetchPlanets = async () => {
    const [
      planets1,
      planets2,
      planets3,
      planets4,
      planets5,
      planets6,
      planets7,
    ] = await axios.all([
      fetchPlanetByPage(1),
      fetchPlanetByPage(2),
      fetchPlanetByPage(3),
      fetchPlanetByPage(4),
      fetchPlanetByPage(5),
      fetchPlanetByPage(6),
      fetchPlanetByPage(7),
    ]);
    setPlanets(
      new Array().concat(
        planets1,
        planets2,
        planets3,
        planets4,
        planets5,
        planets6,
        planets7
      )
    );
    setIsLoading(false);
  };

  const fetchPlanetByPage = async (page) => {
    const response = await axios.get(
      `https://swapi.py4e.com/api/planets/?page=${page}`
    );
    return response.data.results;
  };

  return { isLoading2, planets };
};
