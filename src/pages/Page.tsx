import { FC } from "react";
// import { Link } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  AppBar,
  Box,
  Container,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.common.black,
    borderRadius: 0,
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    // minWidth: "100vw",
  },
  toolBar: {
    color: theme.palette.primary.main,
  },
  headerBox: {
    margin: "45px 100px 30px 6px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(2),
  },
}));

const PageHeader = () => {
  const classes = useStyles();

  function createHeaderData(firstName: string, lastName: string) {
    return { firstName, lastName };
  }
  const headerData = createHeaderData("FirstName", "LastName");

  return (
    <AppBar position="static" color="transparent">
      <Toolbar disableGutters className={classes.toolBar}>
        <Grid
          container
          direction="column"
          justify="flex-end"
          alignItems="flex-end"
        >
          <Box className={classes.headerBox}>
            <Typography variant="h5">Title</Typography>
            <Typography variant="h6">
              {`User: ${headerData.firstName} ${headerData.lastName}`}
            </Typography>
          </Box>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

// const Nav = () => {
//   return (
//     <nav className="Nav">
//       <div className="Nav__container">
//         <div className="Nav__right">
//           <ul className="Nav__item-wrapper">
//             <li className="Nav__item">
//               <Link className="Nav__link" to="/path1">
//                 Link 1
//               </Link>
//             </li>
//             <li className="Nav__item">
//               <Link className="Nav__link" to="/path2">
//                 Link 2
//               </Link>
//             </li>
//             <li className="Nav__item">
//               <Link className="Nav__link" to="/path3">
//                 Link 3
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

export const Page: FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children,
}) => {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.root}>
      {/* <Nav /> */}
      <PageHeader />

      <Container disableGutters>{children}</Container>
    </Paper>
  );
};
