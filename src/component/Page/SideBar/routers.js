import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";

const routes = [
    {
        name: "Main",
        path: "/",
        icon: <DashboardIcon />,
    },
    {
        name: "User",
        path: "/users",
        icon: <GroupIcon />,
    }
];

export default routes;
