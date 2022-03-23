import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import { toast } from 'react-toastify';

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from '../validationSchema';
import { useAddContact } from 'hooks/queries/contacts';

import DialogBox from 'component/dialog'

const AddUserModal = ({ handleClose }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const { mutate: addContact, isLoading, isError, error, status } = useAddContact();

    const onSubmit = data => {
        addContact(data);
    };

    useEffect(() => {
        if (status === 'success') {
            toast.success("Contact added successfully!");
            handleClose();
        }
    }, [status]);

    return (
        <DialogBox
            open={true}
            onClose={handleClose}
            submit={handleSubmit(onSubmit)}
            isLoading={isLoading}
            title="New Contact"
        >
            <Stack
                direction="column"
                alignItems="center"
                justifyContent="center"
                spacing={1}
            >
                {isError && <Alert severity="error">
                    {isError && error.message || 'Something went wrong.'}
                </Alert>}
                <TextField
                    error={!!errors.userName}
                    name="userName"
                    label="Username"
                    fullWidth
                    {...register("userName")}
                    helperText={errors.userName?.message}
                />
                <TextField
                    error={!!errors.password}
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth
                    {...register("password")}
                    helperText={errors.password?.message}
                />
                <TextField
                    error={!!errors.firstName}
                    name="firstName"
                    label="FirstName"
                    fullWidth
                    {...register("firstName")}
                    helperText={errors.firstName?.message}
                />
                <TextField
                    error={!!errors.lastName}
                    name="lastName"
                    label="LastName"
                    fullWidth
                    {...register("lastName")}
                    helperText={errors.lastName?.message}
                />
                <TextField
                    error={!!errors.middleName}
                    name="middleName"
                    label="Middle Name"
                    fullWidth
                    {...register("middleName")}
                    helperText={errors.middleName?.message}
                />
                <TextField
                    error={!!errors.email}
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth
                    {...register("email")}
                    helperText={errors.email?.message}
                />
                <TextField
                    error={!!errors.mobileNo}
                    name="mobileNo"
                    label="Mobile No"
                    fullWidth
                    {...register("mobileNo")}
                    helperText={errors.mobileNo?.message}
                    type="number"
                    maxLength="11"
                />
            </Stack>
        </DialogBox>
    )
}

export default AddUserModal