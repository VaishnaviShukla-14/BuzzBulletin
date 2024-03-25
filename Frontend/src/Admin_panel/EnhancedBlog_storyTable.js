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
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function EnhancedBlogTable() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/blog_story');
      setBlogPosts(response.data);
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      setError('Error fetching blog posts. Please try again.'); // Set error message
    }
  };

  const handleDeletePost = async (title) => {
    try {
      await axios.delete('http://localhost:3001/api/deleteblog_story', { data: { title } });
      fetchBlogPosts(); // Fetch blog posts after successful deletion
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error('Error deleting blog post:', error);
      setError('Error deleting blog post. Please try again.'); // Set error message
    }
  };

  const handleCloseModal = () => {
    setDeleteTarget(null);
  };

  const handleConfirmDelete = () => {
    if (deleteTarget) {
      handleDeletePost(deleteTarget.title);
      setDeleteTarget(null);
    }
  };

  const handleDeleteIconClick = (post) => {
    setDeleteTarget(post);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <h1>Blog_Story</h1>
        <TableContainer>
          <Table aria-labelledby="tableTitle" size="medium">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Article</TableCell>
                <TableCell>Image/Video</TableCell>
                <TableCell>Date Time</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {blogPosts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell>{post.title}</TableCell>
                  <TableCell>{post.article}</TableCell>
                  <TableCell>
                    {post.image ? (
                      <img src={post.image} alt="Image" style={{ width: '100px', height: 'auto' }} />
                    ) : post.video ? (
                      <video src={post.video} controls style={{ width: '100px', height: 'auto' }} />
                    ) : (
                      '-'
                    )}
                  </TableCell>
                  <TableCell>{post.dateTime}</TableCell>
                  <TableCell>{post.name}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleDeleteIconClick(post)} color="error">
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
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" id="delete-modal-title" component="div">
            Confirm Delete
          </Typography>
          <Typography id="delete-modal-description" sx={{ mt: 2 }}>
            Are you sure you want to delete the post "{deleteTarget?.title}"?
          </Typography>
          <Button onClick={handleCloseModal} sx={{ mr: 1 }}>
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} variant="contained" color="error">
            Delete
          </Button>
        </Box>
      </Modal>

      {/* Error Snackbar */}
      {error && (
        <Snackbar open={Boolean(error)} autoHideDuration={6000} onClose={() => setError(null)}>
          <Alert onClose={() => setError(null)} severity="error">
            {error}
          </Alert>
        </Snackbar>
      )}
    </Box>
  );
}
