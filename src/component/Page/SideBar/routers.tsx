import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import SendIcon from '@mui/icons-material/Send';
import StarBorder from '@mui/icons-material/StarBorder';

interface Route {
  name: string;
  path: string;
  icon?: React.ReactNode;
  subMenus?: Route[];
}

const routes: Route[] = [
  {
    name: 'Main',
    path: '/',
    icon: <DashboardIcon />,
  },
  {
    name: 'User',
    path: '/users',
    icon: <GroupIcon />,
  },
  {
    name: 'User',
    path: '/users',
    icon: <InboxIcon />,
    subMenus: [
      {
        name: 'User',
        path: '/users',
        icon: <StarBorder />,
      },
    ],
  },
  {
    name: 'send',
    path: '/send',
    icon: <SendIcon />,
    subMenus: [
      {
        name: 'send',
        path: '/send',
        icon: <SendIcon />,
      },
    ],
  },
];

export default routes;
