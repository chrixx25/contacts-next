import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Searchbar from "./Searchbar";

interface ITableToolbar {
  title: string;
}

const TableToolbar: React.FC<ITableToolbar> = (props) => {
  const { title } = props;
  return (
    <Paper>
      <Toolbar>
        <Typography fontWeight="fontWeightBold">{title}</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Searchbar />
      </Toolbar>
    </Paper>
  );
};

export default TableToolbar;
