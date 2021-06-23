import { matchPath } from "react-router-dom";

import { CustomRouteToMatch } from "../types";
import Route from "../routes/types";

const isRouteMatch = (path: string, route: Route | CustomRouteToMatch) =>
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
  // console.log('routeToMatch: ', routeToMatch);
  console.log('route: ', route);
  // console.log('isRouteMatch(routeToMatch, route): ', isRouteMatch(routeToMatch, route));
  if (Array.isArray(route)) {
    return route.some((item: Route | CustomRouteToMatch) =>
      isRouteMatch(routeToMatch, item)
    );
  }

  return isRouteMatch(routeToMatch, route);
};
