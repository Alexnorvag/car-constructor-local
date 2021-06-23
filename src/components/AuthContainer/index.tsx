import { makeStyles } from "@material-ui/core";
import createStyles from "@material-ui/styles/createStyles";
import React, { FC } from "react";

const useStyles = makeStyles(() =>
  createStyles({
    wrapper: {
      width: "100%",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);

interface AuthContainerProps {}

const AuthContainer: FC<AuthContainerProps> = (
  {
    //   error,
    //   loading,
    //   loadingText,
    //   successText,
    //   description,
    //   footer,
    //   inputs,
    //   buttons,
    //   inputSpacing,
    //   onSubmit,
  }
) => {
  const classes = useStyles();

  return <div className={classes.wrapper}>AuthContainer</div>;
};

export default AuthContainer;
