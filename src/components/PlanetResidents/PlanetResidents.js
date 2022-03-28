import { React, useMemo } from "react";
import { useSelector } from "react-redux";
import Grid from "../Grid";

import { getResidentsState } from "../../features/planets/planetsSlice";

export const PlanetResidents = () => {
  const residents = useSelector(getResidentsState);

  const data = {
    header: [{ col: "link" }],
    values: useMemo(() => residents.map((val) => ({ link: val })), [residents]),
    actions: [],
  };

  return (
    <div>
      <h1>Residents</h1>
      <Grid data={data} />
    </div>
  );
};
