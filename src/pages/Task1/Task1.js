import { useEffect, useState } from "react";
import * as S from "./style";

export default (props) => {
  const [maxVehicle, setMaxVehicle] = useState({});
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
  console.log(props.vehicles);
  return (
    <>
      {props.isLoading && <p>loading...</p>}
      {maxVehicle && (
        <S.TableTask1>
          <S.TableColumn>
            {" "}
            Vehicle name with the largest sum - {maxVehicle.vehicle}
          </S.TableColumn>
          <S.TableColumn>
            Related home planets and their respective -
            {maxVehicle.pilots &&
              maxVehicle.pilots.map((pilot, index) => {
                return (
                  <p key={index}>
                    {index > 0 ? ", " : ""} {pilot.planet.name}, population -
                    {pilot.planet.population}
                  </p>
                );
              })}
          </S.TableColumn>
          <S.TableColumn>
            Related pilot names -
            {maxVehicle.pilots &&
              maxVehicle.pilots.map((pilot, index) => {
                return (
                  <p key={index}>
                    {index > 0 ? ", " : ""} {pilot.name}
                  </p>
                );
              })}
          </S.TableColumn>
        </S.TableTask1>
      )}
    </>
  );
};
