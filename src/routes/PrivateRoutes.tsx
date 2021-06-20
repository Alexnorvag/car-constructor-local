import { FC, useEffect, Suspense, lazy } from "react";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";

import Loader from "../components/Loader";

const privateRoutes: string[] = ["/ds", "review"];

const DashboardPage = lazy(() => import("../pages/Dashboard"));
const ReviewPage = lazy(() => import("../pages/Review"));

const Page1 = () => {
  return <div>Page 1</div>;
};

const Page2 = () => {
  return <div>Page 2</div>;
};

const Page3 = () => {
  return <div>Page 3</div>;
};

export const PrivateRoutes: FC = () => {
  const history = useHistory();
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("is_logged_in");

  useEffect(() => {
    if (!isLoggedIn && privateRoutes.includes(location.pathname)) {
      return history.replace("/login");
    }
  }, [history, isLoggedIn, location]);

  if (!isLoggedIn) return null;

  return (
    <Switch>
      <Route exact path="/ds">
        <Suspense fallback={<Loader />}>
          <DashboardPage />
        </Suspense>
      </Route>
      <Route path="/ds/review">
        <Suspense fallback={<Loader />}>
          <ReviewPage />
        </Suspense>
      </Route>
      <Route exact component={Page1} path="/path1" />
      <Route exact component={Page2} path="/path2" />
      <Route exact component={Page3} path="/path3" />
    </Switch>
  );
};
