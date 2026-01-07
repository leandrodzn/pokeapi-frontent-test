import { configureStore } from "@reduxjs/toolkit";

import pokemonReducer from "./pokemon";

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});

// Infer the types of the store's state and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
