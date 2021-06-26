import Route from "../routes/types";

// Routes types
export interface CustomRouteToMatch {
  path: Route;
  exact: boolean;
}

// User types
export interface UserState {
  email: string | null;
  homeUrl: string | null;
  firstname: string | null;
  lastname: string | null;
  avatar: string | null;
  username: string | null;
  permissions: string[];
}

export interface UserProviderState {
  user: UserState;
  setUserData: (userState: UserState) => void;
  clearUserData: () => void;
}
