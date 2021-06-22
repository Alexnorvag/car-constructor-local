import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff",
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
