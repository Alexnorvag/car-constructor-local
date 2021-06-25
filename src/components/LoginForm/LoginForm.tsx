import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { FC, useCallback, useContext, useState } from "react";
import { loginUser, LoginUserResponse } from "../../api/loginUser";
import { SendIcon } from "../../assets/icons/SendIcon";
import { UserContext } from "../../context/user";
import FormInput from "../FormInput";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: "100%",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  textInput: {
    minWidth: 360,
  },
  link: {
    color: theme.palette.common.white,
    textDecoration: "none",
  },
  errorFeedback: {
    marginTop: theme.spacing(2),
    color: "#d32f2f",
  },
}));

type FormState = {
  email: string;
  password: string;
  errors: Omit<FormState, "errors"> & { internalError: string };
};

export const LoginForm: FC = () => {
  const classes = useStyles();

  const [loading, setLoading] = useState<boolean>(false);
  const [formState, setFormState] = useState<FormState>({
    email: "",
    password: "",
    errors: {
      email: "",
      password: "",
      internalError: "",
    },
  });
  const user = useContext(UserContext);

  const {
    email,
    password,
    errors: { email: emailError, password: passwordError, internalError },
  } = formState;

  const handleInputChange = useCallback(
    ({ target: { id, value } }) => {
      setFormState({ ...formState, [id]: value });
    },
    [formState]
  );

  const validateValues = ({
    email,
    password,
  }: Pick<FormState, "email" | "password">) => {
    setFormState({
      ...formState,
      errors: { email: "", password: "", internalError: "" },
    });

    if (!email || !password) {
      return setFormState({
        ...formState,
        errors: {
          ...formState.errors,
          internalError: "Please enter Email and Password",
        },
      });
    }

    if (!email || !email.includes("@")) {
      return setFormState({
        ...formState,
        errors: {
          ...formState.errors,
          email: "Invalid Email",
        },
      });
    }

    if (!password || password.length < 6) {
      return setFormState({
        ...formState,
        errors: {
          ...formState.errors,
          password: "Password should be 6 symbols",
        },
      });
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setLoading(true);

    await validateValues({ email, password });

    if (![email, password].some((v) => v.length)) return;

    try {
      const response: LoginUserResponse | unknown = await loginUser();

      if (response) {
        const invalidCredentials =
          process.env.REACT_APP_EMAIL !== email ||
          process.env.REACT_APP_PASSWORD !== password;

        if (invalidCredentials) {
          setLoading(false);

          return setFormState({
            ...formState,
            errors: {
              ...formState.errors,
              internalError: "Please enter Email and Password",
            },
          });
        }

        setLoading(false);

        const {
          data: {
            user_profile: { firstname, lastname, avatar, username },
          },
        } = JSON.parse(response as string);

        user.setUserData({
          email,
          homeUrl: "/",
          firstname,
          lastname,
          avatar,
          username,
          permissions: ["/ds", "/review"],
        });
      }
    } catch (error) {
      console.error(error);

      setLoading(false);

      setFormState({
        ...formState,
        errors: {
          ...formState.errors,
          internalError: "Please enter Email and Password",
        },
      });
    }
  };

  return (
    <Box
      className={classes.root}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexGrow={1}
    >
      <form onSubmit={handleSubmit} className={classes.form} noValidate>
        <Box mb={2}>
          <FormInput
            error={Boolean(emailError)}
            value={email}
            className={classes.textInput}
            id="email"
            label="Email"
            variant="outlined"
            color="secondary"
            helperText={emailError}
            onChange={handleInputChange}
          />
        </Box>
        <Box mb={2}>
          <FormInput
            error={Boolean(passwordError)}
            value={password}
            className={classes.textInput}
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            color="secondary"
            helperText={passwordError}
            onChange={handleInputChange}
          />
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <a className={classes.link} href="#reset-password">
            reset password
          </a>
          <IconButton type="submit" disabled={loading}>
            <SendIcon />
          </IconButton>
        </Box>

        <Box className={classes.errorFeedback}>{internalError}</Box>
      </form>
    </Box>
  );
};
