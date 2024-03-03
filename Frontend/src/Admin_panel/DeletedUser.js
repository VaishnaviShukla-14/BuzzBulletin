import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';

const DeletedUsersPage = () => {
  const [deletedUsers, setDeletedUsers] = useState([]);

  useEffect(() => {
    const fetchDeletedUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/showDeletedUsers');
        if (response.data && response.data.data && Array.isArray(response.data.data)) {
          setDeletedUsers(response.data.data);
          console.log('Deleted users fetched successfully:', response.data.data);
        } else {
          console.error('Invalid data format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching deleted users:', error);
      }
    };

    fetchDeletedUsers();
  }, []);

  return (
    <div>
      <h1>Deleted Users</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Adharcard</TableCell>
              <TableCell>Password</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(deletedUsers) &&
              deletedUsers.map((user) => (
                <TableRow key={user._id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.address}</TableCell>
                  <TableCell>{user.adharcard}</TableCell>
                  <TableCell>{user.password}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DeletedUsersPage;
