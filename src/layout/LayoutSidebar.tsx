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
import { EarthGlobeIcon } from "../assets/icons/EarthGlobeIcon";
import { CameraIcon } from "../assets/icons/CameraIcon";
import { MenuIcon } from "../assets/icons/MenuIcon";
// import { DashIcon } from "../assets/icons/DashIcon";
// import { CommentAddIcon } from "../assets/icons/CommentAddIcon";
// import { CommentSpeechIcon } from "../assets/icons/CommentSpeechIcon";
// import { CommentRemoveIcon } from "../assets/icons/CommentRemoveIcon";
// import { HomeIcon } from "../assets/icons/HomeIcon";
import Route from "../routes/types";
import { isRoute } from "../utils";
import { useUserData } from "../hooks";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: DRAWER_WIDTH,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawer: {
      top: APPBAR_HEIGHT,
      height: "auto",
      maxHeight: `calc(100% - ${APPBAR_HEIGHT}px)`,
      background: "#929497",
      overflowX: "hidden",
      overflowY: "auto",
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
      width: DRAWER_WIDTH_TOGGLED,
      "& $navListItem": {
        padding: "16px 18px",
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
      display: "flex",
      flexWrap: "wrap",
    },
    navListItem: {
      padding: "16px 20px 16px 38px",
      color: "#fff",
      transition: theme.transitions.create("all"),
      textTransform: "uppercase",
    },
    navListItemActive: {
      color: "#000",
    },
    navListItemAvatar: {
      width: 44,
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
  const { hasRoutePermissions } = useUserData();

  // dashboard pages
  const pages = [
    {
      label: "Garage",
      icon: <SteeringWheelIcon />,
      href: Route.DASHBOARD_REVIEW,
      active: isRoute(Route.DASHBOARD_REVIEW),
      visible: true,
      // visible: hasRoutePermissions(Route.DASHBOARD_REVIEW),
    },
    {
      label: "Content",
      icon: <ImageRoundedIcon />,
      href: "/content",
      active: false,
      visible: true,
    },
    {
      label: "CDN",
      icon: <EarthGlobeIcon />,
      href: "/cdn",
      active: false,
      visible: true,
    },
    {
      label: "ROD",
      icon: <CameraIcon />,
      href: "/rod",
      active: false,
      visible: true,
    },
    {
      label: "Menu",
      icon: <MenuIcon />,
      href: Route.DASHBOARD,
      active: isRoute(Route.DASHBOARD),
      visible: hasRoutePermissions(Route.DASHBOARD),
    },
  ].filter((item) => item.visible);

  // const presentationPages = [
  //   {
  //     label: "Dash",
  //     icon: <DashIcon />,
  //     href: "/ds/review",
  //     active: true,
  //     visible: true,
  //   },
  //   {
  //     label: "Add",
  //     icon: <CommentAddIcon />,
  //     href: "/content",
  //     active: false,
  //     visible: true,
  //   },
  //   {
  //     label: "Show",
  //     icon: <CommentSpeechIcon />,
  //     href: "/show",
  //     active: false,
  //     visible: true,
  //   },
  //   {
  //     label: "Hide",
  //     icon: <CommentRemoveIcon />,
  //     href: "/hide",
  //     active: false,
  //     visible: true,
  //   },
  //   {
  //     label: "Menu",
  //     icon: <MenuIcon />,
  //     href: "/menu",
  //     active: false,
  //     visible: true,
  //   },
  // ];

  // const galleryPages = [
  //   {
  //     label: "Home",
  //     icon: <HomeIcon />,
  //     href: "/ds/review",
  //     active: true,
  //     visible: true,
  //   },
  //   {
  //     label: "Add",
  //     icon: <CommentAddIcon />,
  //     href: "/content",
  //     active: false,
  //     visible: true,
  //   },
  //   {
  //     label: "Show",
  //     icon: <CommentSpeechIcon />,
  //     href: "/show",
  //     active: false,
  //     visible: true,
  //   },
  //   {
  //     label: "Hide",
  //     icon: <CommentRemoveIcon />,
  //     href: "/hide",
  //     active: false,
  //     visible: true,
  //   },
  //   {
  //     label: "Menu",
  //     icon: <MenuIcon />,
  //     href: "/menu",
  //     active: false,
  //     visible: true,
  //   },
  // ];

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
        {/* {galleryPages.map((page) => ( */}
        {/* {presentationPages.map((page) => ( */}
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
