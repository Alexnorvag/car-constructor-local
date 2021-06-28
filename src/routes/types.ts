enum Route {
  ROOT = "/",

  LOGIN = "/login",
  ABOUT = "/about",
  SIGNUP = "/signup",
  FORGOT = "/forgot",

  DASHBOARD = "/ds",
  DASHBOARD_CONTENT = "/ds/content",
  DASHBOARD_CDN = "/ds/cdn",
  DASHBOARD_ROD = "/ds/rod",

  REVIEW = "/review",
  REVIEW_PRESENTATION = "/review/presentation",
  REVIEW_GALLERY = "/review/gallery",

  NOT_FOUND = "/page-not-found",
  ALL = "*",
}

export default Route;

export type DashboardRoutes = Extract<
  Route,
  | Route.DASHBOARD
  | Route.DASHBOARD_CONTENT
  | Route.DASHBOARD_CDN
  | Route.DASHBOARD_ROD
  | Route.REVIEW
>;

export type ReviewRoutes = Extract<
  Route,
  | Route.REVIEW
  | Route.REVIEW_GALLERY
  | Route.REVIEW_PRESENTATION
  | Route.DASHBOARD
>;

export type ReviewGalleryRoutes = Extract<
  Route,
  Route.REVIEW_PRESENTATION | Route.DASHBOARD
>;

export type ReviewPresentationRoutes = Extract<
  Route,
  Route.REVIEW_GALLERY | Route.DASHBOARD
>;
