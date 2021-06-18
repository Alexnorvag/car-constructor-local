import { BrowserRouter as Router } from "react-router-dom";
import { PublicRoutes, PrivateRoutes } from "./routes";
import { ThemeProvider } from "@material-ui/core/styles";
import { Page } from "./pages/Page";
import theme from "./styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Page>
          <PublicRoutes />
          <PrivateRoutes />
        </Page>
      </Router>
    </ThemeProvider>
  );
}

export default App;
