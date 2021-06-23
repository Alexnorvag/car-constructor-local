import { RouteProps } from "react-router";

import Dashboard from "../pages/Dashboard";
import Review from "../pages/Review";
import NotFound from "../pages/NotFound";
import Route from "./types";

const authenticatedRoutes: RouteProps[] = [
  {
    path: Route.DASHBOARD,
    component: Dashboard,
  },
  {
    path: Route.DASHBOARD_REVIEW,
    component: Review,
  },
  {
    path: Route.NOT_FOUND,
    component: NotFound,
  },
];

export default authenticatedRoutes;
