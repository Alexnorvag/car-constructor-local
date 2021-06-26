import React, { FC } from "react";
import {
  Box,
  Button,
  createStyles,
  makeStyles,
  Typography,
} from "@material-ui/core";

import { useUserData } from "../hooks";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: 0,
      // marginInline: theme.spacing(35),
    },
  })
);

const LayoutHeaderUserWidget: FC = () => {
  const classes = useStyles();
  const { firstname, lastname, logout } = useUserData();

  return (
    <>
      <Box className={classes.root}>
        <Typography variant="h5" align="center" gutterBottom>
          Title
        </Typography>
        <Typography
          variant="h6"
          align="center"
        >{`User: ${firstname} ${lastname}`}</Typography>
      </Box>
      <Button variant="contained" onClick={logout}>
        Logout
      </Button>
    </>
  );
};

export default LayoutHeaderUserWidget;
