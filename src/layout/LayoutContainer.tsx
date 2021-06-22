import { createStyles, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React, { FC } from "react";
import {
  APPBAR_HEIGHT,
  DRAWER_WIDTH,
  DRAWER_WIDTH_TOGGLED,
} from "./state/constants";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingLeft: "max(2vw, 12px)",
      paddingRight: "max(2vw, 12px)",
      marginTop: APPBAR_HEIGHT,
      marginLeft: DRAWER_WIDTH_TOGGLED,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflow: "auto",
      height: `calc(100% - ${APPBAR_HEIGHT}px)`,
    },
    rootShift: {
      marginLeft: DRAWER_WIDTH,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    content: {
      paddingTop: 25,
      paddingBottom: 30,
    },
  })
);

interface LayoutContainerProps {
  open: boolean;
}

const LayoutContainer: FC<LayoutContainerProps> = ({ open, children }) => {
  const classes = useStyles();

  return (
    <main className={clsx(classes.root, { [classes.rootShift]: open })}>
      <div className={classes.content}>{children}</div>
    </main>
  );
};

export default LayoutContainer;
