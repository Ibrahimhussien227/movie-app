import { Outlet, useParams } from "react-router";

import { validCategories } from "@/constants";
import NotFound from "@/pages/NotFound";

const CategoryGuard = () => {
  const { category } = useParams();

  if (!validCategories.includes(String(category))) {
    return <NotFound />;
  }

  return <Outlet />;
};

export default CategoryGuard;
