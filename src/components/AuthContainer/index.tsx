import {
  Box,
  Button,
  CircularProgress,
  makeStyles,
  Theme,
} from "@material-ui/core";
import createStyles from "@material-ui/styles/createStyles";
import React, { FC, FormEvent, ReactNode } from "react";
import CheckIcon from "@material-ui/icons/CheckCircleOutlineRounded";
import clsx from "clsx";
import { Link } from "react-router-dom";

import Route from "../../routes/types";
// import Footer from "../Footer";
import {
  AuthContainerButtonProps,
  AuthContainerInputProps,
} from "./state/types";
import { HomeIcon } from "../../assets/icons/HomeIcon";
import AuthContainerFormInputs from "./components/AuthContainerFormInputs";
import AuthContainerFormButtons from "./components/AuthContainerFormButtons";
import Header from "../Header";
import Footer from "../Footer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      background: "#000",
      width: "100%",
      height: "100vh",
    },
    root: {
      display: "flex",
      width: "min(582px, 95%)",
      height: "min(70vh, 512px)",
      // padding: "58px 0",
      alignItems: "center",
      flexDirection: "column",
      color: theme.palette.common.white,
      position: "relative",
      border: "2px solid red",
      // background: "white",
      // borderRadius: 8,
      [theme.breakpoints.down(480)]: {
        justifyContent: "center",
        // padding: "40px 0",
      },
    },
    content: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      width: "min(328px, 90%)",
      height: "100%",
      maxHeight: "100%",
    },
    header: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
    },
    titleWrapper: {
      display: "flex",
    },
    title: {
      fontSize: 30,
      lineHeight: "34px",
    },
    titleIcon: {
      width: 30,
      height: "auto",
      fill: theme.palette.common.white,
    },
    poweredBy: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: 17,
      "& > span": {
        fontSize: 14,
        lineHeight: "19px",
        "&:first-child": {
          fontSize: 11,
          lineHeight: "15px",
        },
      },
    },
    description: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontSize: 14,
      lineHeight: "19px",
    },
    welcomeBack: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      color: theme.palette.primary.main,
    },
    error: {
      height: 19,
      marginTop: 10,
      color: theme.palette.error.dark,
      opacity: 0,
      transition: "opacity .1s ease",
    },
    errorVisible: {
      opacity: 1,
    },
    formWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
      width: "min(328px, 100%)",
      height: "100%",
    },
    formOverlay: {
      top: -5,
      left: -3,
      width: "calc(100% + 6px)",
      height: "calc(100% + 10px)",
      backgroundColor: "#fff",
      position: "absolute",
      zIndex: 10,
    },
    formOverlaySuccess: {
      "& > $formOverlayContent": {
        color: "#59C9A5",
      },
    },
    formOverlayContent: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      "& > span": {
        marginTop: 15,
      },
    },
    formContainer: {
      display: "flex",
      width: "100%",
      maxHeight: 275,
    },
    form: {
      width: "100%",
    },
    hidden: {
      display: "none",
    },
    checkIcon: {
      fontSize: 60,
    },
    footer: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      "& > span": {
        marginRight: 5,
      },
    },
    footerLink: {
      transition: "color .1s ease",
      textDecoration: "none",
      color: theme.palette.primary.light,
      "&:hover": {
        color: theme.palette.primary.main,
      },
    },
  })
);

interface FooterProps {
  text?: string;
  link: Route;
  linkText: string;
}

interface AuthContainerProps {
  loading: boolean;
  loadingText: string;
  successText?: string | null;
  error: string | null;
  description: ReactNode;
  onSubmit?: (e: FormEvent) => void;
  footer: FooterProps;
  inputs?: AuthContainerInputProps[];
  inputSpacing?: number;
  buttons?: AuthContainerButtonProps[];
}

const AuthContainer: FC<AuthContainerProps> = ({
  error,
  loading,
  loadingText,
  successText,
  description,
  footer,
  inputs,
  buttons,
  inputSpacing,
  onSubmit,
}) => {
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="column" className={classes.wrapper}>
      <Header />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexGrow={1}
      >
        <Box className={classes.root}>
          <div className={classes.content}>
            <div className={classes.header}>
              <div className={classes.titleWrapper}>
                <span className={classes.title}>Car Constructor</span>
                <HomeIcon className={classes.titleIcon} />
              </div>

              <div className={classes.poweredBy}>
                <span>Powered By</span>
                <span>Life-Co</span>
              </div>

              <Box className={classes.description}>
                <div className={classes.welcomeBack}>{description}</div>

                <span
                  className={clsx(classes.error, {
                    [classes.errorVisible]: error,
                  })}
                >
                  {error}
                </span>
              </Box>
            </div>

            <Box justifyContent="center" className={classes.formWrapper}>
              <div
                className={clsx(classes.formOverlay, {
                  [classes.hidden]: !loading,
                })}
              >
                <div className={classes.formOverlayContent}>
                  <CircularProgress />
                  <span>{loadingText}</span>
                </div>
              </div>

              <div
                className={clsx(
                  classes.formOverlay,
                  classes.formOverlaySuccess,
                  {
                    [classes.hidden]: !successText,
                  }
                )}
              >
                <div className={classes.formOverlayContent}>
                  <CheckIcon className={classes.checkIcon} />
                  <span>{successText}</span>
                </div>
              </div>

              <div className={classes.formContainer}>
                {(inputs || buttons) && (
                  <form className={classes.form} onSubmit={onSubmit}>
                    {inputs && (
                      <AuthContainerFormInputs
                        inputs={inputs}
                        spacing={inputSpacing}
                      />
                    )}
                    {buttons && <AuthContainerFormButtons buttons={buttons} />}
                  </form>
                )}
              </div>
            </Box>

            <div className={classes.footer}>
              {footer.text && <span>{footer.text}</span>}
              <Link to={footer.link} className={classes.footerLink}>
                {footer.linkText}
              </Link>
            </div>
          </div>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default AuthContainer;
