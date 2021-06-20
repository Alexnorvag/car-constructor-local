import React, { FC } from "react";
import { createStyles, makeStyles } from "@material-ui/core";

import LayoutHeader from "./LayoutHeader";
import LayoutSidebar from "./LayoutSidebar";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      position: "relative",
    },
  })
);

interface LayoutProps {
  open: boolean;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
}

const Layout: FC<LayoutProps> = ({
  open,
  handleDrawerOpen,
  handleDrawerClose,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LayoutHeader
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />

      <LayoutSidebar open={open} />
    </div>
  );
};

export default Layout;
