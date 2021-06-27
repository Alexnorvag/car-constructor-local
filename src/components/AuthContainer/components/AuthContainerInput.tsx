import {
  makeStyles,
  createStyles,
  Theme,
  IconButton,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import { ChangeEvent, FC, useCallback } from "react";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import { AuthContainerInputProps } from "../state/types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputLabel: {
      color: "#747C83",
    },
    inputLabelActive: {
      color: theme.palette.primary.main,
    },
    textField: {
      width: "100%",
      marginBottom: 40,
      "&:last-child": {
        marginBottom: "0 !important",
      },
      [theme.breakpoints.down(480)]: {
        marginBottom: 20,
      },
    },
    input: {
      color: theme.palette.primary.main,
      [theme.breakpoints.down(480)]: {
        fontSize: 14,
      },
    },
    icon: {
      color: "#BDC3C7",
    },
  })
);

const AuthContainerInput: FC<AuthContainerInputProps> = ({
  id,
  label,
  autoComplete,
  type = "text",
  value,
  isToggled,
  spacing,
  onChange,
  onToggle,
}) => {
  const classes = useStyles();

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value.trim());
    },
    [onChange]
  );

  const handleToggle = useCallback(() => onToggle?.(), [onToggle]);

  return (
    <TextField
      required
      variant="outlined"
      color="secondary"
      id={id}
      label={label}
      autoComplete={autoComplete}
      type={type}
      value={value}
      onChange={handleChange}
      className={classes.textField}
      style={{ marginBottom: spacing }}
      InputProps={{
        className: classes.input,
        endAdornment:
          isToggled === undefined ? null : (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleToggle}
                edge="end"
                className={classes.icon}
              >
                {isToggled ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
      }}
      InputLabelProps={{
        // shrink: true,
        classes: {
          root: classes.inputLabel,
          focused: classes.inputLabelActive,
        },
      }}
    />
  );
};

export default AuthContainerInput;
