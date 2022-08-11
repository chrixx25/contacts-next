export interface MenuProps {
  action: any;
  // children: any;
  onClick: () => void;
}

export interface MenuElementProps {
  SubMenu: React.FC;
  Item: React.FC;
}
