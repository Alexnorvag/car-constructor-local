import { useCallback, useContext } from "react";

import { UserContext } from "../context/user";

export const useUserData = () => {
  const { user, clearUserData } = useContext(UserContext);
  const isLoggedIn = !!user?.email;

  const logout = useCallback(() => clearUserData(), [clearUserData]);

  return {
    ...user,
    isLoggedIn,
    logout,
  };
};
