import { Box } from "@material-ui/core";

import { AuthContainerButtonProps } from "../state/types";
import AuthContainerFormButton from "./AuthContainerButton";
import AuthContainerFormIconButton from "./AuthContainerIconButton";

interface AuthContainerFormButtonsProps {
  buttons: AuthContainerButtonProps[];
}

const AuthContainerFormButtons = ({
  buttons,
}: AuthContainerFormButtonsProps) => {
  return (
    <Box display="flex" justifyContent="space-evenly" flex='1'>
      {buttons.map((buttonProps) =>
        buttonProps.icon ? (
          <AuthContainerFormIconButton
            key={buttonProps.text}
            {...buttonProps}
          />
        ) : (
          <AuthContainerFormButton key={buttonProps.text} {...buttonProps} />
        )
      )}
    </Box>
  );
};

export default AuthContainerFormButtons;
