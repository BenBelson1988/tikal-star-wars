import { useEffect, useState } from "react";
import PlanetsChart from "../../common/Chart/PlanetsChart";
import * as S from "./style";

export default (props) => {
  const planetsToFind = ["Tatooine", "Alderaan", "Naboo", "Bespin", "Endor"];
  const [planetsFound, setPlanetFound] = useState([]);
  const { isLoading, planets } = props;

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
    if (planets.length !== 0) FindPlanets(planets);
  }, []);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <S.ChartWrapper>
          {planetsFound.length > 0 && <PlanetsChart data={planetsFound} />}
        </S.ChartWrapper>
      )}
    </>
  );
};
