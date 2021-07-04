import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { FC } from "react";

const useStyles = makeStyles((theme) =>({
  root: {
    background:theme.palette.primary.dark ,
    minHeight: "100vh",
    color:theme.palette.secondary.light,
  },
}));

export const About: FC = () => {
  const classes = useStyles();

  return (
    <Box
      className={classes.root}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      About page
    </Box>
  );
};
