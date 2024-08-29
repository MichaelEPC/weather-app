import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import Home from "../views/Home";

export const AppUI = () => {
  const AppRoutes = () => {
    const routes = useRoutes([{ path: "/weather-app", element: <Home /> }]);
    return routes;
  };
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};
