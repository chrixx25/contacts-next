import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useModal } from "mui-modal-provider";

// import AddUserModal from './modals/AddUserModal';
// import EditUserModal from './modals/EditUserModal';
import AddContactModal from './AddContactModal';
import UserTable from './table/UserTable';
import { useGetContacts } from 'hooks/queries/contacts'

const Main = () => {
    // const [open, setOpen] = useState(false);
    // const [openEdit, setOpenEdit] = useState(false);
    // const [id, setId] = useState(false);

    const userData = useGetContacts();
    const { showModal } = useModal();

    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
    const handleOpenEdit = (id) => {
        setId(id);
        setOpenEdit(true);
    };
    // const handleCloseEdit = () => setOpenEdit(false);

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
            </Stack>
            {/* {open && <AddUserModal handleClose={handleClose} />}
            {id && openEdit && <EditUserModal id={id} handleClose={handleCloseEdit} />} */}
        </>
    )
}

export default Main;