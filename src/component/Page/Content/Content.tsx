import Box from "@mui/material/Box";

interface ContentProps {
  children: React.FC | React.ReactNode | React.ReactElement;
}

const Content = ({ children }: ContentProps): React.ReactElement => (
  <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    {children}
  </Box>
);

export default Content;
