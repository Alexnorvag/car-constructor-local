export type LoginUserResponse = {
  data: {
    user_profile: {
      username: string,
      firstname: string,
      lastname: string,
      avatar: string,
    },
    is_logged_in: boolean,
  },
};

export const loginUser = () =>
  new Promise((resolve) =>
    setTimeout(
      () =>
        resolve(
          JSON.stringify({
            data: {
              user_profile: {
                username: "John Doe",
                firstname: "John",
                lastname: "Doe",
                avatar: "",
              },
              is_logged_in: true,
            },
          }),
        ),
      700,
    ),
  );
