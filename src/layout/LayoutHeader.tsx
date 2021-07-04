import { FC } from "react";
import {
  AppBar,
  createStyles,
  Grid,
  IconButton,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/MenuRounded";
import CloseIcon from "@material-ui/icons/CloseRounded";

import { APPBAR_HEIGHT } from "./state/constants";
import { useWindowSize } from "../hooks";
import LayoutHeaderUserWidget from "./LayoutHeaderUserWidget";

const useStyles = makeStyles((theme) =>
  createStyles({
    appBar: {
      height: APPBAR_HEIGHT,
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      backdropFilter: "blur(5px)",
    },
    appBarToolbar: {
      minHeight: APPBAR_HEIGHT,
      paddingLeft: 22,
      color: theme.palette.primary.main,
      justifyContent: 'space-between'
    },
    appBarControls: { display: "flex", alignItems: "center" },
    appBarLogo: { width: 24, height: 24, display: "flex", marginRight: 22 },
    appBarRight: {
      display: "flex",
      justifyContent: "flex-start",
      paddingLeft: theme.spacing(6),
      [theme.breakpoints.down("md")]: {
        paddingLeft: theme.spacing(1),
      },
    },
    menuButton: {
      marginLeft: -12,
      "&:hover": {
        backgrounColor: "transparent",
      },
    },
    hidden: {
      display: "none",
    },
    icon: {
      color: theme.palette.primary.main,
      transition: theme.transitions.create("color"),
      "&:hover": {
        color: theme.palette.secondary.light,
      },
    },
  })
);

interface LayoutHeaderProps {
  open: boolean;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
}

const LayoutHeader: FC<LayoutHeaderProps> = ({
  open,
  handleDrawerOpen,
  handleDrawerClose,
}) => {
  const classes = useStyles();
  const windowSize = useWindowSize();

  return (
    <AppBar position="fixed" color="transparent" className={classes.appBar}>
      <Toolbar className={classes.appBarToolbar}>
        <Grid item className={classes.appBarControls} xs={2}>
          <div>
            {windowSize.isMinimizeDrawer && 0 ? (
              <img
                className={classes.appBarLogo}
                src="https://static.thenounproject.com/png/317039-200.png"
                alt="logo-icon"
              />
            ) : (
              <>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  className={clsx(classes.menuButton, {
                    [classes.hidden]: open,
                  })}
                >
                  <MenuIcon className={classes.icon} />
                </IconButton>
                <IconButton
                  color="inherit"
                  aria-label="close drawer"
                  onClick={handleDrawerClose}
                  edge="start"
                  className={clsx(classes.menuButton, {
                    [classes.hidden]: !open,
                  })}
                >
                  <CloseIcon className={classes.icon} />
                </IconButton>
              </>
            )}
          </div>
        </Grid>

        <Grid item className={classes.appBarRight} xs={10} sm={6} md={4}>
          <LayoutHeaderUserWidget />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default LayoutHeader;
