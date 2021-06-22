import { matchPath } from "react-router-dom";

import { CustomRouteToMatch } from "../types";
import Route from "../routes/types";

const isRouteMath = (path: string, route: Route | CustomRouteToMatch) =>
  !!matchPath(path, {
    path: (route as CustomRouteToMatch)?.path ?? route,
    exact: (route as CustomRouteToMatch)?.exact ?? undefined,
    strict: false,
  });

export const isRoute = (
  route: Route | CustomRouteToMatch | Array<Route | CustomRouteToMatch>,
  customRoute?: string
) => {
  const routeToMatch = customRoute ?? window.location.pathname;

  if (Array.isArray(route)) {
    return route.some((item: Route | CustomRouteToMatch) =>
      isRouteMath(routeToMatch, item)
    );
  }

  return isRouteMath(routeToMatch, route);
};
