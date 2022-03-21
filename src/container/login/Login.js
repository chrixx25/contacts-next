import React from 'react';
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from './validationSchema';

import { useAuth } from "hooks/queries/user";

const Login = () => {
    const { mutate: signIn, isLoading, error, isError } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema),
        mode: "onChange",
    });

    const onSubmit = data => {
        signIn(data)
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
            position="relative"
            overflow="hidden"
        // sx={{
        //     backgroundColor: (theme) =>
        //         theme.palette.mode === 'light'
        //             ? theme.palette.grey[100]
        //             : theme.palette.grey[900],
        // }}
        >
            <Card
                sx={{
                    boxShadow: "0 2px 4px 0 #E5E5E5",
                    borderRadius: 2,
                    width: 350
                }}
            >
                <Box
                    sx={{
                        backgroundColor: 'primary.dark',
                        textAlign: 'center',
                        padding: '10px',
                        color: 'white'
                    }}
                >
                    <Typography variant="h6" component="h6">
                        CONTACT MANAGER
                    </Typography>
                </Box>
                <CardContent sx={{ px: 3 }} >
                    <Stack
                        component="form"
                        onSubmit={handleSubmit(onSubmit)}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        spacing={2}
                    >
                        {isError && <Alert severity="error">
                            {isError && error.message || 'Something went wrong.'}
                        </Alert>}

                        <TextField
                            error={!!errors.username}
                            name="username"
                            label="Username"
                            placeholder="Username"
                            fullWidth
                            {...register("username")}
                            helperText={errors.username?.message}
                        />
                        <TextField
                            error={!!errors.password}
                            name="password"
                            label="Password"
                            placeholder="Password"
                            type="password"
                            fullWidth
                            {...register("password")}
                            helperText={errors.password?.message}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                backgroundColor: 'primary.dark',
                            }}
                            disabled={isLoading}
                            fullWidth
                        >
                            Log in
                        </Button>
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    );
}

export default Login;