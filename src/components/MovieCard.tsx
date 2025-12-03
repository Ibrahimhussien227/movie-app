import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Airplay, Heart, ImageOff } from "lucide-react";

import type { RootState } from "@/store";
import type { TMDBMovie } from "@/store/types";
import { toggleFavorite } from "@/store/features/favoritesSlice";

interface MovieCardProps {
  movie: TMDBMovie;
  category?: string;
}

const MovieCard = ({ movie, category = "movie" }: MovieCardProps) => {
  const {
    poster_path,
    original_title,
    id,
    release_date,
    first_air_date,
    name,
  } = movie;

  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favorites.list
  );

  const isFav = favorites.some((f) => f.id === id);
  const title = original_title ?? name;
  const releaseDate = release_date ?? first_air_date;

  return (
    <div className="flex flex-col rounded-lg">
      <Link
        to={`/${category}/${id}`}
        className="bg-[#1f1f1f] rounded-lg relative group select-none overflow-hidden group"
      >
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt={title}
            className="sm:w-70 w-full h-full sm:h-105 object-cover rounded-lg drop-shadow-md shadow-md group-hover:shadow-none group-hover:drop-shadow-none transition-all duration-300 ease-in-out group-hover:scale-105"
          />
        ) : (
          <ImageOff className="sm:w-70 w-130 h-105 sm:h-105 object-cover rounded-lg drop-shadow-md shadow-md group-hover:shadow-none group-hover:drop-shadow-none transition-all duration-300 ease-in-out group-hover:scale-105 text-white" />
        )}
        <div className="absolute top-0 left-0 w-full h-full group-hover:opacity-100 opacity-0 bg-[rgba(0,0,0,0.6)] transition-all duration-300 rounded-lg flex items-center justify-center">
          <div className="xs:text-[48px] text-[42px] scale-[0.4] group-hover:scale-100 transition-all duration-300 ">
            <Airplay color="red" />
          </div>
        </div>
      </Link>
      <div className="px-3 pt-3 flex flex-row justify-between items-center">
        <div className="">
          <h4 className="text-white text-lg font-medium truncate max-w-[150px]">
            {title}
          </h4>
          <p className="text-gray-400">{releaseDate}</p>
        </div>
        <Heart
          className="cursor-pointer"
          fill={isFav ? "red" : ""}
          color={isFav ? "red" : "white"}
          onClick={() => dispatch(toggleFavorite(movie))}
        />
      </div>
    </div>
  );
};

export default MovieCard;
