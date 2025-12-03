import { createSlice } from "@reduxjs/toolkit";

import type { TMDBMovie } from "@/store/types";

export interface FavoritesState {
  list: TMDBMovie[];
}

const loadFromLocalStorage = (): TMDBMovie[] => {
  try {
    return JSON.parse(localStorage.getItem("favorites") || "[]");
  } catch {
    return [];
  }
};

const saveToLocalStorage = (favorites: TMDBMovie[]) => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const initialState: FavoritesState = {
  list: loadFromLocalStorage(),
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite(state, action) {
      const movie: TMDBMovie = action.payload;

      const exists = state.list.some((m) => m.id === movie.id);

      if (exists) {
        state.list = state.list.filter((m) => m.id !== movie.id);
      } else {
        state.list.push(movie);
      }

      state.list = state.list.filter(
        (m, i, arr) => i === arr.findIndex((x) => x.id === m.id)
      );

      saveToLocalStorage(state.list);
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
