import React from "react";

import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import MuiTable from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import Typography from "@mui/material/Typography";
import { noop } from "lodash";
import { usePagination, useSortBy, useTable } from "react-table";
import { useSticky } from "react-table-sticky";

import DataTableProvider from "./context";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { DataTableProps } from "./types";
import TablePaginationActions from "./TablePaginationActions";

const Table = styled(MuiTable)(({ theme }) => ({
  overflow: "auto",
  "& [data-sticky-td]": {
    position: "sticky",
  },
  "& [data-sticky-last-left-td]": {
    backgroundColor: theme.palette.common.white,
  },
  "& [data-sticky-first-right-td]": {
    backgroundColor: theme.palette.common.white,
  },
  "& > thead > tr > th": {
    whiteSpace: "nowrap",
  },
}));

interface DefaultCellProps {
  value: string | undefined;
}

interface IlabelDisplayedRows {
  from: number;
  to: number;
  count: number;
}

const DefaultCell: React.FC<DefaultCellProps> = ({ value }) => (
  <Typography noWrap>{value || "Not Applicable"}</Typography>
);

const defaultColumn = {
  Cell: DefaultCell,
};

const DataTable: React.FC<DataTableProps> = (props) => {
  const {
    columns,
    data,
    currentPage,
    pageSize,
    totalPages,
    totalRecords,
    onPageChange,
    onRowsPerPageChange,
  } = props;

  const tableInstance = useTable(
    {
      columns,
      data,
      defaultColumn,
      useControlledState: (state) =>
        React.useMemo(
          () => ({
            ...state,
            pageIndex: currentPage,
          }),
          [state]
        ),
      initialState: { currentPage, pageSize },
      manualPagination: true,
      pageCount: totalPages,
    },
    useSortBy,
    usePagination,
    useSticky
  );

  const {
    getTableProps,
    state: { pageIndex },
  } = tableInstance;

  function labelDisplayedRows({ from, to, count }: IlabelDisplayedRows): any {
    return `Showing ${from} to ${to} of ${count} entries`;
  }

  function handleChangePage(_event, newPage: number): void {
    onPageChange(newPage);
  }

  function handleChangeRowsPerPage(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    onRowsPerPageChange(Number(event.target.value));
  }

  return (
    <DataTableProvider initialValue={{ ...tableInstance }}>
      <Paper>
        <TableContainer>
          <Table {...getTableProps()}>
            <TableHead />
            <TableBody />
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          rowsPerPageOptions={[5, 10, 25]}
          labelRowsPerPage={null}
          count={totalRecords}
          rowsPerPage={pageSize}
          page={pageIndex - 1}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelDisplayedRows={(page) => labelDisplayedRows(page)}
          ActionsComponent={TablePaginationActions}
        />
      </Paper>
    </DataTableProvider>
  );
};

DataTable.defaultProps = {
  columns: [],
  data: [],
  currentPage: 1,
  pageSize: 10,
  totalPages: 0,
  totalRecords: 0,
  onPageChange: noop,
  onRowsPerPageChange: noop,
};

export default DataTable;
