import React from "react";
import { Routes, Route } from "react-router";

import NotFound from "@/pages/NotFound";
import DetailsPage from "@/pages/DetailsPage";
import CategoryPage from "@/pages/CategoryPage";
import HomePage from "@/pages/HomePage";
import Layout from "@/layouts/Layout";
import CategoryGuard from "./layouts/CategoryGuardLayout";

export const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route element={<CategoryGuard />}>
          <Route path=":category" element={<CategoryPage />} />
          <Route path=":category/:id" element={<DetailsPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
