import React, { createContext, FC, useState } from "react";

type UserType = {
  email?: string;
  firstName?: string;
  lastName?: string;
};

interface UserProviderProps {
  user: UserType;
}

export const userContextDefaultValue: UserProviderProps = {
  user: {
    email: "",
    firstName: "",
    lastName: "",
  },
};

export const UserContext = createContext<UserProviderProps>(
  userContextDefaultValue
);

export const UserProvider: FC<UserProviderProps> = ({ user, children }) => {
  console.log("user: ", user);
  const [currentUser, setCurrentUser] = useState({ user });

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
