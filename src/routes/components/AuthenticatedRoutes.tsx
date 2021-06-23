import { Switch } from "react-router";
import { Route, RouteProps } from "react-router";
import authenticatedRoutes from "../authenticated-routes";

const renderedRoutes = authenticatedRoutes.map((route: RouteProps) => (
  <Route key={route.path as string} {...route} />
));

const AuthenticatedRoutes = () => <Switch>{renderedRoutes}</Switch>;

export default AuthenticatedRoutes;
