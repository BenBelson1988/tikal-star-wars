import React, { useState } from "react";

export default (props) => {
  console.log(props.data);
  const [planetsData, setplanetsData] = useState(props.data);
  const maxPlanet = 200;
  const chartHeight = maxPlanet + 20;
  const barWidth = 50;
  const barMargin = 30;
  const numberofBars = planetsData.length;
  let width = numberofBars * (barWidth + barMargin);

  const calculateHighestPlanet = (data) =>
    data.reduce((acc, cur) => {
      const { population } = cur;
      return population > acc ? population : acc;
    }, 0);

  const [highestPlanet, setHighestPlanet] = useState(
    calculateHighestPlanet(props.data)
  );

  return (
    <>
      <p className="legend">
        <span className="higest-population">Planets population</span>
      </p>

      <Chart height={chartHeight} width={width}>
        {planetsData.map((data, index) => {
          const barHeight = data.population / 30000000;
          return (
            <Bar
              key={data.name}
              x={index * (barWidth + barMargin)}
              y={chartHeight - barHeight}
              width={barWidth}
              height={barHeight}
              planetName={data.name}
              highestPlanet={highestPlanet}
            />
          );
        })}
      </Chart>
    </>
  );
};

const Chart = ({ children, width, height }) => (
  <svg
    viewBox={`0 0 ${width} ${height}`}
    width="100%"
    height="70%"
    preserveAspectRatio="xMidYMax meet"
  >
    {children}
  </svg>
);

const Bar = ({ x, y, width, height, planetName }) => (
  <>
    <rect x={x} y={y} width={width} height={height} fill="black" />
    <text fontSize={"10px"} x={x} y={y - 5}>
      {Math.round(`${height}` * 30000000)}
    </text>
    <text x={x} y={y - 30}>
      {`${planetName}`}
    </text>
  </>
);
