import { Box, createStyles, makeStyles } from "@material-ui/core";
import React, { FC } from "react";

import Layout from "./Layout";
import AppContainer from "./LayoutContainer";
import AuthenticatedRoutes from "../routes/components/AuthenticatedRoutes";
import { useOpen } from "../hooks";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100vw",
      height: "100vh",
      background: theme.palette.primary.dark,
      overflow: "auto",
    },
  })
);

const LayoutWrapper: FC = () => {
  const classes = useStyles();
  const drawerControls = useOpen(false);

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
