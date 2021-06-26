import { createStyles, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { FC } from "react";
import { Link } from "react-router-dom";

import Button from "../../common/Button";
import { AuthContainerButtonProps } from "../state/types";

const useStyles = makeStyles((theme) =>
  createStyles({
    button: {
      marginBottom: 20,
      "&:last-child": {
        marginBottom: 0,
      },
      [theme.breakpoints.down(480)]: {
        marginBottom: 0,
        marginRight: 10,
        fontSize: 12,
        "&:last-child": {
          marginRight: 0,
        },
      },
    },
    primary: {
      width: "100%",
      letterSpacing: "1.25px",
      background: "#324D66",
      textTransform: "uppercase",
      "&:hover": {
        background: "#324D66",
      },
    },
    secondary: {
      width: "100%",
      background: "#99C2E5",
      color: "#fff",
      "&:hover": {
        background: "#324D66",
      },
    },
  })
);

const AuthContainerFormButton: FC<AuthContainerButtonProps> = ({
  primary,
  id,
  type,
  text,
  link,
}) => {
  const classes = useStyles();

  return (
    <Button
      size="small"
      variant="contained"
      primary={primary}
      id={id}
      type={type}
      className={clsx(
        classes.button,
        primary ? classes.primary : classes.secondary
      )}
      component={link ? Link : undefined}
      to={link ?? undefined}
    >
      {text}
    </Button>
  );
};

export default AuthContainerFormButton;
