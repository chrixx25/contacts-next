import Header from './Header';
import SideBar from './SideBar';
import Content from './Content';
import AppStateProvider, { initialState } from './context';
import Box from '@mui/material/Box';
import Toolbar from "@mui/material/Toolbar";

const Page = ({ children, ...rest }) => {
    return (
        <AppStateProvider initialState={{ ...initialState, ...rest }}>
            <Box sx={{ display: 'flex' }}>
                <Header />
                <SideBar />
                <Content>
                    <Toolbar />
                    {children}
                </Content>
            </Box>
        </AppStateProvider>
    )
}

export default Page;