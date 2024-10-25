import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Hero, HeroesResponse } from "../types/Hero";
import { Film } from "../types/Film";
import { getHeroes } from "../api/swApi";

interface HeroesState {
  heroes: Hero[];
  selectedHero: Hero | null;
  selectedHeroFilms: Film[];
  count: number;
  page: number;
  loading: boolean;
  error: string | null;
}

const initialState: HeroesState = {
  heroes: [],
  selectedHero: null,
  selectedHeroFilms: [],
  count: 0,
  page: 1,
  loading: false,
  error: null,
};

export const fetchHeroes = createAsyncThunk(
  "heroes/fetchHeroes",
  async (page: number) => {
    const response: HeroesResponse = await getHeroes(page);
    return response;
  }
);

const heroesSlice = createSlice({
  name: "heroes",
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
    setSelectedHero(state, action) {
      const heroId = action.payload;
      state.selectedHero =
        state.heroes.find((hero) => hero.id === heroId) || null;
      state.selectedHeroFilms = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeroes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHeroes.fulfilled, (state, action) => {
        state.loading = false;
        state.heroes = action.payload.results;
        state.count = action.payload.count;
      })
      .addCase(fetchHeroes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch heroes";
      });
  },
});

export const { setPage, setSelectedHero } = heroesSlice.actions;

export default heroesSlice.reducer;
