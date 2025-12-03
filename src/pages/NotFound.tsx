import { ImageOff } from "lucide-react";

const NotFound = () => {
  return (
    <section className="w-screen h-screen flex items-center justify-center bg-blackr">
      <div className="flex flex-col gap-1 items-center font-robotoCondensed">
        <ImageOff color="white" size={500} />
        <h3 className="sm:text-2xl xs:text-xl text-lg mt-2 text-gray-50 font-medium">
          Ohh! Page Not found{" "}
        </h3>
        <p className="sm:text-[16.75px] text-[14px] text-gray-300 ">
          We can't seem to find the page you are looking for
        </p>
      </div>
    </section>
  );
};

export default NotFound;
