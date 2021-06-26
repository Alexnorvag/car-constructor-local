import { makeStyles, createStyles } from "@material-ui/core";
import { FC } from "react";
import { AuthContainerInputProps } from "../state/types";
import AuthContainerInput from "./AuthContainerInput";

const useStyles = makeStyles(() =>
  createStyles({
    inputs: {
      marginBottom: 30,
    },
  })
);

interface AuthContainerFormInputProps {
  inputs: AuthContainerInputProps[];
  spacing?: number;
}
const AuthContainerFormInput: FC<AuthContainerFormInputProps> = ({
  inputs,
  spacing,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.inputs}>
      {inputs.map((inputProps) => (
        <AuthContainerInput
          key={inputProps.id}
          spacing={spacing}
          {...inputProps}
        />
      ))}
    </div>
  );
};

export default AuthContainerFormInput;
