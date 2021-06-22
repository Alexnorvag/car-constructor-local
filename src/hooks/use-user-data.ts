import { useCallback } from "react";
import userActions from "../utils/getUserData";

export const useUserData = () => {
  const { user_profile, ...userData } = userActions.getUserData();

  const logout = useCallback(() => userActions.logout(), []);

  return {
    ...user_profile,
    ...userData,
    logout,
  };
};
