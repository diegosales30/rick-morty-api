import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  css: "white",
  name: "dark",
};

const darkMode = createSlice({
  name: "darkmode",
  initialState: INITIAL_STATE,
  reducers: {
    toggleMode: (state) => {
      state.css = state.css === "white" ? "black" : "white";
      state.name =
        state.css === "white" ? (state.name = "dark") : (state.name = "light");
    },
  },
});
export const { toggleMode } = darkMode.actions;
export default darkMode;
