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
import PlayArrowIcon from '@mui/icons-material/PlayArrow'; // Import PlayArrowIcon for displaying video
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function EnhancedEducationalTable() {
  const [educationalNews, setEducationalNews] = useState([]);
  const [deleteTarget, setDeleteTarget] = useState(null);

  useEffect(() => {
    fetchEducationalNews();
  }, []);

  const fetchEducationalNews = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/educationalnews'); // Replace with your actual API endpoint
      if (response.data && Array.isArray(response.data)) {
        setEducationalNews(response.data);
      } else {
        console.error('Invalid data format:', response.data);
      }
    } catch (error) {
      console.error('Error fetching educational news:', error);
    }
  };

  const handleDeleteNews = async (title) => {
    try {
      await axios.delete('http://localhost:3001/api/deleteeducationalnews', { data: { title } }); // Replace with your actual delete API endpoint
      fetchEducationalNews();
    } catch (error) {
      console.error('Error deleting educational news:', error);
    }
  };

  const handleCloseModal = () => {
    setDeleteTarget(null);
  };

  const handleConfirmDelete = () => {
    if (deleteTarget) {
      handleDeleteNews(deleteTarget.title);
      setDeleteTarget(null);
    }
  };

  const handleDeleteIconClick = (news) => {
    setDeleteTarget(news);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table aria-labelledby="tableTitle" size="medium">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Article</TableCell>
                <TableCell>Highlight</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Video</TableCell> {/* New column for video */}
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(educationalNews) && educationalNews.map((news) => (
                <TableRow key={news.title}>
                  <TableCell>{news.title}</TableCell>
                  <TableCell>{news.image}</TableCell>
                  <TableCell>{news.article}</TableCell>
                  <TableCell>{news.highlight}</TableCell>
                  <TableCell>{news.name}</TableCell>
                  <TableCell>
                    {news.video && ( // Display video icon only if video is available
                      <IconButton color="primary" aria-label="play video">
                        <PlayArrowIcon />
                      </IconButton>
                    )}
                  </TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => handleDeleteIconClick(news)}
                      color="error"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* Delete Confirmation Modal */}
      <Modal
        open={Boolean(deleteTarget)}
        onClose={handleCloseModal}
        aria-labelledby="delete-modal-title"
        aria-describedby="delete-modal-description"
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
          <Typography variant="h6" id="delete-modal-title" component="div">
            Confirm Delete
          </Typography>
          <Typography id="delete-modal-description" sx={{ mt: 2 }}>
            Are you sure you want to delete the news with title "{deleteTarget?.title}"?
          </Typography>
          <Button onClick={handleCloseModal} sx={{ mr: 1 }}>
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} variant="contained" color="error">
            Delete
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}
