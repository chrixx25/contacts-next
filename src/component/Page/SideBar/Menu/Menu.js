import { useState, Fragment } from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import { useAppState } from "../../context";
import routes from "../routers";

const Menu = () => {
    const router = useRouter()
    const [state] = useAppState();
    const [subListState, setSubListState] = useState({});

    const handleClick = (key) => {
        setSubListState(prev => ({ ...prev, [key]: !(subListState[key] || false) }));
    };

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            {routes.map(({ name, path, icon, subMenus }, index) => {
                if (subMenus) {
                    return (
                        <Fragment key={index}>
                            <ListItemButton selected={path === router.pathname} onClick={() => handleClick(name)}>
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
                            selected={path === router.pathname}
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
    );
};

export default Menu;