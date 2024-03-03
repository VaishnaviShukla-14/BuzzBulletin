// // Frontend component: EnhancedTable
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Box from '@mui/material/Box';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import Modal from '@mui/material/Modal';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';

// export default function EnhancedTable() {
//   const [rows, setRows] = useState([]);
//   const [editUser, setEditUser] = useState(null);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:3001/api/showUser');
//       if (response.data && response.data.data && Array.isArray(response.data.data)) {
//         setRows(response.data.data);
//       } else {
//         console.error('Invalid data format:', response.data);
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleDeleteUser = async (userName) => {
//     try {
//       await axios.delete('http://localhost:3001/api/delete', { data: { name: userName } });
//       fetchData();
//     } catch (error) {
//       console.error('Error deleting user:', error);
//     }
//   };

//   const handleEditUser = (user) => {
//     setEditUser(user);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setEditUser(null);
//     setOpen(false);
//   };

//   const handleFormSubmit = async () => {
//     try {
//       const response = await axios.put('http://localhost:3001/api/updateUser', editUser);
//       console.log(response.data);
//       fetchData();
//       handleClose();
//     } catch (error) {
//       console.error('Error updating user:', error.message);
//     }
//   };

//   const handleInputChange = (e) => {
//     setEditUser({
//       ...editUser,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Paper sx={{ width: '100%', mb: 2 }}>
//         <TableContainer>
//           <Table aria-labelledby="tableTitle" size="medium">
//             <TableHead>
//               <TableRow>
//                 <TableCell>Name</TableCell>
//                 <TableCell>Phone</TableCell>
//                 <TableCell>Email</TableCell>
//                 <TableCell>Password</TableCell>
//                 <TableCell>Actions</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {Array.isArray(rows) && rows.map((row) => (
//                 <TableRow key={row.id}>
//                   <TableCell>{row.name}</TableCell>
//                   <TableCell>{row.phone}</TableCell>
//                   <TableCell>{row.email}</TableCell>
//                   <TableCell>{row.password}</TableCell>
//                   <TableCell>
//                     <IconButton
//                       onClick={() => handleDeleteUser(row.name)}
//                       color="error"
//                     >
//                       <DeleteIcon />
//                     </IconButton>
//                     <IconButton
//                       onClick={() => handleEditUser(row)}
//                       color="primary"
//                     >
//                       <EditIcon />
//                     </IconButton>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Paper>

//       {/* Edit User Modal */}
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="edit-modal-title"
//         aria-describedby="edit-modal-description"
//       >
//         <Box sx={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           width: 400,
//           bgcolor: 'background.paper',
//           border: '2px solid #000',
//           boxShadow: 24,
//           p: 4,
//         }}>
//           <Typography variant="h6" id="edit-modal-title" component="div">
//             Edit User
//           </Typography>
//           <form onSubmit={(e) => { e.preventDefault(); handleFormSubmit(); }}>
//             <TextField
//               label="Name"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               name="name"
//               value={editUser?.name || ''}
//               onChange={handleInputChange}
//             />
//             <TextField
//               label="Phone"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               name="phone"
//               value={editUser?.phone || ''}
//               onChange={handleInputChange}
//             />
//             <TextField
//               label="Email"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               name="email"
//               value={editUser?.email || ''}
//               onChange={handleInputChange}
//             />
//             <TextField
//               label="Password"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               name="password"
//               value={editUser?.password || ''}
//               onChange={handleInputChange}
//             />
//             <Button type="button" variant="contained" onClick={handleClose} sx={{ mr: 1 }}>
//               Close
//             </Button>
//             <Button type="submit" variant="contained" color="primary">
//               Update
//             </Button>
//           </form>
//         </Box>
//       </Modal>
//     </Box>
//   );
// }

// EnhancedTable.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function EnhancedTable() {
  const [rows, setRows] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/showUser');
      if (response.data && response.data.data && Array.isArray(response.data.data)) {
        setRows(response.data.data);
      } else {
        console.error('Invalid data format:', response.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDeleteUser = async (userName) => {
    try {
      await axios.delete('http://localhost:3001/api/delete', { data: { name: userName } });
      fetchData();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEditUser = (user) => {
    setEditUser(user);
    setOpen(true);
  };

  const handleClose = () => {
    setEditUser(null);
    setOpen(false);
  };

  const handleFormSubmit = async () => {
    try {
      const response = await axios.put('http://localhost:3001/api/updateUser', editUser);
      console.log(response.data);
      fetchData();
      handleClose();
    } catch (error) {
      console.error('Error updating user:', error.message);
    }
  };

  const handleInputChange = (e) => {
    setEditUser({
      ...editUser,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
      <h1>Current Users</h1>
        <TableContainer>
          <Table aria-labelledby="tableTitle" size="medium">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Adharcard Number</TableCell>
                <TableCell>Password</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(rows) && rows.map((row) => (
                <TableRow key={row._id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.address}</TableCell>
                  <TableCell>{row.adharcard}</TableCell>
                  <TableCell>{row.password}</TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => handleDeleteUser(row.name)}
                      color="error"
                    >
                      <DeleteIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => handleEditUser(row)}
                      color="primary"
                    >
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* Edit User Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="edit-modal-title"
        aria-describedby="edit-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}>
          <Typography variant="h6" id="edit-modal-title" component="div">
            Edit User
          </Typography>
          <form onSubmit={(e) => { e.preventDefault(); handleFormSubmit(); }}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              name="name"
              value={editUser?.name || ''}
              onChange={handleInputChange}
            />
            <TextField
              label="Phone"
              variant="outlined"
              fullWidth
              margin="normal"
              name="phone"
              value={editUser?.phone || ''}
              onChange={handleInputChange}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              name="email"
              value={editUser?.email || ''}
              onChange={handleInputChange}
            />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              name="password"
              value={editUser?.password || ''}
              onChange={handleInputChange}
            />
            <Button type="button" variant="contained" onClick={handleClose} sx={{ mr: 1 }}>
              Close
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Update
            </Button>
          </form>
        </Box>
      </Modal>
    </Box>
  );
}
