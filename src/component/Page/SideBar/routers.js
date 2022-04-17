import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import StarBorder from '@mui/icons-material/StarBorder';

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
    },
    {
        name: "User",
        path: "/users",
        icon: <InboxIcon />,
        subMenus: [
            {
                name: "User",
                path: "/users",
                icon: <StarBorder />,
            }
        ]
    },
    {
        name: "send",
        path: "/send",
        icon: <SendIcon />,
        subMenus: [
            {
                name: "send",
                path: "/send",
                icon: <SendIcon />,
            }
        ]
    },
];

export default routes;
