import { RouteProps } from "react-router-dom";

import Route from "./types";
import LoginPage from "../pages/Login";
import AboutPage from "../pages/About";
import LayoutWrapper from "../layout/LayoutWrapper";

const mainRoutes: RouteProps[] = [
  {
    path: Route.LOGIN,
    component: LoginPage,
  },
  {
    path: Route.ABOUT,
    component: AboutPage,
  },
  {
    path: Route.ROOT,
    component: LayoutWrapper,
  },
];

export default mainRoutes;
