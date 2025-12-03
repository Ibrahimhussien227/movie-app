import { useSelector } from "react-redux";

import HeaderTitle from "@/components/HeaderTitle";
import MovieCard from "@/components/MovieCard";
import { ImageOff } from "lucide-react";
import type { RootState } from "@/store";

const HomePage = () => {
  const favorites = useSelector(
    (state: RootState) => state.favorites.list
  );

  return (
    <section className="max-w-[940px] mx-auto sm:px-6 px-4">
      <HeaderTitle category="Your Favorites" />
      <div className="flex flex-wrap sm:gap-4 gap-3 justify-center mt-20">
        {favorites.length ? (
          favorites.map((movie) => (
            <div key={movie.id} className="flex flex-col rounded-lg">
              <MovieCard movie={movie} />
            </div>
          ))
        ) : (
          <div className="flex flex-col gap-1 items-center justify-center mt-40">
            <ImageOff color="white" className="size-100" />
            <h3 className="sm:text-2xl xs:text-xl text-lg mt-2 text-gray-50 font-medium">
              Ohh! No Favorites yet!
            </h3>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomePage;
