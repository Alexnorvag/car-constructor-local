export type LoginUserResponse = {
  data: {
    user_profile: {
      username: string;
      firstname: string;
      lastname: string;
      avatar: string;
    };
    permissions: string[];
  };
  error: string | null;
};

interface loginUserProps {
  email: string;
  password: string;
}

export const loginUser = ({
  email,
  password,
}: loginUserProps): Promise<string | null> => {
  return new Promise((resolve) =>
    setTimeout(() => {
      const invalidCredentials =
        process.env.REACT_APP_EMAIL !== email ||
        process.env.REACT_APP_PASSWORD !== password;

      if (invalidCredentials) {
        resolve(
          JSON.stringify({
            error: "Email or Password does not exist. Please, try again.",
          })
        );
      }

      resolve(
        JSON.stringify({
          data: {
            user_profile: {
              username: "John Doe",
              firstname: "John",
              lastname: "Doe",
              avatar: "",
            },
            permissions: ["/ds", "/review"],
          },
        })
      );
    }, 700)
  );
};
