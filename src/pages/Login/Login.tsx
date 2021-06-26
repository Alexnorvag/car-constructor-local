import { FC } from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../../components/Header";
import LoginForm from "../../components/LoginForm";
import Footer from "../../components/Footer";
// import AuthContainer from "../../components/AuthContainer";

const useStyles = makeStyles({
  root: {
    background: "#000",
    minHeight: "100vh",
  },
});

export const Login: FC = () => {
  // const {error} = useLoginData();

  const classes = useStyles();

  return (
    // <AuthContainer
    //   error={error}
    // />
    <Box className={classes.root} display="flex" flexDirection="column">
      <Header />
      <LoginForm />
      <Footer />
    </Box>
  );
};
