import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#929497",
      light: "#fff",
      dark: "#000",
      contrastText: "#055AFC",
    },
    secondary: {
      main: "#fff",
    },
  },
  overrides: {
    MuiTableRow: {
      hover: {
        "&:hover": {
          cursor: "pointer",
          backgroundColor: "#004EFD4B !important",
        },
      },
    },
  },
});
