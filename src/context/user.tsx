import React, { createContext, FC, useEffect, useState } from "react";

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
  },
  setUserData: (): void => {
    throw new Error("setContext function must be overridden");
  },
  clearUserData: (): void => {},
};

export const UserContext = createContext<UserProviderState>(initialState);

export const UserProvider: FC = ({ children }) => {
  const [user, setUser] = useState<UserState>(initialState.user);
  // console.log("[UserProvider] -> user: ", user);

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

  console.log("TODO: CHANGE TO IF USER FINDED RERENDER ", user);
  // Check if user exist in the local store
  useEffect(() => {
    const userState = localStore.loadState("state");

    setUser(userState?.user);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUserData, clearUserData }}>
      {children}
    </UserContext.Provider>
  );
};
