import { createSlice } from "@reduxjs/toolkit";

import type { TMDBMovie } from "../types";

const initialState: {
  search: string;
  page: number;
  movies: TMDBMovie[];
  sortBy: "year" | "alphabet" | null;
} = {
  search: "",
  page: 1,
  movies: [],
  sortBy: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
      state.page = 1;
      state.movies = [];
    },
    nextPage(state) {
      state.page += 1;
    },
    appendMovies(state, action) {
      const incoming = action.payload;

      const merged = [...state.movies, ...incoming];

      const unique = merged.filter(
        (m, index, self) =>
          index === self.findIndex((x) => x.id === m.id)
      );

      state.movies = unique;
    },
    resetMovies: (state) => {
      state.movies = [];
      state.page = 1;
    },
    setSort(state, action: { payload: "year" | "alphabet" | null }) {
      state.sortBy = action.payload;

      if (state.sortBy === "year") {
        state.movies = [...state.movies].sort((a, b) => {
          const dateA = a.release_date || a.first_air_date || "";
          const dateB = b.release_date || b.first_air_date || "";

          return (
            new Date(dateA).getTime() - new Date(dateB).getTime()
          );
        });
      }

      if (state.sortBy === "alphabet") {
        state.movies = [...state.movies].sort((a, b) => {
          const titleA = a.title || a.original_name || "";
          const titleB = b.title || b.original_name || "";
          return titleA.localeCompare(titleB);
        });
      }
    },
  },
});

export const {
  setSearch,
  nextPage,
  appendMovies,
  resetMovies,
  setSort,
} = moviesSlice.actions;
export default moviesSlice.reducer;
