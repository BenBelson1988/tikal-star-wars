import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchPlanets = () => {
  const planetsToFind = ["Tatooine", "Alderaan", "Naboo", "Bespin", "Endor"];
  const [planets, setPlanets] = useState([]);
  const [isLoading2, setIsLoading] = useState(true);

  useEffect(() => {
    fecthPlanets();
  }, []);

  const fecthPlanets = async () => {
    setPlanets(
      await axios.all(
        planetsToFind.map((planet) => {
          return fetchPlanetByName(planet);
        })
      )
    );
    setIsLoading(false);
  };

  const fetchPlanetByName = async (name) => {
    const response = await axios.get(
      `https://swapi.py4e.com/api/planets/?search=${name}`
    );
    return response.data.results[0];
  };
  return { isLoading2, planets };
};
