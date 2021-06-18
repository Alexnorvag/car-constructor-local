import React, { FC, useState, MouseEvent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
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
      <Button variant="contained" color="primary">
        Check Menu
      </Button>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row" onClick={handleClick}>
                  {row.name}
                </TableCell>
                <TableCell align="right" onClick={handleClick}>
                  {row.calories}
                </TableCell>
                <TableCell align="right" onClick={handleClick}>
                  {row.fat}
                </TableCell>
                <TableCell align="right" onClick={handleClick}>
                  {row.carbs}
                </TableCell>
                <TableCell align="right" onClick={handleClick}>
                  {row.protein}
                </TableCell>
              </TableRow>
            ))}
            <Menu
              id="card-actions-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => console.log("some action")}>
                Open
              </MenuItem>
            </Menu>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
