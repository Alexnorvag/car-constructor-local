import { FC, Suspense, lazy, useEffect } from "react";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import Loader from "../components/Loader";

const LoginPage = lazy(() => import("../pages/Login"));

export const PublicRoutes: FC = () => {
  const { pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("is+logged_in");

    if (isLoggedIn && pathname.includes("/login")) {
      history.goBack();
    }
  }, [pathname, history]);

  return (
    <Switch>
      <Route exact path="/">
        <Suspense fallback={<Loader />}>
          <div>HOME</div>
        </Suspense>
      </Route>

      <Route path="/login">
        <Suspense fallback={<Loader />}>
          <LoginPage />
        </Suspense>
      </Route>
    </Switch>
  );
};
