import { configureStore } from "@reduxjs/toolkit";

import favoritesReducer from "./features/favoritesSlice";
import moviesReducer from "./features/movieSlice";
import { movieApi } from "./services/movieApi";

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    movies: moviesReducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
