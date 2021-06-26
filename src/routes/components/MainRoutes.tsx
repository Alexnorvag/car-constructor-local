import React, { FC } from "react";
import { Route, RouteProps, Switch } from "react-router";

import mainRoutes from "../main-routes";

const renderedRoutes = mainRoutes.map((route: RouteProps) => (
  <Route key={route.path as string} {...route} />
));

const MainRoutes: FC = () => <Switch>{renderedRoutes}</Switch>;

export default MainRoutes;
