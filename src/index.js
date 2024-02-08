import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import matchesReducer from "./redux/slice/matchesSlice";

import App from "./App";

const store = configureStore({
  reducer: {
    matches: matchesReducer,
    // Add other reducers if needed
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
