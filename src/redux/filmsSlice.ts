import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Film, FilmsResponse } from "../types/Film";
import { getFilms } from "../api/swApi";

interface FilmsState {
  films: Film[];
  selectedFilmTitles: Film[];
  selectedFilm: Film | null;
}

const initialState: FilmsState = {
  films: [],
  selectedFilmTitles: [],
  selectedFilm: null,
};

// Fetch films from the API
export const fetchFilms = createAsyncThunk("films/fetchFilms", async () => {
  const response: FilmsResponse = await getFilms();
  return response.results;
});

const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    setSelectedFilm(state, action) {
      const filmIds: number[] = action.payload;
      state.selectedFilmTitles = state.films
        .filter((film) => filmIds.includes(film.id))
        .map((film) => ({
          id: film.id,
          title: film.title,
          starships: film.starships,
        }));
    },
    setSelectedFilmById(state, action: PayloadAction<number>) {
      const filmId = action.payload;
      state.selectedFilm =
        state.films.find((film) => film.id === filmId) || null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilms.fulfilled, (state, action) => {
      state.films = action.payload;
    });
  },
});

export const { setSelectedFilm, setSelectedFilmById } = filmsSlice.actions;

export default filmsSlice.reducer;
