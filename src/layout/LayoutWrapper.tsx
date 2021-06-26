import { Box, createStyles, makeStyles } from "@material-ui/core";
import React, { FC } from "react";

import { useOpen, useWindowSize } from "../hooks";
import AuthenticatedRoutes from "../routes/components/AuthenticatedRoutes";
import Layout from "./Layout";
import AppContainer from "./LayoutContainer";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100vw",
      height: "100vh",
      background: "#000",
      overflow: "auto",
    },
  })
);

const LayoutWrapper: FC = () => {
  const classes = useStyles();
  const windowSize = useWindowSize();
  const drawerControls = useOpen(!windowSize.isMinimizeDrawer);

  return (
    <Box className={classes.root}>
      <Layout
        open={drawerControls.opened}
        handleDrawerOpen={drawerControls.open}
        handleDrawerClose={drawerControls.close}
      />

      <AppContainer open={drawerControls.opened}>
        <AuthenticatedRoutes />
      </AppContainer>
    </Box>
  );
};

export default LayoutWrapper;
