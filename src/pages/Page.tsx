import { FC } from "react";
import { Link } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Container, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.common.black,
    borderRadius: 0,
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    // minWidth: "100vw",
  },
}));

const Nav = () => {
  return (
    <nav className="Nav">
      <div className="Nav__container">
        <div className="Nav__right">
          <ul className="Nav__item-wrapper">
            <li className="Nav__item">
              <Link className="Nav__link" to="/path1">
                Link 1
              </Link>
            </li>
            <li className="Nav__item">
              <Link className="Nav__link" to="/path2">
                Link 2
              </Link>
            </li>
            <li className="Nav__item">
              <Link className="Nav__link" to="/path3">
                Link 3
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export const Page: FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children,
}) => {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.root}>
      <Nav />
      <Container>{children}</Container>
    </Paper>
  );
};
