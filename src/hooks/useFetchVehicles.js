import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchVehicles = () => {
  const [vehiclesList, setVehicles] = useState([]);
  const [tempVehicles, setTempVehicles] = useState([]);
  const [vehiclesLoading, setVehiclesLoading] = useState();
  useEffect(() => {
    fetchVehicles();
  }, []);

  useEffect(() => {
    if (tempVehicles.length !== 0)
      setVehicles(new Array().concat(...vehiclesList, tempVehicles));
  }, [tempVehicles]);

  const fetchVehicles = async () => {
    await fetchVehiclesByPagination();
    setVehiclesLoading(false);
  };

  const fetchVehiclesByPagination = async (
    api = "https://swapi.py4e.com/api/vehicles/"
  ) => {
    setVehiclesLoading(true);
    const response = await axios.get(api);
    let vehiclesWithPilots = response.data.results.filter(
      (vehicles) => vehicles.pilots.length !== 0
    );
    setTempVehicles(vehiclesWithPilots);

    if (response.data.next) await fetchVehiclesByPagination(response.data.next);
  };
  return { vehiclesLoading, vehiclesList };
};
