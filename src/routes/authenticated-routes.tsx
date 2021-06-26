import { RouteProps, Redirect } from "react-router";

import Dashboard from "../pages/Dashboard";
import CDN from "../pages/Dashboard/CDN";
import Content from "../pages/Dashboard/Content";
import ROD from "../pages/Dashboard/ROD";
import NotFound from "../pages/NotFound";
import Review from "../pages/Review";
import Gallery from "../pages/Review/Gallery/Gallery";
import Presentation from "../pages/Review/Presentation/Presentation";
import Route from "./types";

const authenticatedRoutes: RouteProps[] = [
  // {
  //   path: Route.DASHBOARD_REVIEW,
  //   component: Review,
  // },
  {
    path: Route.DASHBOARD_CONTENT,
    component: Content,
  },
  {
    path: Route.DASHBOARD_CDN,
    component: CDN,
  },
  {
    path: Route.DASHBOARD_ROD,
    component: ROD,
  },
  {
    path: Route.DASHBOARD,
    component: Dashboard,
  },
  {
    path: Route.REVIEW_GALLERY,
    component: Gallery,
  },
  {
    path: Route.REVIEW_PRESENTATION,
    component: Presentation,
  },
  {
    path: Route.REVIEW,
    component: Review,
  },
  {
    path: Route.NOT_FOUND,
    component: NotFound,
    exact: true,
  },
  {
    path: Route.ALL,
    render: () => <Redirect to={Route.NOT_FOUND} />,
  },
];

export default authenticatedRoutes;
