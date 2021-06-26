import Route from "../../../routes/types";

export interface AuthContainerInputProps {
  id: string;
  label: string;
  autoComplete: string;
  type?: string;
  value: string;
  isToggled?: boolean;
  onChange: (value: string) => void;
  onToggle?: () => void;
  spacing?: number;
}

export interface AuthContainerButtonProps {
  primary?: boolean;
  id?: string;
  type?: string;
  text: string;
  link?: Route;
}
