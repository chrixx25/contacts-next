import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { styled } from "@mui/material/styles";
import { noop } from "lodash";

import Menu from "../Menu";
import MenuItem from "../MenuItem";

import { SubMenuProps } from "./types";

const StyledArrowRightIcon = styled(ArrowRightIcon)(() => ({
  marginLeft: "auto",
}));

const SubMenu = (props: SubMenuProps): React.ReactElement => {
  const { icon, label, children, ...rest } = props;

  const renderAction = (actionProps: any): React.ReactElement => (
    <MenuItem icon={icon} {...actionProps}>
      {label}
      <StyledArrowRightIcon />
    </MenuItem>
  );

  return (
    <Menu
      {...rest}
      action={renderAction}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "center",
        horizontal: "right",
      }}
    >
      {children}
    </Menu>
  );
};

SubMenu.defaultProps = {
  onClick: noop,
};

export default SubMenu;
