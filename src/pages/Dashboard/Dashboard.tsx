import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

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
  createProjectsData("Kona OS Reveal", "PRODUCTION", "01/08/21", "3/4", "02/15/21"),
  createProjectsData("Kona EV RTE", "GARAGING", "01/31/21", "2/7", "04/01/21"),
  createProjectsData("Sonata NLine Wheel Cap", "DATA", "02/20/21", "0/4", "03/15/21"),
  createProjectsData("Nexo Hydrogen Decal", "DATA", "01/18/21", "0/4", "03/15/21"),
  createProjectsData("MY22 Hyundai Packshots", "DATA", "02/12/21", "0/7", "03/15/21"),
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

  return (
    <div style={{ color: "red" }}>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="left">PROJECT NAME</TableCell>
              <TableCell align="left">STATUS</TableCell>
              <TableCell align="right">NEXT REVIEW</TableCell>
              <TableCell align="right">MILESTONES</TableCell>
              <TableCell align="right">DELIVERY</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projectsData.map((row) => (
              <TableRow key={row.projectName}>
                <TableCell align="left" component="th" scope="row">
                  {row.projectName}
                </TableCell>
                <TableCell align="left">{row.status}</TableCell>
                <TableCell align="center">{row.nextReview}</TableCell>
                <TableCell align="center">{row.milestones}</TableCell>
                <TableCell align="center">{row.delivery}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="left">MODEL</TableCell>
              <TableCell align="right">STATUS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {detailsData.map((row) => (
              <TableRow key={row.model}>
                <TableCell align="left" component="th" scope="row">
                  {row.model}
                </TableCell>
                <TableCell align="right">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
