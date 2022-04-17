import React, { useEffect } from 'react'
import Stack from '@mui/material/Stack';
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import { toast } from 'react-toastify';

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from '../validationSchema';

import { useGetContactById } from 'react-query/queries';
import { useUpdateContact } from 'react-query/mutations';
import DialogBox from 'component/dialog'

const EditUserModal = ({ id, handleClose }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const contactById = useGetContactById(id);
    const updateContact = useUpdateContact(id);

    const onSubmit = data => {
        delete data.id;
        updateContact.mutate(data);
    };

    //effect runs when user state is updated
    useEffect(() => {
        // reset form with user data
        reset(contactById.data);
        if (updateContact.status === 'success') {
            toast.success("Contact updated successfully!");
            handleClose();
        }
    }, [updateContact.status, contactById.data, reset]);

    return (
        <DialogBox
            open={true}
            onClose={handleClose}
            submit={handleSubmit(onSubmit)}
            isLoading={updateContact.isLoading}
            title="Edit Contact"
        >
            <Stack
                direction="column"
                alignItems="center"
                justifyContent="center"
                spacing={1}
            >
                {updateContact.isError && <Alert severity="error">
                    {updateContact.isError && updateContact.error.message || 'Something went wrong.'}
                </Alert>}
                <TextField
                    error={!!errors.userName}
                    name="userName"
                    label="Username"
                    fullWidth
                    {...register("userName")}
                    helperText={errors.userName?.message}
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    error={!!errors.firstName}
                    name="firstName"
                    label="FirstName"
                    fullWidth
                    {...register("firstName")}
                    helperText={errors.firstName?.message}
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    error={!!errors.lastName}
                    name="lastName"
                    label="LastName"
                    fullWidth
                    {...register("lastName")}
                    helperText={errors.lastName?.message}
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    error={!!errors.middleName}
                    name="middleName"
                    label="Middle Name"
                    fullWidth
                    {...register("middleName")}
                    helperText={errors.middleName?.message}
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    error={!!errors.email}
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth
                    {...register("email")}
                    helperText={errors.email?.message}
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    error={!!errors.mobileNo}
                    name="mobileNo"
                    label="Mobile No"
                    fullWidth
                    {...register("mobileNo")}
                    helperText={errors.mobileNo?.message}
                    InputLabelProps={{ shrink: true }}
                    type="number"
                    maxLength="11"
                />
            </Stack>
        </DialogBox>
    )
}

export default EditUserModal