import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./styles";
import RedirectContainer from "./layout/RedirectContainer";
import { UserProvider } from "./context/user";
import MainRoutes from "./routes/components/MainRoutes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <UserProvider>
          <RedirectContainer>
            <MainRoutes />
            {/* <LayoutWrapper /> */}
          </RedirectContainer>
        </UserProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
