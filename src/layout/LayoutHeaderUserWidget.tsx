import React, { FC } from "react";
import { Box, createStyles, makeStyles, Typography } from "@material-ui/core";

import { useUserData } from "../hooks";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      padding: 0,
      margin: 0,
    },
  })
);


const LayoutHeaderUserWidget: FC = () => {
  const classes = useStyles();
  const { firstName, lastName } = useUserData();

  return (
    <Box className={classes.root}>
      <Typography variant="h5" align="center" gutterBottom>
        Title
      </Typography>
      <Typography
        variant="h6"
        align="center"
      >{`User: ${firstName} ${lastName}`}</Typography>
    </Box>
  );
};

export default LayoutHeaderUserWidget;
