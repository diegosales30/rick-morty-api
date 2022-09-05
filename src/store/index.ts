import { configureStore } from "@reduxjs/toolkit";

import characterApi from "./features/characterSlice";

export const store = configureStore({
  reducer: {
    [characterApi.reducerPath]: characterApi.reducer,
  },
});
