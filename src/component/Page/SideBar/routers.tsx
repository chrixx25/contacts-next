import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import SendIcon from '@mui/icons-material/Send';
import StarBorder from '@mui/icons-material/StarBorder';

interface Route {
  name: string;
  path: string;
  icon?: React.ReactNode;
  children?: Route[];
}

const routes: Route[] = [
  {
    name: 'Main',
    path: '/',
    icon: <DashboardIcon />,
    children: [
      {
        name: 'User',
        path: '/users',
        icon: null,
      },
    ],
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: <DashboardIcon />,
    children: [
      {
        name: 'Main',
        path: '/main',
        icon: null,
      },
    ],
  },
];

export default routes;
