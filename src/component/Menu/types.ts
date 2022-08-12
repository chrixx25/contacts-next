import { MenuItemProps } from "./MenuItem/types";
import { SubMenuProps } from "./SubMenu/types";

export interface CustomMenuProp {
  action?: any;
  children: any;
  onClick?: () => void;
}

export interface MenuElementProps {
  SubMenu: React.FC<SubMenuProps>;
  Item: React.FC<MenuItemProps>;
}
