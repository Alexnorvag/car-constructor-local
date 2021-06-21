import { ReactNode, useMemo } from "react";
import { TableBody } from "@material-ui/core";

import { TABLE_PAGE_SIZE } from "./state/constants";

interface EnhancedTableBodyProps<T> {
  children: (item: T[]) => ReactNode;
  rows: any;
  withEmptyRows?: boolean;
}

const EnhancedTableBody = <T,>({
  children,
  rows,
  withEmptyRows,
}: EnhancedTableBodyProps<T>) => {
  const enhancedRows = useMemo(
    () => [
      ...rows,
      ...(withEmptyRows ? new Array(TABLE_PAGE_SIZE - rows.length) : []),
    ],
    [rows, withEmptyRows]
  );

  return <TableBody>{children(enhancedRows)}</TableBody>;
};

export default EnhancedTableBody;

EnhancedTableBody.defaultProps = {
  rows: [],
  withEmptyRows: false,
};
