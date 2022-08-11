import DashboardIcon from "@mui/icons-material/Dashboard";

interface Route {
  name: string;
  path: string;
  icon?: React.ReactNode;
  children?: Route[];
}

const routes: Route[] = [
  {
    name: "Main",
    path: "/",
    icon: <DashboardIcon />,
    children: [
      {
        name: "User",
        path: "/users",
        icon: null,
      },
    ],
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <DashboardIcon />,
    children: [
      {
        name: "Main",
        path: "/main",
        icon: null,
      },
    ],
  },
];

export default routes;
