import { useCallback, useContext, useState } from "react";

import { loginUser, LoginUserResponse } from "../../../api/loginUser";
import { UserContext } from "../../../context/user";

const useLoginData = () => {
  const { setUserData } = useContext(UserContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const login = useCallback(
    async (email: string, password: string) => {
      setLoading(true);
      setError(null);

      const response: LoginUserResponse | unknown = await loginUser({
        email,
        password,
      });

      const { data, error: resError } = JSON.parse(response as string);
      console.log("data: ", data);
      console.log("error: ", resError);
      setError(resError);
      setLoading(false);
      if (!data) return;

      const {
        user_profile: { firstname, lastname, avatar, username },
        permissions,
      } = data;

      setUserData({
        email,
        homeUrl: "/",
        firstname,
        lastname,
        avatar,
        username,
        permissions,
      });
    },
    [setUserData]
  );

  const toggleIsPasswordShown = useCallback(
    () => setIsPasswordShown((show) => !show),
    []
  );

  const reset = useCallback(() => {
    setEmail("");
    setPassword("");
    setIsPasswordShown(false);
    setLoading(false);
    setError(null);
  }, []);

  return {
    email,
    password,
    isPasswordShown,
    loading,
    error,

    login,
    setEmail,
    setPassword,
    toggleIsPasswordShown,
    reset,
  };
};

export default useLoginData;
