import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { App, NotFoundPage, PlanetFilms } from "../components";
import { PlanetDetails } from "../components/PlanetDetails";
import { PlanetResidents } from "../components/PlanetResidents";
import {
  APP_PATH,
  PLANETS_DETAILS_PATH,
  PLANETS_FILMS_PATH,
  PLANETS_RESIDENTS_PATH,
} from "./routes";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={APP_PATH} component={App} />
        <Route exact path={PLANETS_FILMS_PATH} component={PlanetFilms} />
        <Route exact path={PLANETS_DETAILS_PATH} component={PlanetDetails} />
        <Route
          exact
          path={PLANETS_RESIDENTS_PATH}
          component={PlanetResidents}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
