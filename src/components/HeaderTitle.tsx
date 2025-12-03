interface HeaderTitleProps {
  category: string;
}

const HeaderTitle = ({ category }: HeaderTitleProps) => {
  return (
    <div className="flex items-center justify-center mt-15">
      <h2 className="text-white font-nunito capitalize font-semibold md:text-xl sm:text-lg  ">
        {category}
      </h2>
    </div>
  );
};

export default HeaderTitle;
