export interface TableColumn<T> {
  label: string;
  dataKey: string;
  align?: "left" | "right" | "inherit" | "center" | "justify";
  formatter?: (item: Partial<T>) => string;
  classes?: (item: Partial<T>) => string;
}
