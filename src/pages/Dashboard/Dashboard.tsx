import { FC } from "react";
import React from "react";
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

function createData(
  projectName: string,
  status: string,
  nextReview: string,
  milestones: string,
  delivery: string
) {
  return { projectName, status, nextReview, milestones, delivery };
}

const rows = [
  createData("Kona OS RTE", "DATA", "01/25/21", "0/7", "03/15/21"),
  createData("Sante Fe TDI", "REVIEW", "01/07/21", "3/5", "02/01/21"),
  createData("Kona OS Reveal", "PRODUCTION", "01/08/21", "3/4", "02/15/21"),
  createData("Kona EV RTE", "GARAGING", "01/31/21", "2/7", "04/01/21"),
  createData("Sonata NLine Wheel Cap", "DATA", "02/20/21", "0/4", "03/15/21"),
  createData("Nexo Hydrogen Decal", "DATA", "01/18/21", "0/4", "03/15/21"),
  createData("MY22 Hyundai Packshots", "DATA", "02/12/21", "0/7", "03/15/21"),
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
              <TableCell align="right">PROJECT NAME</TableCell>
              <TableCell align="right">STATUS</TableCell>
              <TableCell align="right">NEXT REVIEW</TableCell>
              <TableCell align="right">MILESTONES</TableCell>
              <TableCell align="right">DELIVERY</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.projectName}>
                <TableCell component="th" scope="row">
                  {row.projectName}
                </TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.nextReview}</TableCell>
                <TableCell align="right">{row.milestones}</TableCell>
                <TableCell align="right">{row.delivery}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
