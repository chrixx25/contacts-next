import React, { useState, useMemo } from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useModal } from "mui-modal-provider";
// Normal Table
// import AddUserModal from './modals/AddUserModal';
// import EditUserModal from './modals/EditUserModal';
import AddContactModal from './AddContactModal';
import UserTable from './table/UserTable';
import { useGetContacts } from 'hooks/queries/contacts';
//Datatable
import DataTable from "component/DataTable";
import ActionCell from "./ActionCell";

const Main = () => {
    // const [open, setOpen] = useState(false);
    // const [openEdit, setOpenEdit] = useState(false);
    // const [id, setId] = useState(false);

    const userData = useGetContacts();
    const { showModal } = useModal();

    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
    // const handleOpenEdit = (id) => {
    //     setId(id);
    //     setOpenEdit(true);
    // };
    // const handleCloseEdit = () => setOpenEdit(false);

    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [filter, setFilter] = useState({});

    const columns = useMemo(
        () => [
            {
                Header: "#",
                id: "id",
                accessor: (_row, index) => {
                    return (index + 1)
                },
            },
            {
                Header: "Actions ",
                id: "action",
                sticky: "right",
                disableSortBy: true,
                Cell: ActionCell
            },
            {
                Header: "Fullname",
                id: "fullname",
                accessor: (row) => {
                    return `${row.firstName} ${row.middleName} ${row.lastName}`.trim()
                },
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
        [1, 10]
    );

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const handleRowsPerPageChange = (newPageSize) => {
        setPage(1);
        setPageSize(newPageSize);
    };

    return (
        <>
            <Stack spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <Stack
                            direction="row"
                            spacing={2}
                            mb={2}
                        >
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{
                                    backgroundColor: 'primary.main',
                                    maxWidth: 'auto'
                                }}
                                // onClick={handleOpen}
                                onClick={() =>
                                    showModal(AddContactModal)
                                }
                            >
                                Add Contact
                            </Button>
                        </Stack>
                        <UserTable
                            // handleOpen={handleOpenEdit}
                            userData={userData}
                        />
                    </Paper>
                </Grid>

                <DataTable
                    data={userData.data}
                    columns={columns}
                    currentPage={1}
                    pageSize={5}
                    totalPages={2}
                    totalRecords={7}
                    onPageChange={handlePageChange}
                    onRowsPerPageChange={handleRowsPerPageChange}
                />
            </Stack>
            {/* {open && <AddUserModal handleClose={handleClose} />}
            {id && openEdit && <EditUserModal id={id} handleClose={handleCloseEdit} />} */}
        </>
    )
}

export default Main;