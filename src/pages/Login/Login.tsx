import { FC, FormEvent } from "react";
// import Box from "@material-ui/core/Box";
// import { makeStyles } from "@material-ui/core/styles";

// import Header from "../../components/Header";
// import LoginForm from "../../components/LoginForm";
// import Footer from "../../components/Footer";
import AuthContainer from "../../components/AuthContainer";
import useLoginData from "./state/hooks";
import { useEffect } from "react";
import { useCallback } from "react";
import {
  AuthContainerButtonProps,
  AuthContainerInputProps,
} from "../../components/AuthContainer/state/types";
import Route from "../../routes/types";
import { makeStyles, Box } from "@material-ui/core";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LoginForm from "../../components/LoginForm";
import { SendIcon } from "../../assets/icons/SendIcon";
import { UserAddIcon } from "../../assets/icons/UserAddIcon";

const useStyles = makeStyles({
  root: {
    background: "#000",
    minHeight: "100vh",
  },
});

const footer = {
  link: Route.FORGOT,
  linkText: "Forgot Password?",
};

export const Login: FC = () => {
  const classes = useStyles();
  const {
    email,
    password,
    isPasswordShown,
    error,
    loading,
    setEmail,
    setPassword,
    toggleIsPasswordShown,
    login,
    reset,
  } = useLoginData();

  const inputs: AuthContainerInputProps[] = [
    {
      id: "email",
      label: "Email",
      value: email,
      autoComplete: "email",
      onChange: setEmail,
    },
    {
      id: "password",
      label: "Password",
      value: password,
      autoComplete: "password",
      onChange: setPassword,
      type: isPasswordShown ? "text" : "password",
      isToggled: isPasswordShown,
      onToggle: toggleIsPasswordShown,
    },
  ];

  const buttons: AuthContainerButtonProps[] = [
    { link: Route.SIGNUP, icon: <UserAddIcon />, text: "sign up" },
    {
      primary: true,
      id: "submit",
      type: "submit",
      icon: <SendIcon />,
      text: "log in",
    },
  ];

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      console.log("fqwkfpoqwkfopqwof");
      e.preventDefault();
      if (!email || !password) return;

      login(email, password);
    },
    [email, password, login]
  );

  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);

  return (
    <>
      <AuthContainer
        error={error}
        loading={loading}
        loadingText="Checking credentials"
        footer={footer}
        inputs={inputs}
        buttons={buttons}
        onSubmit={handleSubmit}
        inputSpacing={15}
        description={
          <>
            <span>Welcome back!</span>
            <span>Log in to proceed to car-constructor</span>
          </>
        }
      />
      {/* <Box className={classes.root} display="flex" flexDirection="column">
        <Header />
        <LoginForm />
        <Footer />
      </Box> */}
    </>
  );
};
