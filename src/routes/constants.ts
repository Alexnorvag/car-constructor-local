import Route, { DashboardRoutes } from "./types";

export const PRIVATE_ROUTES = [Route.DASHBOARD, Route.REVIEW];
export const UNAUTHORIZED_ROUTES = [Route.LOGIN, Route.ABOUT];

export const DASHBOARD_ROUTES: DashboardRoutes[] = [
  Route.DASHBOARD,
  Route.DASHBOARD_CONTENT,
  Route.DASHBOARD_CDN,
  Route.DASHBOARD_ROD,
  Route.REVIEW,
];
