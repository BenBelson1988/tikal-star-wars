import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchVehicles = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    const [vehicles1, vehicles2, vehicles3, vehicles4] = await axios.all([
      fetchVehiclesByPage(1),
      fetchVehiclesByPage(2),
      fetchVehiclesByPage(3),
      fetchVehiclesByPage(4),
    ]);
    setVehicles(new Array().concat(vehicles1, vehicles2, vehicles3, vehicles4));
  };

  const fetchVehiclesByPage = async (page) => {
    const response = await axios.get(
      `https://swapi.py4e.com/api/vehicles/?page=${page}`
    );

    let vehiclesWithPilots = response.data.results.filter((vehicles) => {
      return vehicles.pilots.length !== 0;
    });
    return vehiclesWithPilots;
  };

  return vehicles;
};
