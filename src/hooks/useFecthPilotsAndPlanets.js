import { useState, useEffect } from "react";
import axios from "axios";
import { useFetchVehicles } from "./useFetchVehicles";

export const useFecthPilotsAndPlanets = () => {
  const [isLoading1, setIsLoading] = useState(true);
  const [vehicles, setVehicles] = useState([]);
  const vehiclesList = useFetchVehicles();

  useEffect(() => {
    if (vehiclesList.length !== 0) FetchPilots(vehiclesList);
  }, [vehiclesList]);

  const FetchPilotsPlanets = async (pilot) => {
    const pilotResponse = await axios.get(pilot);
    const pilotResult = pilotResponse.data;
    const planetResponse = await axios.get(pilotResult.homeworld);
    const planet = planetResponse.data;
    return { pilotResult, planet };
  };

  const FetchPilots = async (vehiclesList) => {
    var tempVehicles = [];
    await Promise.all(
      vehiclesList.map(async (vehicle) => {
        var pilots = [];
        await Promise.all(
          vehicle.pilots.map(async (pilot) => {
            const { pilotResult, planet } = await FetchPilotsPlanets(pilot);
            pilots.push({
              name: pilotResult.name,
              planet: {
                name: planet.name,
                population: planet.population,
              },
            });
          })
        );
        tempVehicles.push({ vehicle: vehicle.name, pilots });
      })
    );
    setVehicles(tempVehicles);
    setIsLoading(false);
  };
  return { isLoading1, vehicles };
};
