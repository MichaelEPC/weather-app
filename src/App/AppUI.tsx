import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import Home from "../views/Home";

export const AppUI = () => {
  const AppRoutes = () => {
    const routes = useRoutes([{ path: "/", element: <Home /> }]);
    return routes;
  };
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};
