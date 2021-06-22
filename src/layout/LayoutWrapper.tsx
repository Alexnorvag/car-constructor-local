import React, { FC } from "react";
import { Box, createStyles, makeStyles } from "@material-ui/core";
import { PublicRoutes, PrivateRoutes } from "../routes";
import { useLocation } from "react-router-dom";

import { useWindowSize, useUserData, useOpen } from "../hooks";
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
  const location = useLocation();
  const { email } = useUserData();
  const drawerControls = useOpen(!windowSize.isMinimizeDrawer);

  console.log("location: ", location);
  console.log("email: ", email);

  return (
    <Box className={classes.root}>
      <Layout
        open={drawerControls.opened}
        handleDrawerOpen={drawerControls.open}
        handleDrawerClose={drawerControls.close}
      />

      <AppContainer open={drawerControls.opened}>
        <Box>
          <PublicRoutes />
          <PrivateRoutes />
        </Box>
      </AppContainer>
    </Box>
  );
};

export default LayoutWrapper;
