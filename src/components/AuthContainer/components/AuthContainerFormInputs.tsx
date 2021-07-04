import { Box } from "@material-ui/core";
import { FC } from "react";

import { AuthContainerInputProps } from "../state/types";
import AuthContainerInput from "./AuthContainerInput";

interface AuthContainerFormInputProps {
  inputs: AuthContainerInputProps[];
  spacing?: number;
}
const AuthContainerFormInput: FC<AuthContainerFormInputProps> = ({
  inputs,
  spacing,
}) => {
  return (
    <Box>
      {inputs.map((inputProps) => (
        <AuthContainerInput
          key={inputProps.id}
          spacing={spacing}
          {...inputProps}
        />
      ))}
    </Box>
  );
};

export default AuthContainerFormInput;
