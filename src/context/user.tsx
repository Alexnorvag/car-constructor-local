import React, { createContext, FC, useState } from "react";

import Route from "../routes/types";
import { UserProviderState, UserState } from "../types";
import localStore from "../utils/localstorage";

export const initialState: UserProviderState = {
  user: {
    email: null,
    homeUrl: Route.NOT_FOUND,
    firstname: null,
    lastname: null,
    avatar: null,
    username: null,
    permissions: []
  },
  setUserData: (): void => {
    throw new Error("setContext function must be overridden");
  },
  clearUserData: (): void => {},
};

export const UserContext = createContext<UserProviderState>(initialState);

export const UserProvider: FC = ({ children }) => {
  const localUserState = localStore.loadState("state")?.user || initialState;
  const [user, setUser] = useState<UserState>(localUserState);

  const setUserData = (userState: UserState) => {
    setUser(userState);

    localStore.saveState({
      user: {
        ...userState,
      },
    });
  };

  const clearUserData = () => {
    setUser(initialState.user);

    localStore.saveState({ user: initialState.user });
  };

  return (
    <UserContext.Provider value={{ user, setUserData, clearUserData }}>
      {children}
    </UserContext.Provider>
  );
};
