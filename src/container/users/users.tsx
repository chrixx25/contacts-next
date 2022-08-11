import React, { useState, useMemo } from "react";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useModal } from "mui-modal-provider";

import DataTable from "component/DataTable";
import { useGetContacts } from "react-query/queries";

import ActionCell from "./ActionCell";
import AddContactModal from "./AddContactModal";

const Users = (): React.ReactElement => {
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);
  const userData = useGetContacts({ page, pageSize });
  const { showModal } = useModal();

  const columns = useMemo(
    () => [
      {
        Header: "#",
        id: "id",
        accessor: (_row, index) => index + 1,
      },
      {
        Header: "Actions ",
        id: "action",
        sticky: "right",
        disableSortBy: true,
        Cell: ActionCell,
      },
      {
        Header: "Fullname",
        id: "fullname",
        accessor: (row) =>
          `${row.firstName} ${row.middleName} ${row.lastName}`.trim(),
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Mobile No.",
        accessor: "mobileNo",
      },
    ],
    []
  );

  function handlePageChange(newPage: number): void {
    setPage(newPage);
  }

  function handleRowsPerPageChange(newPageSize: number): void {
    setPage(1);
    setPageSize(newPageSize);
  }

  // const StyledFab = styled(Fab)({
  //     position: 'absolute',
  //     zIndex: 1,
  //     bottom: 16,
  //     right: 16,
  //     margin: '0 auto',
  // });

  return (
    <>
      <Stack spacing={3}>
        <Stack direction="row" spacing={2}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "primary.main",
              maxWidth: "auto",
            }}
            onClick={() => showModal(AddContactModal)}
          >
            Add Contact
          </Button>
        </Stack>
        <DataTable
          data={userData.data.results}
          columns={columns}
          currentPage={userData.data.page}
          pageSize={userData.data.size}
          totalPages={userData.data.pages}
          totalRecords={userData.data.total}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
      </Stack>
    </>
  );
};

export default Users;
