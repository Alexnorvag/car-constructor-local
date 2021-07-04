import {
  createStyles,
  IconButton,
  makeStyles,
  Box,
  Typography,
  Button,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import clsx from "clsx";
import { FC } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) =>
  createStyles({
    button: {
      padding: 0,
      "& svg": {
        padding: 10,
        height: 30,
        width: 30,
        borderRadius: "50%",
        overflow: "visible",
        fill: theme.palette.primary.main,
      },

      "&:hover": {
        color: theme.palette.primary.light,
        transition: "color .2s ease",

        "& svg": {
          fill: theme.palette.primary.light,
          transition: "fill .1s ease",
        },
      },
    },
    primary: {
      color: theme.palette.primary.main,
      "& svg": {
        fill: theme.palette.primary.main,
      },
    },
    secondary: {
      color: grey[700],
      "& svg": {
        fill: grey[700],
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
