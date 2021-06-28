import {
  createStyles,
  IconButton,
  makeStyles,
  Box,
  Typography,
  Button,
} from "@material-ui/core";
import clsx from "clsx";
import { FC } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) =>
  createStyles({
    button: {
      "& svg": {
        padding: 10,
        height: 30,
        width: 30,
        borderRadius: "50%",
        overflow: "visible",
      },
    },
    primary: {
      color: theme.palette.primary.main,
      "&:hover": {
        transition: "color .2s ease",
        color: theme.palette.primary.light,

        "& svg": {
          transition: "background .2s ease",
          background: theme.palette.primary.main,
        },
      },
    },
    secondary: {
      color: theme.palette.primary.main,
      "&:hover": {
        transition: "color .2s ease",
        color: theme.palette.primary.light,

        "& svg": {
          transition: "background .2s ease",
          background: theme.palette.primary.main,
        },
      },
    },
    iconButtonLabel: {
      display: "flex",
      flexDirection: "row",
      gap: 10,
    },
  })
);

const AuthContainerFormIconButton: FC<any> = ({
  id,
  type,
  link,
  icon,
  text,
  primary,
}) => {
  const classes = useStyles();
  const component = {
    ...(link ? { component: Link, to: link } : {}),
  };
  console.log("component: ", component);
  return (
    <IconButton
      id={id}
      type={type}
      // component={link ? Link : undefined}
      // to={link ?? undefined}
      {...component}
      className={clsx(
        classes.button,
        primary ? classes.primary : classes.secondary
      )}
      classes={{ label: classes.iconButtonLabel }}
      disableTouchRipple
    >
      <Typography variant="button">{text}</Typography>
      {icon}
    </IconButton>
  );
};

export default AuthContainerFormIconButton;
