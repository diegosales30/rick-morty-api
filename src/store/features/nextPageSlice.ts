import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  count: 1,
};

const nextPage = createSlice({
  name: "nextpage",
  initialState: INITIAL_STATE,
  reducers: {
    increment: (state) => {
      state.count += 1;
      //console.log(state.count);
    },

    decrement: (state) => {
      if (state.count > 1) {
        state.count -= 1;
        //console.log(state.count);
      }
    },
  },
});
export const { increment, decrement } = nextPage.actions;
export default nextPage;
