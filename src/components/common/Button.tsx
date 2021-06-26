import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Button as ButtonMUI } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      background: "#fff",
      minWidth: 80,
      boxShadow: "0px 1px 3px rgba(0, 0, 0, #d2d2d2)",
      borderRadius: 4,
      color: theme.palette.primary.main,
      height: 36,
      textTransform: "uppercase",
      padding: "8px 24px",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "19px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 150ms ease",
    },
    active: {
      backgroundColor: "rgba(0, 0, 0, 0.04)",
    },
    primary: {
      color: "#fff !important",
      backgroundColor: theme.palette.primary.main,
      "&:hover, &$disabled": {
        backgroundColor: theme.palette.primary.light,
      },
    },
    disabled: {},
  })
);

const Button = (props: any) => {
  const {
    className,
    active,
    onClick,
    children,
    primary,
    disabled,
    ...otherProps
  } = props;
  const classes = useStyles();

  return (
    <ButtonMUI
      className={clsx(classes.root, className, {
        [classes.active]: active,
        [classes.primary]: primary,
        [classes.disabled]: disabled,
      })}
      onClick={onClick}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </ButtonMUI>
  );
};

export default Button;
