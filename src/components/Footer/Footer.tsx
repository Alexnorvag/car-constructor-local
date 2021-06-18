import { FC } from "react";
import Box from "@material-ui/core/Box";
import FooterNavigation from "../FooterNavigation";
import TimeSpan from "../TimeSpan";
import { useTheme } from "@material-ui/core";

export const Footer: FC = () => {
  const theme = useTheme();

  return (
    <Box pt={2} pb={8} px={8} display="flex" justifyContent="space-between">
      <FooterNavigation />
      <Box display="flex">
        <Box color={theme.palette.common.white} mr={8}>
          <TimeSpan title="LA Office" time={new Date()} />
        </Box>
        <Box color={theme.palette.common.white}>
          <TimeSpan title="UK Office" time={new Date()} />
        </Box>
      </Box>
    </Box>
  );
};
