import React, { FC } from "react";
import clsx from "clsx";
import {
  createStyles,
  Drawer,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Theme,
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
import { DashIcon } from "../assets/icons/DashIcon";
import { HomeIcon } from "../assets/icons/HomeIcon";
import { CommentAddIcon } from "../assets/icons/CommentAddIcon";
import { CommentSpeechIcon } from "../assets/icons/CommentSpeechIcon";
import { CommentRemoveIcon } from "../assets/icons/CommentRemoveIcon";
import Route from "../routes/types";
import { isRoute } from "../utils";
import { useUserData, useWindowSize } from "../hooks";
import { DASHBOARD_ROUTES } from "../routes/constants";
import LayoutSidebarItem from "./LayoutSidebarItem";

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
      background: theme.palette.primary.main,
      overflowX: "hidden",
      overflowY: "auto",
    },
    drawerOpen: {
      width: (isMobile) => (isMobile ? DRAWER_WIDTH_TOGGLED : DRAWER_WIDTH),
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
      "& $navListItemAvatar": {
        marginRight: (isMobile) => (isMobile ? "auto" : 0),
        marginBottom: (isMobile) => (isMobile ? "-10px" : 0),
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
    navListItemAvatar: {
      width: 44,
      color: theme.palette.primary.dark,
      minWidth: "initial",
      display: "flex",
      alignItems: "center",
      margin: (isMobile) => (isMobile ? "0 auto 0px auto" : "0 16px 0 0"),
      transition: (isMobile) =>
        theme.transitions.create(isMobile ? "margin-bottom" : "margin-right"),
    },
    navListItemText: {
      margin: 0,
      fontSize: (isMobile) => (isMobile ? "0.65rem" : "inherit"),
      transition: (isMobile) =>
        theme.transitions.create(["opacity", ...(isMobile ? [] : ["flex"])]),
    },
    navListItemTextActive: {
      "& > span": {
        fontWeight: "bold",
      },
    },
  })
);

interface LayoutSidebarProps {
  open: boolean;
}

const LayoutSidebar: FC<LayoutSidebarProps> = ({ open }) => {
  const { isMobile } = useWindowSize();
  const classes = useStyles(isMobile);
  const { hasRoutePermissions } = useUserData();

  const isCustomRoute = isRoute(DASHBOARD_ROUTES);

  console.log("isCustomRoute: ", isCustomRoute);
  console.log("DASHBOARD_ROUTES: ", DASHBOARD_ROUTES);

  const pages = [
    {
      label: "Garage",
      icon: <SteeringWheelIcon />,
      href: Route.REVIEW,
      active: isRoute({ path: Route.REVIEW, exact: true }),
      visible: hasRoutePermissions(Route.REVIEW) && !isRoute(Route.REVIEW),
    },
    {
      label: "Gallery",
      icon: <DashIcon />,
      href: Route.REVIEW_GALLERY,
      active: isRoute(Route.REVIEW_GALLERY),
      visible:
        hasRoutePermissions(Route.REVIEW) &&
        isRoute(Route.REVIEW) &&
        !isRoute({ path: Route.REVIEW_GALLERY, exact: true }),
    },
    {
      label: "Presentation",
      icon: <HomeIcon />,
      href: Route.REVIEW_PRESENTATION,
      active: isRoute(Route.REVIEW_PRESENTATION),
      visible:
        hasRoutePermissions(Route.REVIEW) &&
        isRoute(Route.REVIEW) &&
        !isRoute({ path: Route.REVIEW_PRESENTATION, exact: true }),
    },
    {
      label: "Add",
      icon: <CommentAddIcon />,
      onClick: () => console.log("Add handler"),
      active: false,
      visible: hasRoutePermissions(Route.REVIEW) && isRoute(Route.REVIEW),
    },
    {
      label: "Show",
      icon: <CommentSpeechIcon />,
      onClick: () => console.log("Show handler"),
      active: false,
      visible: hasRoutePermissions(Route.REVIEW) && isRoute(Route.REVIEW),
    },
    {
      label: "Hide",
      icon: <CommentRemoveIcon />,
      onClick: () => console.log("Hide handler"),
      active: false,
      visible: hasRoutePermissions(Route.REVIEW) && isRoute(Route.REVIEW),
    },
    {
      label: "Content",
      icon: <ImageRoundedIcon />,
      href: Route.DASHBOARD_CONTENT,
      active: isRoute(Route.DASHBOARD_CONTENT),
      visible: hasRoutePermissions(Route.DASHBOARD) && !isRoute(Route.REVIEW),
    },
    {
      label: "CDN",
      icon: <EarthGlobeIcon />,
      href: Route.DASHBOARD_CDN,
      active: isRoute(Route.DASHBOARD_CDN),
      visible: hasRoutePermissions(Route.DASHBOARD) && !isRoute(Route.REVIEW),
    },
    {
      label: "ROD",
      icon: <CameraIcon />,
      href: Route.DASHBOARD_ROD,
      active: isRoute(Route.DASHBOARD_ROD),
      visible: hasRoutePermissions(Route.DASHBOARD) && !isRoute(Route.REVIEW),
    },
    {
      label: "Menu",
      icon: <MenuIcon />,
      href: Route.DASHBOARD,
      active: isRoute({ path: Route.DASHBOARD, exact: true }),
      visible: hasRoutePermissions(Route.DASHBOARD),
    },
  ].filter((item) => item.visible);

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
        disablePadding
      >
        {pages.map((page) => (
          <LayoutSidebarItem
            key={page.label}
            open={open}
            label={page.label}
            active={page.active}
            href={page.href}
            onClick={page.onClick}
          >
            <ListItemAvatar className={classes.navListItemAvatar}>
              {page.icon}
            </ListItemAvatar>
            <ListItemText
              disableTypography={isMobile}
              primary={page.label}
              className={clsx(classes.navListItemText, {
                [classes.navListItemTextActive]: page.active,
              })}
            />
          </LayoutSidebarItem>
        ))}
      </List>
    </Drawer>
  );
};

export default LayoutSidebar;
