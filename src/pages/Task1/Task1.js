import { useEffect, useState } from "react";
import * as S from "./style";

export default (props) => {
  const [maxVehicle, setMaxVehicle] = useState();
  if (!props.isLoading) console.log(maxVehicle);
  const calcMostPopulation = (vehicles) => {
    let maxVehicle = {};
    vehicles.forEach((vehicle) => {
      let population = 0;
      vehicle.pilots.forEach((pilot) => {
        if (pilot.planet.population !== "unknown") {
          population += parseInt(pilot.planet.population);
        }
      });
      if (Object.keys(maxVehicle).length === 0)
        maxVehicle = { ...vehicle, population: population };
      else if (maxVehicle.population < population)
        maxVehicle = { ...vehicle, population: population };
    });
    setMaxVehicle(maxVehicle);
  };
  useEffect(() => {
    if (props.vehicles) calcMostPopulation(props.vehicles);
  }, [props.vehicles]);

  return <S.TableTask1>Task1</S.TableTask1>;
};
