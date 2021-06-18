import { FC } from "react";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  footerNav: {
    color: theme.palette.common.white,
    display: "flex",
    flexDirection: "column",
  },
  link: {
    color: theme.palette.common.white,
    textDecoration: "none",
    textTransform: "uppercase",
  },
}));

export const FooterNavigation: FC = () => {
  const classes = useStyles();

  return (
    <nav className={classes.footerNav}>
      <Box mb={1}>
        <Link className={classes.link} to="/">
          home
        </Link>
      </Box>
      <Link className={classes.link} to="/about">
        about
      </Link>
    </nav>
  );
};
