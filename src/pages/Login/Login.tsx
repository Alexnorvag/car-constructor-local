import { FC } from "react";
import { Page } from "../Page";
import Header from "../../components/Header";
import LoginForm from "../../components/LoginForm";
import Footer from "../../components/Footer";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
});

export const Login: FC = () => {
  const classes = useStyles();

  return (
    <Page>
      <Box className={classes.root} display="flex" flexDirection="column">
        <Header />
        <LoginForm />
        <Footer />
      </Box>
    </Page>
  );
};
