import { configureStore } from "@reduxjs/toolkit";

import characterApi from "./features/characterSlice";
import nextPage from "./features/nextPageSlice";

const store = configureStore({
  reducer: {
    nextpage: nextPage.reducer,
    [characterApi.reducerPath]: characterApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(characterApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
