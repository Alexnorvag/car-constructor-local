import { Box } from "@material-ui/core";
import { FC } from "react";

import { AuthContainerButtonProps } from "../state/types";
import AuthContainerFormButton from "./AuthContainerButton";
import AuthContainerFormIconButton from "./AuthContainerIconButton";

interface AuthContainerFormButtonsProps {
  buttons: AuthContainerButtonProps[];
}

const AuthContainerFormButtons: FC<AuthContainerFormButtonsProps> = ({
  buttons,
}) => {
  return (
    <div>
      {/* <Box display="flex" justifyContent="space-evenly"> */}
      {buttons.map((buttonProps) => {
        console.log("buttonProps: ", buttonProps);

        return buttonProps.icon ? (
          <AuthContainerFormIconButton
            key={buttonProps.text}
            {...buttonProps}
          />
        ) : (
          <AuthContainerFormButton key={buttonProps.text} {...buttonProps} />
        );
      })}
    </div>
  );
};

export default AuthContainerFormButtons;
