import React, { FC } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import {
  createStyles,
  Drawer,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Theme,
  Tooltip,
  List,
} from "@material-ui/core";

import {
  APPBAR_HEIGHT,
  DRAWER_WIDTH,
  DRAWER_WIDTH_TOGGLED,
} from "./state/constants";
import { SteeringWheelIcon } from "../assets/icons/SteeringWheelIcon";
import { ImageRoundedIcon } from "../assets/icons/ImageRoundedIcon";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: DRAWER_WIDTH,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawer: {
      // inset: `${APPBAR_HEIGHT}px 0`,
      height: '70%',
      top: '15%',
      // bottom: -APPBAR_HEIGHT,
      background: "#929497",
    },
    drawerOpen: {
      width: DRAWER_WIDTH,
      borderRight: 0,
      boxShadow: "0px 2px 4px #00000054",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflow: "hidden",
      width: DRAWER_WIDTH_TOGGLED,
      "& $navListItem": {
        padding: "20px 22px",
        justifyContent: "center",
      },
      "& $navListItemAvatar": {
        marginRight: 0,
      },
      "& $navListItemText": {
        opacity: 0,
        flex: 0,
      },
    },
    navList: {
      marginTop: APPBAR_HEIGHT,
      padding: "23px 0 38px",
    },
    navListItem: {
      padding: "20px 20px 20px 38px",
      color: "#fff",
      marginBottom: 15,
      transition: theme.transitions.create("all"),
      textTransform: "uppercase",
    },
    navListItemActive: {
      color: "#000",
    },
    navListItemAvatar: {
      width: 48,
      color: "#000",
      minWidth: "initial",
      display: "flex",
      alignItems: "center",
      marginRight: 22,
      transition: theme.transitions.create("margin-right"),
    },
    navListItemText: {
      margin: 0,
      transition: theme.transitions.create(["opacity", "flex"]),
    },
  })
);

interface LayoutSidebarProps {
  open: boolean;
}

const LayoutSidebar: FC<LayoutSidebarProps> = ({ open }) => {
  const classes = useStyles();

  const pages = [
    {
      label: "Garage",
      icon: <SteeringWheelIcon />,
      href: "/view",
      active: true,
      visible: true,
    },
    {
      label: "Content",
      icon: <ImageRoundedIcon />,
      href: "/content",
      active: false,
      visible: true,
    },
  ];

  return (
    <Drawer
      variant="permanent"
      classes={{
        root: classes.root,
        paper: clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <List
        className={classes.navList}
        component="nav"
        aria-label="application stack"
      >
        {pages.map((page) => (
          <Tooltip title={open ? "" : page.label} key={page.label}>
            <ListItem
              button
              component={Link}
              to={page.href}
              key={page.label}
              className={clsx(classes.navListItem, {
                [classes.navListItemActive]: page.active,
              })}
            >
              <ListItemAvatar className={classes.navListItemAvatar}>
                {page.icon}
              </ListItemAvatar>
              <ListItemText
                primary={page.label}
                className={classes.navListItemText}
              />
            </ListItem>
          </Tooltip>
        ))}
      </List>
    </Drawer>
  );
};

export default LayoutSidebar;
