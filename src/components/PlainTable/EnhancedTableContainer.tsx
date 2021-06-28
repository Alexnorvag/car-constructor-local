import React, { FC, useMemo } from "react";
import {
  createStyles,
  makeStyles,
  Menu,
  MenuItem,
  Paper,
  TableContainer,
  Theme,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tableContainer: {
      width: "100%",
      height: "100%",
      overflowX: "auto",
      background: "transparent",
      borderRadius: 0,
    },
    menuContainer: {
      background: theme.palette.primary.main,
      borderRadius: "unset",
      border: "2px solid",
      borderColor: theme.palette.primary.light,
      paddingBlock: theme.spacing(2),
      minWidth: "160px",
    },
    menuList: {
      padding: 0,
    },
    menuItem: {
      fontSize: "16px",
      textTransform: "uppercase",
      color: theme.palette.primary.light,
      lineHeight: "28px",
      paddingInline: theme.spacing(2),
    },
  })
);

interface EnhancedTableContainerProps {
  withMenu?: boolean;
  menuItems?: string[];
  anchorEl: any;
  menuClose: any;
}

const EnhancedTableContainer: FC<EnhancedTableContainerProps> = ({
  children,
  withMenu,
  menuItems,
  anchorEl,
  menuClose,
}) => {
  const classes = useStyles();

  const tableContent = useMemo(
    () =>
      withMenu ? (
        <>
          {children}
          <Menu
            classes={{
              paper: classes.menuContainer,
              list: classes.menuList,
            }}
            anchorEl={anchorEl}
            getContentAnchorEl={null}
            open={Boolean(anchorEl)}
            onClose={menuClose}
            disableAutoFocusItem={true}
            keepMounted
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            transformOrigin={{ vertical: "top", horizontal: "center" }}
          >
            {menuItems?.map((item, idx) => (
              <MenuItem
                key={idx}
                classes={{
                  root: classes.menuItem,
                }}
                disableGutters
                onClick={() => {
                  // TODO: change to real handlers
                  console.log(`${item} action`);
                  menuClose();
                }}
              >
                {item}
              </MenuItem>
            ))}
          </Menu>
        </>
      ) : (
        children
      ),
    [anchorEl, children, classes, menuClose, menuItems, withMenu]
  );

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      {tableContent}
    </TableContainer>
  );
};

export default EnhancedTableContainer;
