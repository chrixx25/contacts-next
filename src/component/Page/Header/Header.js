import React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { sessionOptions } from "utils/session";
import { useCookie } from "react-use";
import { useRouter } from "next/router";
import { useAppState } from "../context";
import Avatar from '@mui/material/Avatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';

import {
    usePopupState,
    bindTrigger,
    bindMenu,
} from "material-ui-popup-state/hooks";

const drawerWidth = 240;

const PageHeader = () => {
    const [state, dispatch] = useAppState();
    const router = useRouter();
    const [, , deleteCookie] = useCookie(sessionOptions.cookieName);
    const popupState = usePopupState({ variant: "popover", popupId: "settings" });

    const handleLogout = () => {
        deleteCookie();
        router.push("/login");
    };

    // const AppBar = styled(MuiAppBar, {
    // })();

    //const AppBar = MuiAppBar;

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        left: 0,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            marginLeft: drawerWidth,
            left: 0,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));

    return (
        <AppBar position="fixed" open={state.sidebarCollapsed} >
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={() => dispatch('sidebarCollapsed')}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                    CONTACT MANAGER
                </Typography>
                <IconButton
                    size="large"
                    color="inherit"
                    aria-label="show more"
                    aria-haspopup="true"
                    {...bindTrigger(popupState)}
                >
                    <AccountCircle />
                </IconButton>
                <Menu
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    onClick={popupState.close}
                    {...bindMenu(popupState)}
                >
                    <MenuItem onClick={handleLogout}>
                        <ListItemIcon>
                            <Logout color="action" fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar >
    );
}

export default PageHeader;