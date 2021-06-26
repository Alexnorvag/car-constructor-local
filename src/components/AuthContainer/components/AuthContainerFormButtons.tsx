import { FC } from "react";

import { AuthContainerButtonProps } from "../state/types";
import AuthContainerFormButton from "./AuthContainerButton";

interface AuthContainerFormButtonsProps {
  buttons: AuthContainerButtonProps[];
}

const AuthContainerFormButtons: FC<AuthContainerFormButtonsProps> = ({
  buttons,
}) => {
  return (
    <div>
      {buttons.map((buttonProps) => (
        <AuthContainerFormButton key={buttonProps.text} {...buttonProps} />
      ))}
    </div>
  );
};

export default AuthContainerFormButtons;
