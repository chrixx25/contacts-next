import { styled } from "@mui/material/styles";
import MuiTableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import { useDataTableContext } from "../context";

const StripedTableRow = styled(TableRow)({
  "&:nth-of-type(odd)": {
    backgroundColor: "#F9FCFF",
  },
});

const TableBody = () => {
  const { page, prepareRow } = useDataTableContext();

  return (
    <MuiTableBody>
      {page.map((row) => {
        prepareRow(row);
        return (
          <StripedTableRow {...row.getRowProps()} key={row.index}>
            {row.cells.map((cell) => (
              <TableCell
                {...cell.getCellProps()}
                key={`${row.index}-${cell.column.id}`}
              >
                {cell.render("Cell")}
              </TableCell>
            ))}
          </StripedTableRow>
        );
      })}
    </MuiTableBody>
  );
};

export default TableBody;
