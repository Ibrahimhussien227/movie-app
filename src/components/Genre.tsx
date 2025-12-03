interface GenreProps {
  name: string;
}

const Genre = ({ name }: GenreProps) => {
  return (
    <span className="border sm:py-1 py-1 sm:px-3 px-[10px] rounded-full text-gray-300 hover:bg-gray-200 transition duration-300 hover:text-black ease-in-out cursor-default">
      {name}
    </span>
  );
};

export default Genre;
