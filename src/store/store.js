import { configureStore } from "@reduxjs/toolkit";
import matchesReducer from "../slices/matchesSlice";

const store = configureStore({
  reducer: {
    matches: matchesReducer,
    // Add other reducers if needed
  },
});

export default store;
