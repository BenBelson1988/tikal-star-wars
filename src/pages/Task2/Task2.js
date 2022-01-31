import { useEffect, useState } from "react";
import PlanetsChart from "../../common/Chart/PlanetsChart";
import * as S from "./style";

export default (props) => {
  const { isLoading, planets } = props;

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <S.ChartWrapper>
          {planets && <PlanetsChart data={planets} />}
        </S.ChartWrapper>
      )}
    </>
  );
};
