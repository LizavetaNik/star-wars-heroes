import { configureStore } from "@reduxjs/toolkit";
import heroesReducer from "./heroesSlice";
import filmsReducer from "./filmsSlice";
import starshipsReducer from "./starshipsSlice";

const store = configureStore({
  reducer: {
    heroes: heroesReducer,
    films: filmsReducer,
    starships: starshipsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
