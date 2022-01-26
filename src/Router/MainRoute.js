import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useFecthPilotsAndPlanets } from "../hooks/useFecthPilotsAndPlanets";
import { useFetchPlanets } from "../hooks/useFecthPlanets";
import Task2 from "../pages/Task2/Task2";
import Task1 from "../pages/Task1/Task1";
import { useEffect } from "react";

export default () => {
  const { isLoading1, vehicles } = useFecthPilotsAndPlanets();
  const { isLoading2, planets } = useFetchPlanets();
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={"task1"} />
      </Route>
      {/* <Route exact path="/tikal-star-wars">
        <Redirect to={"task1"} />
      </Route> */}
      <Route
        exact
        path="/task1"
        component={() => <Task1 isLoading={isLoading1} vehicles={vehicles} />}
      />
      <Route
        exact
        path="/task2"
        component={() => <Task2 isLoading={isLoading2} planets={planets} />}
      />
    </Switch>
  );
};
