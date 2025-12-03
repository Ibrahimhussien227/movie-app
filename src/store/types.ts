export type MediaType = "movie";

export interface TMDBMovie {
  id: number;
  original_title?: string;
  name?: string;
  overview: string;
  poster_path: string | null;
  release_date?: string;
  first_air_date?: string;
  vote_average: number;
  title?: string;
  original_name?: string;
}

export interface TMDBSearchResponse {
  page: number;
  results: TMDBMovie[];
  total_pages: number;
  total_results: number;
}

export interface TMDBFULLDETAILS {
  imdb_id: string;
  original_name?: string;
  first_air_date?: string;
  adult: boolean;
  backdrop_path: string;

  genres: { id: number; name: string }[];

  origin_country?: string[];
  original_language?: string;

  overview: string;
  popularity?: number;
  poster_path: string;

  release_date?: string;
  revenue?: number;

  status?: string;
  tagline?: string;
  title?: string;
}
