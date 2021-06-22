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
import React, { MouseEvent, useState } from "react";

import EnhancedTableBody from "./EnhancedTableBody";
import EnhancedTableContainer from "./EnhancedTableContainer";
import { getCellValue } from "./helpers/cell-formatter";
import { TableColumn } from "./state/types";

const useStyles = makeStyles(() =>
  createStyles({
    head: {
      border: "2px solid #929497",
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
    position: "sticky",
    zIndex: theme.zIndex.appBar + 2,
  },
  body: {
    minWidth: 150,
    left: 0,
    position: "sticky",
    zIndex: theme.zIndex.appBar + 1,
  },
}))(TableCell);

interface PlainTableProps<RowType> {
  columns: TableColumn<RowType>[];
  rows: RowType[];
  withEmptyRows?: boolean;
  withMenu?: boolean;
  menuItems?: string[];
}

function PlainTable<RowType>({
  columns,
  rows,
  withEmptyRows,
  withMenu,
  menuItems,
}: PlainTableProps<RowType>) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const menuOpen = (event: MouseEvent<HTMLTableHeaderCellElement>) =>
    setAnchorEl(event.currentTarget);

  const menuClose = () => setAnchorEl(null);

  const cellRenderer = (
    column: TableColumn<any>,
    columnIdx: number,
    row: any
  ) => {
    const CellComponent = columnIdx ? TableCell : StickyTableCell;

    const extraClasses =
      row &&
      column.classes &&
      column.classes({ [column.dataKey]: row[column.dataKey] });

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

  const headerRenderer = (column: TableColumn<RowType>, idx: number) => {
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

  const rowRenderer = (row: RowType, idx: number) => {
    return (
      <TableRow key={idx} hover>
        {columns.map((column, columnIdx) =>
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
        <EnhancedTableBody<RowType> rows={rows} withEmptyRows={withEmptyRows}>
          {(enhancedRows) => enhancedRows.map(rowRenderer)}
        </EnhancedTableBody>
      </Table>
    </EnhancedTableContainer>
  );
}

export default PlainTable;

PlainTable.defaultProps = {
  columns: [],
  rows: [],
  withEmptyRows: true,
  withMenu: false,
  menuItems: [],
};
