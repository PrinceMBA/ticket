import { createSlice } from "@reduxjs/toolkit";

const matchesSlice = createSlice({
  name: "matches",
  initialState: {
    selectedMatches: [],
  },
  reducers: {
    addSelectedMatch: (state, action) => {
      state.selectedMatches.push(action.payload);
    },
    removeSelectedMatch: (state, action) => {
      state.selectedMatches = state.selectedMatches.filter(
        (match) => match.id !== action.payload.id
      );
    },
  },
});

export const { addSelectedMatch, removeSelectedMatch } = matchesSlice.actions;
export const selectSelectedMatches = (state) => state.matches.selectedMatches;

export default matchesSlice.reducer;
