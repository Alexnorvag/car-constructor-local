import { FC } from "react";
import { Box, createStyles, makeStyles, useTheme } from "@material-ui/core";

import FooterNavigation from "../FooterNavigation";
import TimeSpan from "../TimeSpan";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingInline: theme.spacing(8),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(4),
      [theme.breakpoints.down("xs")]: {
        paddingInline: theme.spacing(1),
        paddingBlock: theme.spacing(2),
      },
    },
  })
);

export const Footer: FC = () => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Box className={classes.root} display="flex" justifyContent="space-between">
      <FooterNavigation />
      <Box display="flex">
        <Box color={theme.palette.common.white} mr={8}>
          <TimeSpan title="LA Office" time={new Date()} />
        </Box>
        <Box color={theme.palette.common.white}>
          <TimeSpan title="UK Office" time={new Date()} />
        </Box>
      </Box>
    </Box>
  );
};
