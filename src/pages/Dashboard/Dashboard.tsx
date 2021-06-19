import React, { FC, useState, MouseEvent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  createStyles,
  Grid,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Theme,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tableContainer: {
      background: "transparent",
    },
    table: {
      minWidth: 650,
    },
    tableHead: {
      border: "2px solid #929497",
    },
    tableHeadCell: {
      color: "#929497",
      fontSize: "16px",
      textTransform: "uppercase",
      lineHeight: "28px",
    },
    tableCell: {
      color: "#fff",
      fontSize: "16px",
      lineHeight: "28px",
    },
    menuContainer: {
      background: "#929497",
      borderRadius: "unset",
      border: "solid 2px #fff",
      padding: theme.spacing(2),
      minWidth: "160px",
    },
    menuList: {
      padding: 0,
    },
    menuItem: {
      fontSize: "16px",
      textTransform: "uppercase",
      color: "#fff",
      lineHeight: "28px",
    },
    tableRow: {
      "&:hover": {
        background: "#004EFD4B !important",
      },
    },
    root: {
      flexGrow: 1,
    },
    projectsTable: {
      minWidth: 550,
    },
    detailsTable: {
      minWidth: 250,
    },
  })
);

function createProjectsData(
  projectName: string,
  status: string,
  nextReview: string,
  milestones: string,
  delivery: string
) {
  return { projectName, status, nextReview, milestones, delivery };
}

const projectsData = [
  createProjectsData("Kona OS RTE", "DATA", "01/25/21", "0/7", "03/15/21"),
  createProjectsData("Sante Fe TDI", "REVIEW", "01/07/21", "3/5", "02/01/21"),
  createProjectsData(
    "Kona OS Reveal",
    "PRODUCTION",
    "01/08/21",
    "3/4",
    "02/15/21"
  ),
  createProjectsData("Kona EV RTE", "GARAGING", "01/31/21", "2/7", "04/01/21"),
  createProjectsData(
    "Sonata NLine Wheel Cap",
    "DATA",
    "02/20/21",
    "0/4",
    "03/15/21"
  ),
  createProjectsData(
    "Nexo Hydrogen Decal",
    "DATA",
    "01/18/21",
    "0/4",
    "03/15/21"
  ),
  createProjectsData(
    "MY22 Hyundai Packshots",
    "DATA",
    "02/12/21",
    "0/7",
    "03/15/21"
  ),
];
function createDetailsData(model: string, status: string) {
  return { model, status };
}
const detailsData = [
  createDetailsData("MY21 Elantra", "150% Model"),
  createDetailsData("MY21 Santa Fe", "Garaging"),
  createDetailsData("MY21 Tuscon", "Garaging"),
];
export const Dashboard: FC = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLTableHeaderCellElement>) => {
    console.log("event.currentTarget: ", event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ color: "red" }}>
      <Grid container className={classes.root} spacing={5}>
        <Grid item xs={12} md={8}>
          <TableContainer component={Paper} className={classes.tableContainer}>
            <Table
              className={classes.projectsTable}
              size="small"
              aria-label="a dense table"
            >
              <TableHead className={classes.tableHead}>
                <TableRow>
                  <TableCell className={classes.tableHeadCell} align="left">
                    PROJECT NAME
                  </TableCell>
                  <TableCell className={classes.tableHeadCell} align="left">
                    STATUS
                  </TableCell>
                  <TableCell className={classes.tableHeadCell} align="right">
                    NEXT REVIEW
                  </TableCell>
                  <TableCell className={classes.tableHeadCell} align="right">
                    MILESTONES
                  </TableCell>
                  <TableCell className={classes.tableHeadCell} align="right">
                    DELIVERY
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {projectsData.map((row) => (
                  <TableRow
                    key={row.projectName}
                    hover
                    className={classes.tableRow}
                  >
                    <TableCell
                      className={classes.tableCell}
                      align="left"
                      component="th"
                      scope="row"
                      onClick={handleClick}
                    >
                      {row.projectName}
                    </TableCell>
                    <TableCell
                      className={classes.tableCell}
                      align="left"
                      onClick={handleClick}
                    >
                      {row.status}
                    </TableCell>
                    <TableCell
                      className={classes.tableCell}
                      align="center"
                      onClick={handleClick}
                    >
                      {row.nextReview}
                    </TableCell>
                    <TableCell
                      className={classes.tableCell}
                      align="center"
                      onClick={handleClick}
                    >
                      {row.milestones}
                    </TableCell>
                    <TableCell
                      className={classes.tableCell}
                      align="center"
                      onClick={handleClick}
                    >
                      {row.delivery}
                    </TableCell>
                  </TableRow>
                ))}
                <Menu
                  classes={{
                    paper: classes.menuContainer, // class name, e.g. `classes-nesting-root-x`
                    list: classes.menuList,
                  }}
                  id="card-actions-menu"
                  anchorEl={anchorEl}
                  getContentAnchorEl={null}
                  anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                  transformOrigin={{ vertical: "top", horizontal: "center" }}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem
                    classes={{
                      root: classes.menuItem,
                    }}
                    disableGutters
                    onClick={() => {
                      // TODO: change to real handlers
                      console.log("Open action");
                      handleClose();
                    }}
                  >
                    Open
                  </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.menuItem,
                    }}
                    disableGutters
                    onClick={() => {
                      // TODO: change to real handlers
                      console.log("Edit action");
                      handleClose();
                    }}
                  >
                    Edit
                  </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.menuItem,
                    }}
                    disableGutters
                    onClick={() => {
                      // TODO: change to real handlers
                      console.log("Duplicate action");
                      handleClose();
                    }}
                  >
                    Duplicate
                  </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.menuItem,
                    }}
                    disableGutters
                    onClick={() => {
                      // TODO: change to real handlers
                      console.log("Download action");
                      handleClose();
                    }}
                  >
                    Download
                  </MenuItem>
                </Menu>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} md={4}>
          <TableContainer component={Paper} className={classes.tableContainer}>
            <Table
              className={classes.detailsTable}
              size="small"
              aria-label="a dense table"
            >
              <TableHead className={classes.tableHead}>
                <TableRow>
                  <TableCell className={classes.tableHeadCell} align="left">
                    MODEL
                  </TableCell>
                  <TableCell className={classes.tableHeadCell} align="right">
                    STATUS
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {detailsData.map((row) => (
                  <TableRow hover className={classes.tableRow} key={row.model}>
                    <TableCell
                      className={classes.tableCell}
                      align="left"
                      component="th"
                      scope="row"
                    >
                      {row.model}
                    </TableCell>
                    <TableCell className={classes.tableCell} align="right">
                      {row.status}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
};
