import { TriangleAlert } from "lucide-react";

interface ErrorProps {
  error: string;
}

const Error = ({ error }: ErrorProps) => {
  return (
    <div className="relative dark:bg-black bg-mainColor top-0 left-0 w-screen flex justify-center items-center">
      <div className="flex flex-row gap-2 items-end ">
        <TriangleAlert className="text-[#ff0000] text-[32px]" />
        <p className=" font-roboto dark:text-gray-300 text-gray-900">
          {error}
        </p>
      </div>
    </div>
  );
};

export default Error;
