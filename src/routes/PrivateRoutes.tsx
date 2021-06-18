import { Box } from "@material-ui/core";
import { FC, useEffect, Suspense, lazy } from "react";
import { Switch, Route, useHistory, useLocation, Link } from "react-router-dom";
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

const Nav = () => {
  return (
    <nav className="Nav">
      <div className="Nav__container">
        {/* <Link to="/" className="Nav__brand">
          <img src="logo.svg" className="Nav__logo" />
        </Link> */}

        <div className="Nav__right">
          <ul className="Nav__item-wrapper">
            <li className="Nav__item">
              <Link className="Nav__link" to="/path1">
                Link 1
              </Link>
            </li>
            <li className="Nav__item">
              <Link className="Nav__link" to="/path2">
                Link 2
              </Link>
            </li>
            <li className="Nav__item">
              <Link className="Nav__link" to="/path3">
                Link 3
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
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
    <Box display="flex">
      <div
        style={{
          height: 400,
          width: 200,
          background: "red",
        }}
      >
        <Nav />
      </div>
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
    </Box>
  );
};
