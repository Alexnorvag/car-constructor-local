import React, { FC, MouseEvent, useState } from "react";
import {
  makeStyles,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Theme,
  withStyles,
} from "@material-ui/core";
import createStyles from "@material-ui/styles/createStyles";
import clsx from "clsx";

import { getCellValue } from "./helpers/cell-formatter";
import EnhancedTableBody from "./EnhancedTableBody";
import EnhancedTableContainer from "./EnhancedTableContainer";

const useStyles = makeStyles(() =>
  createStyles({
    head: {
      border: "2px solid #929497",
    },
    row: {
      "&:hover": {
        background: "#004EFD4B !important",
      },
    },
    cell: {
      color: "#fff",
      fontSize: 16,
      lineHeight: "28px",
      height: "30px",
      whiteSpace: "nowrap",
    },
    cellTh: {
      color: "#929497",
      textTransform: "uppercase",
    },
    emptyCell: {
      "&::before": {
        content: '"\\00a0"',
      },
    },
  })
);

const StickyTableCell = withStyles((theme: Theme) => ({
  head: {
    left: 0,
    posititon: "sticky",
    zIndex: theme.zIndex.appBar + 2,
  },
  body: {
    minWidht: 150,
    left: 0,
    posititon: "sticky",
    zIndex: theme.zIndex.appBar + 1,
  },
}))(TableCell);

interface PlainTableProps {
  columns: any;
  rows: any;
  withEmptyRows?: boolean;
  withMenu?: boolean;
  menuItems?: string[];
}

const PlainTable: FC<PlainTableProps> = ({
  columns,
  rows,
  withEmptyRows,
  withMenu,
  menuItems,
}) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const menuOpen = (event: MouseEvent<HTMLTableHeaderCellElement>) =>
    setAnchorEl(event.currentTarget);

  const menuClose = () => setAnchorEl(null);

  const cellRenderer = (column: any, columnIdx: number, row: any) => {
    const CellComponent = columnIdx ? TableCell : StickyTableCell;
    const extraClasses =
      row && column.classes && column.classes(row[column.dataKey]);

    return (
      <CellComponent
        key={columnIdx}
        variant="body"
        align={column.align || "left"}
        className={clsx(classes.cell, extraClasses, {
          [classes.emptyCell]: !row,
        })}
        onClick={row && menuOpen}
      >
        {getCellValue(column, row)}
      </CellComponent>
    );
  };

  const headerRenderer = (column: any, idx: number) => {
    const CellComponent = idx ? TableCell : StickyTableCell;
    const cellAlign = column.align || "left";

    return (
      <CellComponent
        key={column.dataKey}
        variant="head"
        align={cellAlign}
        className={clsx(classes.cell, classes.cellTh)}
      >
        <span>{column.label}</span>
      </CellComponent>
    );
  };

  const rowRenderer = (row: any, idx: number) => {
    return (
      <TableRow key={idx} className={classes.row}>
        {columns.map((column: any, columnIdx: number) =>
          cellRenderer(column, columnIdx, row)
        )}
      </TableRow>
    );
  };

  return (
    <EnhancedTableContainer
      withMenu={withMenu}
      menuItems={menuItems}
      anchorEl={anchorEl}
      menuClose={menuClose}
    >
      <Table size="small" aria-label="sticky table">
        <TableHead className={classes.head}>
          <TableRow>{columns.map(headerRenderer)}</TableRow>
        </TableHead>
        <EnhancedTableBody<any> rows={rows} withEmptyRows={withEmptyRows}>
          {(enhancedRows: any) => enhancedRows.map(rowRenderer)}
        </EnhancedTableBody>
      </Table>
    </EnhancedTableContainer>
  );
};

export default PlainTable;

PlainTable.defaultProps = {
  columns: [],
  rows: [],
  withEmptyRows: true,
  withMenu: false,
  menuItems: [],
};
