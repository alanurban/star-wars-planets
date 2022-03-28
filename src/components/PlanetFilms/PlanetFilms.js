import { React, useMemo } from "react";
import { useSelector } from "react-redux";
import { getFilmsState } from "../../features/planets/planetsSlice";
import Grid from "../Grid";

export const PlanetFilms = () => {
  const films = useSelector(getFilmsState);

  const data = {
    header: [{ col: "link" }],
    values: useMemo(() => films.map((val) => ({ link: val })), [films]),
    actions: [],
  };

  return (
    <div>
      <h1>Films</h1>
      <Grid data={data} />
    </div>
  );
};
