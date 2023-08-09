import { configureStore } from "@reduxjs/toolkit";
import { api } from "./apiSlice";

const rootReducer = {
  [api.reducerPath]: api.reducer,
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
