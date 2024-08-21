import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Tooltip,
    CircularProgress,
    Alert,
    Typography
} from '@mui/material';
import { useFriends } from '../hooks/useFetchFriends';
import { Friend } from '../types/Friend';
import mainTheme from "../themes/mainTheme.ts";

export const FriendsTable: React.FC = () => {
    const { friends, loading, error } = useFriends();

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <Alert severity="error">{error}</Alert>;
    }

    return (
        <div className="table-container">
            <Typography style={{ color: mainTheme.palette.secondary.main }}>
                Friends List (usando theme palette!)
            </Typography>
            <Table style = {mainTheme.components?.MuiTable?.defaultProps}>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {friends.map((friend: Friend) => (
                        <TableRow key={friend.id}>
                            <TableCell>{friend.name}</TableCell>
                            <TableCell>{friend.email}</TableCell>
                            <TableCell>{friend.phone || 'N/A'}</TableCell>
                            <TableCell>
                                {friend.addresses.map((address, index) => (
                                    <Tooltip // si me paro encima de la address, me muestra sus atributos.
                                        key={index}
                                        title={`${address.street}, ${address.city}, ${address.state} - ${address.code}`}
                                        arrow
                                    >
                                        <span style={{ cursor: 'pointer', textDecoration: 'underline' }}>Address {index + 1}</span>
                                    </Tooltip>
                                ))}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};
