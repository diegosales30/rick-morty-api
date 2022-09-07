import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  count: 1,
};

const nextPage = createSlice({
  name: "nextpage",
  initialState: INITIAL_STATE,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },

    decrement: (state) => {
      if (state.count > 1) {
        state.count -= 1;
      }
    },
  },
});
export const { increment, decrement } = nextPage.actions;
export default nextPage;
