import React, { FC, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Route from "../routes/types";
import { useUserData } from "../hooks";
import { UNAUTHORIZED_ROUTES } from "../routes/constants";
import { isRoute } from "../utils";

interface RedirectContainerProps {}

const RedirectContainer: FC<RedirectContainerProps> = ({ children }) => {
  const history = useHistory();

  const { isLoggedIn, homeUrl } = useUserData();

  useEffect(() => {
    if (!isLoggedIn) return;
    console.log("LOGGED IN");

    if (isRoute([Route.LOGIN, { path: Route.ROOT, exact: true }]) && homeUrl) {
      history.push(homeUrl);
      return;
    }
  }, [isLoggedIn, homeUrl, history]);

  useEffect(() => {
    if (isLoggedIn) return;
    console.log("NOT LOGGED IN");

    if (isRoute(UNAUTHORIZED_ROUTES)) {
      return;
    }

    history.push(Route.LOGIN);
  }, [isLoggedIn, history]);

  return <>{children}</>;
};

export default RedirectContainer;
