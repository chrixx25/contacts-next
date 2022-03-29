import { Fragment, cloneElement } from "react";

import MuiMenu from "@mui/material/Menu";
import { nanoid } from "@reduxjs/toolkit";
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from "material-ui-popup-state/hooks";
import flattenChildren from "react-keyed-flatten-children";

import MenuItem from "./MenuItem";
import SubMenu from "./SubMenu";

const Menu = (props) => {
  const { action, children, ...rest } = props;

  const popupState = usePopupState({ variant: "popover", popupId: nanoid() });

  const createClickHandler = (childProps) => () => {
    popupState.close();
    childProps.onClick();
  };

  return (
    <>
      {action({ ...bindTrigger(popupState) })}
      <MuiMenu {...rest} {...bindMenu(popupState)}>
        {flattenChildren(children).map((child) =>
          cloneElement(child, {
            onClick: createClickHandler(child.props),
          })
        )}
      </MuiMenu>
    </>
  );
};

Menu.SubMenu = SubMenu;
Menu.Item = MenuItem;

export default Menu;
