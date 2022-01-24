import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {
  useFecthPilotsAnfPlanets,
  FetchPilots,
} from "../hooks/useFecthPilotsAnfPlanets";
import Task2 from "../pages/Task2/Task2";
import Task1 from "../pages/Task1/Task1";
import { useEffect } from "react";

export default () => {
  const { isLoading, vehicles } = useFecthPilotsAnfPlanets();
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={"task1"} />
      </Route>
      <Route
        exact
        path="/task1"
        component={() => <Task1 isLoading={isLoading} vehicles={vehicles} />}
      />
      <Route exact path="/task2" component={() => <Task2 />} />
    </Switch>
  );
};
