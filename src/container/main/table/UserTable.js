import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import UserTableRow from './UserTableRow';
import TableCell from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

const UserTable = ({ userData, handleOpen, meta }) => {
    const Th = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const { data, isLoading, isError, error, status } = userData;

    return (
        <TableContainer>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <Th>#</Th>
                        <Th>Actions</Th>
                        <Th>Full Name</Th>
                        <Th>Email</Th>
                        <Th>Mobile No.</Th>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {isError &&
                        <TableRow>
                            <TableCell align="center" component="td" scope="row" colSpan="5">
                                {error.message}
                            </TableCell>
                        </TableRow>}
                    {isLoading &&
                        <TableRow>
                            <TableCell align="center" component="td" scope="row" colSpan="5">
                                Loading....
                            </TableCell>
                        </TableRow>}
                    {!isError && !isLoading && data.results && data.results.length < 1 &&
                        <TableRow>
                            <TableCell align="center" component="td" scope="row" colSpan="5">
                                No Data
                            </TableCell>
                        </TableRow>}
                    {!isError && !isLoading && data.results && (data.results.length > 0 &&
                        data.results.map((user, index) =>
                            <UserTableRow key={user.id} user={user} no={(index + 1)} meta={meta} handleOpen={handleOpen} />
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default UserTable