import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Starship } from "../types/Starship";
import { getStarships } from "../api/swApi";

interface StarshipsState {
  starships: Starship[];
  selectedStarshipTitles: string[];
}

const initialState: StarshipsState = {
  starships: [],
  selectedStarshipTitles: [],
};

// Fetch Starships from the API
export const fetchStarships = createAsyncThunk(
  "Starships/fetchStarships",
  async () => {
    const response: Starship[] = await getStarships();

    return response;
  }
);

const StarshipsSlice = createSlice({
  name: "Starships",
  initialState,
  reducers: {
    setSelectedStarship(state, action) {
      const StarshipIds: number[] = action.payload;
      state.selectedStarshipTitles = state.starships
        .filter((Starship) => StarshipIds.includes(Starship.id))
        .map((Starship) => Starship.name);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStarships.fulfilled, (state, action) => {
      state.starships = action.payload;
    });
  },
});

export const { setSelectedStarship } = StarshipsSlice.actions;

export default StarshipsSlice.reducer;
