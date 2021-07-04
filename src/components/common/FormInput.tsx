import TextField from "@material-ui/core/TextField";
import { Theme, withStyles } from "@material-ui/core/styles";

export const FormInput = withStyles((theme: Theme) => ({
  root: {
    "& .MuiTextField-root": {
      color: theme.palette.common.white,
    },
    "& .MuiOutlinedInput-root": {
      color: theme.palette.common.white,
      "& fieldset": {
        borderColor: theme.palette.common.white,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.common.white,
      },
    },
    "& label": {
      color: theme.palette.common.white,
    },
    "& .MuiInput": {
      color: theme.palette.common.white,
    },
  },
}))(TextField);
