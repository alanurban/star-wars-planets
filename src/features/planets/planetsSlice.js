import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";
import axios from "../../utils/axios";

const initialState = {
  planets: [],
  status: "idle",
  error: null,
};

export const fetchPlanets = createAsyncThunk(
  "planets/fetchPlanets",
  async () => {
    const response = await axios.get("/");
    response.data.results.map((planet) => {
      planet.id = uuid().substring(0, 5);
      return planet;
    });
    return response.data;
  }
);

const planetsSlice = createSlice({
  name: "planets",
  initialState,
  reducers: {
    setFilms(state, action) {
      state.films = action.payload;
    },
    setResidents(state, action) {
      state.residents = action.payload;
    },
    setPlanetDetails(state, action) {
      state.planetDetails = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPlanets.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPlanets.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.planets = state.planets.concat(action.payload);
      })
      .addCase(fetchPlanets.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setFilms, setResidents, setPlanetDetails } =
  planetsSlice.actions;

export default planetsSlice.reducer;

export const getPlanetState = (state) => state.planets;

export const getResidentsState = (state) => state.planets.residents;

export const getFilmsState = (state) => state.planets.films;

export const getPlanetDetailsState = (state) => state.planets.planetDetails;

export const selectAllPlanets = (state) => {
  return state.planets.planets;
};

export const selectPlanetById = (state, planetId) =>
  state.planets.find((planet) => planet.id === planetId);
