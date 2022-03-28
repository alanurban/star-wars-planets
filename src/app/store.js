import { configureStore } from "@reduxjs/toolkit";
import planetsReducer from "../features/planets/planetsSlice";

export const store = configureStore({
  reducer: {
    planets: planetsReducer,
  },
});
