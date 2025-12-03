import { useParams } from "react-router";
import { Loader } from "lucide-react";

import Genre from "@/components/Genre";
import { useGetMovieByIdQuery } from "@/store/services/movieApi";
import Error from "@/components/Error";

const DetailsPage = () => {
  const { category, id } = useParams();
  const { data, isFetching, isError, isLoading } =
    useGetMovieByIdQuery({
      category: String(category),
      id: String(id),
    });

  if (isFetching || isLoading)
    return (
      <div className="my-4 h-screen flex items-center justify-center">
        <Loader className="mx-auto text-gray-300 w-5 h-5 animate-spin" />
      </div>
    );

  const backgroundStyle = {
    backgroundImage: `linear-gradient(to top, rgba(0,0,0), rgba(0,0,0,0.85),rgba(0,0,0,0.8) ,rgba(0,0,0,0.4)),url('https://image.tmdb.org/t/p/original/${data?.poster_path}'`,
  };

  if (isError || !data)
    return <Error error="Something went wrong!" />;

  return (
    <section
      className="w-full bg-cover h-screen overflow-hidden items-center justify-center flex gap-10 sm:flex-row flex-col"
      style={backgroundStyle}
    >
      <img
        width={400}
        height={380}
        src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
        alt={data.title ?? data.original_name}
        className="object-cover rounded-xl shadow-lg"
      />
      <div className="text-gray-300 max-w-[80vw] sm:max-w-135 flex flex-col gap-5 mb-8">
        <h2 className="text-4xl">
          {data.title ?? data.original_name}
        </h2>

        <div className="flex flex-row items-center gap-5">
          {data.genres.map((genre) => {
            return <Genre key={genre.id} name={genre.name} />;
          })}
        </div>

        <p className="text-2xl">
          {data.overview.length > 280
            ? `${data.overview.slice(0, 280)}...`
            : data.overview}
        </p>

        <p className=" text-gray-500 text-lg">
          {data.release_date ?? data.first_air_date}
        </p>
      </div>
    </section>
  );
};

export default DetailsPage;
