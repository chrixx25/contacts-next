import { useState, Fragment } from 'react';
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useAppState } from "../context";
import { styled, useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import routes from "./routers";
import Link from "next/link";
// import ListSubheader from '@mui/material/ListSubheader';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { sessionOptions } from "utils/session";
import { useUser } from 'contexts/UserProvider';
import { useCookie } from "react-use";
import jwtDecode from "jwt-decode";

const openedMixin = (theme) => ({
    width: theme.drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
    }),
    overflowX: "hidden"
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`
    }
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
    width: theme.drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme)
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme)
    })
}));

const SideBar = () => {
    const theme = useTheme();
    const [state, dispatch] = useAppState();
    const [value, ,] = useCookie(sessionOptions.cookieName);
    const [subListState, setSubListState] = useState({});
    const user = useUser()[0]?.result || (value ? jwtDecode(value).result : {});

    const handleClick = (key) => {
        setSubListState(old => {
            return { ...old, [key]: !(subListState[key] || false) }
        });
    };

    return (
        <Drawer variant="permanent" open={state.sidebarCollapsed}>
            <DrawerHeader>
                <IconButton onClick={() => dispatch('sidebarCollapsed')}>
                    {theme.direction === "rtl" ? (
                        <ChevronRightIcon />
                    ) : (
                        <ChevronLeftIcon />
                    )}
                </IconButton>
            </DrawerHeader>
            <Divider />
            {state.sidebarCollapsed &&
                <Card sx={{ m: 2, borderRadius: 3, backgroundColor: 'primary.main', color: 'white' }} variant="outlined">
                    <CardContent sx={{ textAlign: 'center' }}>
                        <Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
                            Welcome
                        </Typography>
                        <Typography variant="body2">
                            {`${user?.firstName} ${user?.middleName} ${user?.lastName}`.trim()}
                        </Typography>
                    </CardContent>
                </Card>}
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
            // subheader={
            //     <ListSubheader component="div" id="nested-list-subheader">
            //         Nested List Items
            //     </ListSubheader>
            // }
            >
                {routes.map(({ name, path, icon, subMenus }, index) => {
                    if (subMenus) {
                        return (
                            <Fragment key={index}>
                                <ListItemButton onClick={() => handleClick(name)}>
                                    <ListItemIcon>
                                        <InboxIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={name} />
                                    {subListState[name] ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={subListState[name]} timeout="auto" unmountOnExit>
                                    {subMenus.length > 0 && subMenus.map((subMenu, subIndex) =>
                                        <Link key={subIndex} href={subMenu.path} passHref>
                                            <List component="div" disablePadding>
                                                <ListItemButton sx={{ pl: 4 }} >
                                                    <ListItemIcon>
                                                        {subMenu.icon}
                                                    </ListItemIcon>
                                                    <ListItemText primary={subMenu.name} />
                                                </ListItemButton>
                                            </List>
                                        </Link>
                                    )}
                                </Collapse>
                            </Fragment>
                        );
                    }

                    return (
                        <Link key={index} href={path} passHref>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: state.sidebarCollapsed ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: state.sidebarCollapsed ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {icon}
                                </ListItemIcon>
                                <ListItemText primary={name} sx={{ opacity: state.sidebarCollapsed ? 1 : 0 }} />
                            </ListItemButton>
                        </Link>
                    );
                })}
            </List>
        </Drawer>
    )
}

export default SideBar