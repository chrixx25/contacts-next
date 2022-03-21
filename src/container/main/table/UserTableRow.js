import React, { useEffect } from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { toast } from 'react-toastify';

import { useDeleteContact } from 'hooks/queries/contacts';

const UserTableRow = ({ no, user, handleOpen }) => {
    const {
        id,
        firstName,
        lastName,
        middleName,
        email,
        mobileNo
    } = user;

    const { mutate: deleteContact, isLoading, status } = useDeleteContact();

    const handleDelete = (id) => {
        deleteContact(id)
    }

    useEffect(() => {
        if (status === 'success')
            toast.success("Contact deleted successfully!");
    }, [status]);

    return (
        <TableRow>
            <TableCell component="td" scope="row">
                {no}
            </TableCell>
            <TableCell component="td" scope="row">
                <IconButton onClick={() => handleOpen(id)} aria-label="edit">
                    <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(id)} disabled={isLoading} aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </TableCell>
            <TableCell component="td" scope="row">
                {`${firstName} ${middleName} ${lastName}`}
            </TableCell>
            <TableCell component="td" scope="row">
                {email}
            </TableCell>
            <TableCell component="td" scope="row">
                {mobileNo}
            </TableCell>
        </TableRow>
    )
}

export default UserTableRow