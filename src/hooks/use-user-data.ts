import { useCallback, useContext } from "react";

import { UserContext } from "../context/user";
import Route from "../routes/types";
import { isRoute } from "../utils";

export const useUserData = () => {
  const { user, clearUserData } = useContext(UserContext);
  const isLoggedIn = !!user?.email;

  const logout = useCallback(() => clearUserData(), [clearUserData]);

  const hasRoutePermissions = (route: Route) =>
    user.permissions &&
    user.permissions.some((item: string) => isRoute(route, item));

  return {
    ...user,
    isLoggedIn,

    logout,
    hasRoutePermissions,
  };
};
