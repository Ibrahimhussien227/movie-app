import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router";
import { Loader } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import HeaderTitle from "@/components/HeaderTitle";
import SearchBar from "@/components/SearchBar";
import MovieCard from "@/components/MovieCard";
import SkeletonMovieCard from "@/components/loader/SkeletonMovieCard";
import {
  appendMovies,
  nextPage,
  resetMovies,
  setSearch,
  setSort,
} from "@/store/features/movieSlice";
import { useSearchMoviesQuery } from "@/store/services/movieApi";
import type { RootState } from "@/store";
import { Button } from "@/components/ui/button";
import Error from "@/components/Error";

const CategoryPage = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search") || "";

  const { page, movies, sortBy } = useSelector(
    (state: RootState) => state.movies
  );

  const { data, isLoading, isFetching, isError } =
    useSearchMoviesQuery({
      page,
      query: search,
      category: String(category),
    });

  useEffect(() => {
    dispatch(setSearch(search));
  }, [search, dispatch]);

  useEffect(() => {
    dispatch(resetMovies());
  }, [category, dispatch]);

  useEffect(() => {
    if (data?.results) {
      dispatch(appendMovies(data.results));
    }
  }, [data, dispatch]);

  if (isError) return <Error error="Something went wrong!" />;

  return (
    <section className="max-w-[940px] mx-auto sm:px-6 px-4">
      <HeaderTitle category={String(category)} />
      <SearchBar />
      <div className="flex gap-2 my-4 text-white justify-end">
        <Button
          onClick={() => dispatch(setSort("year"))}
          disabled={sortBy === "year"}
          className={
            sortBy === "year"
              ? "opacity-50 cursor-not-allowed"
              : " cursor-pointer"
          }
        >
          Sort by Year
        </Button>
        <Button
          onClick={() => dispatch(setSort("alphabet"))}
          disabled={sortBy === "alphabet"}
          className={
            sortBy === "alphabet"
              ? "opacity-50 cursor-not-allowed"
              : " cursor-pointer"
          }
        >
          Sort A → Z
        </Button>
      </div>

      <div className="flex flex-wrap sm:gap-4 gap-3 justify-center">
        {isLoading
          ? Array.from({ length: 20 }).map((_, i) => (
              <SkeletonMovieCard key={i} />
            ))
          : movies?.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                category={String(category)}
              />
            ))}
      </div>

      {isFetching ? (
        <div className="my-4">
          <Loader className="mx-auto text-gray-300 w-5 h-5 animate-spin" />
        </div>
      ) : (
        <div className="w-full flex items-center justify-center">
          <Button
            type="button"
            onClick={() => {
              dispatch(nextPage());
            }}
            disabled={isFetching}
            className="button-load-more rounded-full p-6"
          >
            Load more
          </Button>
        </div>
      )}
    </section>
  );
};

export default CategoryPage;
