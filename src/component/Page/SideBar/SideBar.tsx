import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Divider from "@mui/material/Divider";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";

import { useAppState } from "../context";

import Menu from "./Menu";
import routes from "./routers";

interface StyledTheme extends Theme {
  drawerWidth: number;
}

interface DrawerTheme {
  open: boolean;
  theme?: StyledTheme;
}

const openedMixin = (theme: StyledTheme): CSSObject => ({
  width: theme.drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: StyledTheme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }: DrawerTheme) => ({
  width: theme.drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const SideBar = () => {
  const theme = useTheme();
  const [state, dispatch] = useAppState();
  // const user = useUser()[0]?.result;

  return (
    <Drawer variant="permanent" open={state.sidebarCollapsed}>
      <DrawerHeader>
        <IconButton onClick={() => dispatch("sidebarCollapsed")}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      {/* {state.sidebarCollapsed && (
        <Card
          sx={{
            m: 2,
            borderRadius: 3,
            backgroundColor: 'primary.main',
            color: 'white',
          }}
          variant='outlined'>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography sx={{ fontSize: 14 }} color='white' gutterBottom>
              Welcome
            </Typography>
            <Typography variant='body2'>
              {`${user?.firstName} ${user?.middleName} ${user?.lastName}`.trim()}
            </Typography>
          </CardContent>
        </Card>
      )} */}
      <Menu routes={routes} isCollapsed={state.sidebarCollapsed} />
    </Drawer>
  );
};

export default SideBar;
