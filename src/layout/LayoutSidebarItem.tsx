import {
  Tooltip,
  ListItem,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import clsx from "clsx";
import { FC } from "react";
import { Link } from "react-router-dom";

import { useWindowSize } from "../hooks";

interface StyleProps {
  isMobile?: boolean;
  open?: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navListItem: {
      justifyContent: ({ open }: StyleProps) =>
        open ? "flex-start" : "center",
      padding: ({ isMobile }: StyleProps) =>
        isMobile ? "8px 4px" : "16px 20px 16px 24px",
      color: theme.palette.primary.dark,
      transition: theme.transitions.create("all"),
      textTransform: "uppercase",
      display: ({ isMobile }: StyleProps) =>
        isMobile ? "inline-block" : "inherit",
      textAlign: ({ isMobile }: StyleProps) => (isMobile ? "center" : "left"),
    },
    navListItemActive: {
      color: theme.palette.secondary.light,

      "& svg": {
        fill: theme.palette.secondary.light,
      },
    },
  })
);

interface LayoutSidebarItemProps {
  label: string;
  open: boolean;
  active: boolean;
  href: string | undefined;
  onClick: (() => void) | undefined;
}

const LayoutSidebarItem: FC<LayoutSidebarItemProps> = ({
  children,
  open,
  label,
  active,
  href,
  onClick,
}) => {
  const { isMobile } = useWindowSize();
  const classes = useStyles({ isMobile, open });
  const isLink = !!onClick;
  const itemProps = {
    ...(isLink ? { component: "div", onClick } : { component: Link, to: href }),
  };

  return (
    <Tooltip title={open ? "" : label}>
      <ListItem
        key={label}
        button
        className={clsx(classes.navListItem, {
          [classes.navListItemActive]: active,
        })}
        {...itemProps}
      >
        {children}
      </ListItem>
    </Tooltip>
  );
};

export default LayoutSidebarItem;
