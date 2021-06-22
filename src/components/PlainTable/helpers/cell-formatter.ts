import { TableColumn } from "../state/types";

export const getCellValue = (column: TableColumn<any>, row: any) => {
  if (!column || !row) return null;

  let value = column.dataKey && row[column.dataKey];
  if (value === null) return null;

  if (column.formatter) {
    return column.formatter({ [column.dataKey]: row[column.dataKey] });
  }

  return value;
};
