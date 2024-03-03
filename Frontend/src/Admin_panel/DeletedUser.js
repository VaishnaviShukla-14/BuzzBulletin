// DeletedUsersPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
      <ul>
        {Array.isArray(deletedUsers) &&
          deletedUsers.map((user) => (
            <li key={user._id}>
              <strong>{user.name}</strong> - {user.phone} - {user.email} - {user.address} - {user.adharcard} - {user.password}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DeletedUsersPage;
