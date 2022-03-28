import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from "reactstrap";
import {
  fetchPlanets,
  selectAllPlanets,
  setFilms,
  setPlanetDetails,
  setResidents,
} from "../../features/planets/planetsSlice";
import Grid from "../Grid";
import { PlanetModal } from "../PlanetModal";

export const PlanetsList = () => {
  const dispatch = useDispatch();
  const planets = useSelector(selectAllPlanets);
  const history = useHistory();
  const [modalState, setModalState] = useState({
    isOpen: false,
    planet: null,
  });

  const planetStatus = useSelector((state) => state.planets.status);
  // const error = useSelector((state) => state.planets.error);

  useEffect(() => {
    if (planetStatus === "idle") {
      dispatch(fetchPlanets());
    } else if (planetStatus === "loading") {
    } else if (planetStatus === "succeeded") {
    } else if (planetStatus === "failed") {
    }
  }, [planetStatus, dispatch]);

  const PlanetsTable = (planets) => {
    const data = {
      header: [
        { col: "name" },
        { col: "rotation_period" },
        { col: "orbital_period" },
        { col: "diameter" },
        { col: "climate" },
        { col: "gravity" },
        { col: "terrain" },
        { col: "surface_water" },
        { col: "population" },
      ],
      values: planets[0].results,
      actions: [
        {
          label: "Go to Films",
          action: (row) => {
            dispatch(setFilms(row.films));
            history.push(`/planets/${row.id}/films`);
          },
          isActive: (row) => !!row.films.length,
        },
        {
          label: "Go to Residents",
          action: (row) => {
            dispatch(setResidents(row.residents));
            history.push(`/planets/${row.id}/residents`);
          },
          isActive: (row) => !!row.residents.length,
        },
        {
          label: "Go Planet Details",
          action: (row) => {
            dispatch(setPlanetDetails(row));
            history.push(`/planets/${row.id}/planet`);
          },
        },
        {
          label: "Open Planet Modal",
          action: (row) => {
            setModalState({
              isOpen: true,
              planet: row,
            });
          },
        },
      ],
    };

    return (
      <Container className="App">
        <Grid data={data} />
        {modalState.isOpen && (
          <PlanetModal
            isOpen={modalState.isOpen}
            toggleModal={setModalState}
            planet={modalState.planet}
            onSubmit={() => toast("Submited!")}
          />
        )}
        <ToastContainer />
      </Container>
    );
  };

  // return <></>;
  return planets.length && PlanetsTable(planets);
};
