import { BrowserRouter as Router } from "react-router-dom";
// import { PublicRoutes, PrivateRoutes } from "./routes";
import { ThemeProvider } from "@material-ui/core/styles";
// import { Page } from "./pages/Page";

import theme from "./styles";

import LayoutWrapper from "./layout/LayoutWrapper";
import RedirectContainer from "./layout/RedirectContainer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <RedirectContainer>
          <LayoutWrapper />
        </RedirectContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
