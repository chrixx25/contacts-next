import { MenuProps } from "@mui/material/Menu";

export interface CustomMenuProp extends Omit<MenuProps, "open"> {
  action?: any;
  children: any;
  onClick?: () => void;
}
