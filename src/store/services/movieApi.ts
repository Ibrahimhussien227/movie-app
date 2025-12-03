import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

import type { TMDBFULLDETAILS, TMDBSearchResponse } from "../types";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_API = import.meta.env.VITE_TMDB_API_BASE_URL;

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_API}` }),
  endpoints: (builder) => ({
    searchMovies: builder.query<
      TMDBSearchResponse,
      {
        query: string;
        page: number;
        category: string;
      }
    >({
      query: ({ query, page, category }) => {
        if (!query)
          return `/${category}/popular?&api_key=${API_KEY}&page=${page}`;
        const params = new URLSearchParams({
          api_key: API_KEY,
          query: query,
          page: String(page ?? 1),
        });

        return `/search/${category}?${params.toString()}`;
      },
    }),
    getMovieById: builder.query<
      TMDBFULLDETAILS,
      { id: string; category: string }
    >({
      query: ({ id, category }) =>
        `/${category}/${id}?api_key=${API_KEY}`,
    }),
  }),
});

export const { useSearchMoviesQuery, useGetMovieByIdQuery } =
  movieApi;
