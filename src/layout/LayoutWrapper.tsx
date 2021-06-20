import React, { FC } from "react";
import { createStyles, makeStyles } from "@material-ui/core";
import { PublicRoutes, PrivateRoutes } from "../routes";
import { useLocation } from "react-router-dom";

import { Page } from "../pages/Page";
import { useWindowSize, useUserData, useOpen } from "../hooks";
import Layout from "./Layout";
import AppContainer from "./LayoutContainer";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
      height: "100%",
      position: "absolute",
      background: "#000",
    },
  })
);

const LayoutWrapper: FC = () => {
  const classes = useStyles();
  const windowSize = useWindowSize();
  const location = useLocation();
  const { email } = useUserData();
  const drawerControls = useOpen(!windowSize.isMinimizeDrawer);

  console.log("windowSize: ", windowSize);
  console.log("location: ", location);
  console.log("email: ", email);
  console.log("drawerControls: ", drawerControls);

  return (
    <div className={classes.root}>
      <Layout
        open={drawerControls.opened}
        handleDrawerOpen={drawerControls.open}
        handleDrawerClose={drawerControls.close}
      />

      <AppContainer open={drawerControls.opened}>
        <div id="main">
          <PublicRoutes />
          <PrivateRoutes />
        </div>
      </AppContainer>

      {/* <Page>
        <PublicRoutes />
        <PrivateRoutes />
      </Page> */}
    </div>
  );
};

export default LayoutWrapper;
