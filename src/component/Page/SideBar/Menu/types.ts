interface Route {
  name: string;
  path: string;
  icon?: React.ReactNode;
  children?: Route[];
}

export interface MenuProps {
  routes: Route[];
  isCollapsed: boolean;
}
