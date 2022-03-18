import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField";
import { toast } from 'react-toastify';

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from '../validationSchema';

import { useGetContactById, useUpdateContact } from 'hooks/queries/contacts';

const AddUserModal = ({ id, handleClose }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const contactById = useGetContactById(id);
    const updateContact = useUpdateContact(id);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        border: '1px solid #000',
        boxShadow: 24,
    };

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
        <Modal
            open={true}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} component="form" onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{
                    height: 50,
                    backgroundColor: 'primary.dark',
                    textAlign: 'center',
                    padding: '10px',
                    color: 'white'
                }}>
                    <Typography variant="h6" component="h6">
                        EDIT CONTACT
                    </Typography>;
                </Box>
                <Stack
                    onSubmit={handleSubmit(onSubmit)}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    spacing={1}
                    px={3}
                    pt={2}
                    pb={2}
                >
                    <TextField
                        error={!!errors.userName}
                        name="userName"
                        label="Username"
                        fullWidth
                        {...register("userName")}
                        helperText={errors.userName?.message}
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
                    />
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="flex-end"
                    spacing={1}
                    mb={2}
                    px={3}
                >
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            backgroundColor: 'primary.main',
                            maxWidth: 'auto'
                        }}
                    >
                        Submit
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            backgroundColor: 'primary.main',
                            maxWidth: 'auto'
                        }}
                        onClick={handleClose}
                    >
                        Close
                    </Button>
                </Stack>
            </Box>
        </Modal>
    )
}

export default AddUserModal