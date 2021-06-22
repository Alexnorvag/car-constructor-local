import localStore from "./localstorage";

const getUserData = () => {
  const userData = localStore.loadState("state");

  return { ...userData?.user };
};

const logout = () => {
  localStore.saveState(null);
};

const userActions = {
  getUserData,
  logout,
};

export default userActions;
