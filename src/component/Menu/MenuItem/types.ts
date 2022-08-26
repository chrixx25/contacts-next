import { MenuItemProps } from "@mui/material/MenuItem";

export interface CustomMenuItemProps extends MenuItemProps {
  icon?: React.ReactElement;
  children?: React.ReactNode | string;
  onClick?: () => any;
}
