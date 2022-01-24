import { useState, useEffect } from "react";
import axios from "axios";
import { useFetchVehicles } from "./useFetchVehicles";

export const useFecthPilotsAnfPlanets = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [vehicles, setVehicles] = useState([]);
  const vehiclesList = useFetchVehicles();

  useEffect(() => {
    if (vehiclesList.length !== 0) FetchPilots(vehiclesList);
  }, [vehiclesList]);

  const FetchPilots = async (vehiclesList) => {
    let tempVehicles = [];
    vehiclesList.map(async (vehicle) => {
      var vehicleObject = { vehicle: vehicle.name };
      var pilots = [];
      vehicle.pilots.map(async (pilot) => {
        const pilotResponse = await axios.get(pilot);
        const pilotResult = pilotResponse.data;
        const planetResponse = await axios.get(pilotResult.homeworld);
        const planet = planetResponse.data;
        pilots.push({
          name: pilotResult.name,
          planet: {
            name: planet.name,
            population: planet.population,
          },
        });
      });
      vehicleObject = { ...vehicleObject, pilots };
      tempVehicles.push(vehicleObject);
    });
    setVehicles(tempVehicles);
    setIsLoading(false);
    return tempVehicles;
  };
  return { isLoading, vehicles };
};
