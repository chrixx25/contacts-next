import { cloneElement } from "react";

import ListItemIcon from "@mui/material/ListItemIcon";
import MuiMenuItem from "@mui/material/MenuItem";
import { noop } from "lodash";

import { MenuItemProps } from "./types";

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { icon, children, ...rest } = props;

  return (
    <MuiMenuItem {...rest}>
      <ListItemIcon>
        {cloneElement(icon, {
          color: "action",
          fontSize: "small",
        })}
      </ListItemIcon>
      {children}
    </MuiMenuItem>
  );
};

MenuItem.defaultProps = {
  onClick: noop,
};

export default MenuItem;
