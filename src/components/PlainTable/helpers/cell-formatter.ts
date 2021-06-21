export const getCellValue = (column: any, row: any) => {
  if (!column || !row) return null;

  let value = column.dataKey && row[column.dataKey];
  if (value === null) return null;

  if (column.formatter) {
    return column.formatter(row[column.dataKey]);
  }

  return value;
};
