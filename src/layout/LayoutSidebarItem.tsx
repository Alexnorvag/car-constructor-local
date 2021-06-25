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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navListItem: {
      // justifyContent: "center",
    //   padding: (props) => {
    //     console.log("props: ", props);
    //     return props?.open
    //       ? props?.isMobile
    //         ? "8px 4px"
    //         : "16px 10px"
    //       : props?.isMobile
    //       ? "8px 4px"
    //       : "16px 20px 16px 24px";
    //   },
      color: "#000",
      transition: theme.transitions.create("all"),
      textTransform: "uppercase",
      display: (isMobile) => (isMobile ? "inline-block" : "inherit"),
      textAlign: (isMobile) => (isMobile ? "center" : "left"),
    },
    navListItemActive: {
      color: "#fff",

      "& svg": {
        fill: "#fff",
      },
    },
  })
);

const LayoutSidebarItem: FC<any> = ({
  children,
  open,
  label,
  active,
  href,
  onClick,
}) => {
  const { isMobile } = useWindowSize();
  const classes = useStyles({ isMobile, open });
  const itemProps = {
    ...(onClick
      ? { component: "div", onClick }
      : { component: Link, to: href }),
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
