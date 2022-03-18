import React, { useState } from 'react';
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';

import PageHeader from '../../container/pageHeader';
import AddUserModal from './modals/AddUserModal';
import EditUserModal from './modals/EditUserModal';
import UserTable from './table/UserTable';
import { useGetContacts } from 'hooks/queries/contacts'

const Main = () => {
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [id, setId] = useState(false);

    const userData = useGetContacts();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpenEdit = (id) => {
        setId(id);
        setOpenEdit(true);
    };
    const handleCloseEdit = () => setOpenEdit(false);


    return (
        <>
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <PageHeader />
                <Container maxWidth="lg" sx={{ mt: 4 }}>
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
                                    onClick={handleOpen}
                                >
                                    Add Contact
                                </Button>
                            </Stack>
                            <UserTable handleOpen={handleOpenEdit} userData={userData} />
                        </Paper>
                    </Grid>
                </Container>
            </Box>
            {open && <AddUserModal handleClose={handleClose} />}
            {id && openEdit && <EditUserModal id={id} handleClose={handleCloseEdit} />}
        </>
    )
}

export default Main;