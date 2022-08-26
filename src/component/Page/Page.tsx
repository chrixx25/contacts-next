import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Header from "./Header";
import SideBar from "./SideBar";
import Content from "./Content";
import AppStateProvider, { initialState } from "./context";

type Children = React.ReactNode | string | React.FC;

interface Props {
  children?: Children;
}

const Page: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <AppStateProvider initialState={{ ...initialState, ...rest }}>
      <Box sx={{ display: "flex" }}>
        <Header />
        <SideBar />
        <Content>
          <Toolbar />
          {children}
        </Content>
      </Box>
    </AppStateProvider>
  );
};

export default Page;
