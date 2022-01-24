import { useEffect, useState } from "react";
import PlanetsChart from "../../common/Chart/PlanetsChart";
import * as S from "./style";

export default (props) => {
  const planetsToFind = ["Tatooine", "Alderaan", "Naboo", "Bespin", "Endor"];
  const [planetsFound, setPlanetFound] = useState([]);
  console.log(planetsFound);

  const FindPlanets = (planetsList) => {
    let tempfoundArr = [];
    planetsToFind.forEach((planet) => {
      const found = planetsList.find(
        (planetFomList) => planetFomList.name === planet
      );
      tempfoundArr.push({
        name: found.name,
        population: parseInt(found.population),
      });
    });
    setPlanetFound(tempfoundArr);
  };
  useEffect(() => {
    if (props.planets.length !== 0) FindPlanets(props.planets);
  }, []);

  return (
    <S.ChartWrapper>
      {planetsFound.length > 0 && <PlanetsChart data={planetsFound} />}
    </S.ChartWrapper>
  );
};
