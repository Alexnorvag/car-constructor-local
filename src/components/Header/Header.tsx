import { FC } from "react";
import Box from "@material-ui/core/Box";
import WhiteLogo from "../Logo";

export const Header: FC = () => {
  return (
    <Box py={2} px={8}>
      <WhiteLogo />
    </Box>
  );
};
