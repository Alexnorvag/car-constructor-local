import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import createStyles from "@material-ui/styles/createStyles";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useUserData } from "../../hooks";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      fontSize: 20,
    },
    title: {
      margin: "0 0 20px",
    },
    link: {
      color: theme.palette.primary.light,
      textDecoration: "none",
      "&:hover": {
        color: theme.palette.primary.main,
      },
    },
  })
);

export const NotFound: FC = () => {
  const classes = useStyles();
  const { homeUrl } = useUserData();

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>Page Not Found</h2>

      <Link className={classes.link} to={homeUrl ?? "#"}>
        Go Home
      </Link>
    </div>
  );
};
