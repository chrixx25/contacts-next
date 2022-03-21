import Container from '@mui/material/Container';

const Content = ({ children }) => {
    return (
        <Container component="main" maxWidth="lg" sx={{ mt: 5 }}>{children}</Container>
    )
}

export default Content;