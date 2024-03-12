import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ImgSearchApp } from "./components/ImgSearchApp";
import { UserFavorites } from "./components/UserFavorites";
import { NotFound } from "./components/NotFound";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <ImgSearchApp />,
        errorElement: <NotFound />,
      },
      {
        path: "/userfavorites",
        element: <UserFavorites />,
        errorElement: <NotFound />,
      },
    ],
  },
]);
