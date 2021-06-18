import { FC } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.common.black,
    borderRadius: 0,
    minHeight: "100vh",
    minWidth: "100vw",
  },
}));

export const Page: FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children,
}) => {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.root}>
      {children}
    </Paper>
  );
};
