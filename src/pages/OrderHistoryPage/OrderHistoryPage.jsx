import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import AuthHeader from '../../components/Auth';

import {
    Box,
    Container,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    TablePagination,
    Typography
} from '@mui/material';

import {
    ReceiptLongTwoTone as ReceiptLongTwoToneIcon
} from '@mui/icons-material';

function OrderHistoryPage() {
    const [userOrders, setUserOrders] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5); 
    const { user, isAuthenticated } = useAuth0();

    useEffect(() => {
        const getOrders = async () => {
        try {
            if (isAuthenticated && user && user.email) {
            const response = await fetch(`https://hydromaze-server-vercel.vercel.app/api/orders/${user.email}`);
            const result = await response.json();
            setUserOrders(result);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        };

        getOrders();
    }, [isAuthenticated, user, user?.email]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        isAuthenticated &&
        <>
            <AuthHeader />
                <Box mt={7} sx={{ background: '#EEFCFF', p:1 }}>
                        <Typography 
                            textAlign='center' 
                            variant="subtitle1" 
                            color="#21495f"
                            fontWeight={600}
                            sx={{ display: 'flex', justifyContent: 'center' }}
                        >
                            History of your Orders
                        </Typography>
                </Box>
                <Container maxWidth='sm'>

                <Box mt={4}>
                    <TableContainer style={{minHeight: '200px',}} component={Paper}>
                    <Table style={{height: '100px'}}>
                        <TableHead>
                        <TableRow>
                            <TableCell>Status</TableCell>
                            <TableCell>Slim</TableCell>
                            <TableCell>Round</TableCell>
                            <TableCell>Total</TableCell>
                            <TableCell>Track</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {(rowsPerPage > 0
                            ? userOrders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : userOrders
                        ).map((details, index) => (
                            <TableRow style={{textTransform: 'capitalize'}} key={index}>
                            <TableCell><Typography fontSize={'15px'} fontWeight={700}>{details.status}</Typography> <Typography fontSize={'10px'}>{formatDate(details.createdAt)}</Typography></TableCell>
                            <TableCell>{details.slim}</TableCell>
                            <TableCell>{details.round}</TableCell>
                            <TableCell>{details.total}</TableCell>
                            <TableCell>
                                <Link to={`/client-dashboard/order-status/${encodeURIComponent(JSON.stringify(details))}`}>
                                <Button variant="contained">
                                    <ReceiptLongTwoToneIcon />
                                </Button>
                                </Link>
                            </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
                    <TablePagination
                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                    component="div"
                    count={userOrders.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Box>
            </Container>
        </>
    );
}

export default OrderHistoryPage;


function formatDate(dateString) {
        const options = { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit',  
        };

    return new Date(dateString).toLocaleDateString('en-US', options);
}
