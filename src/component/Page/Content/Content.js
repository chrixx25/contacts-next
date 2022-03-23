import Container from '@mui/material/Container';

const Content = ({ children }) => {
    return (
        <Container component="main" maxWidth="lg" sx={{ pt: 3, flexGrow: 1 }}>{children}</Container>
    )
}

export default Content;