import React, { useState } from 'react';
import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';
import { Button, Input } from 'antd';
import Cookies from 'js-cookie';

const BlogForm = ({ isVisible, onClose }) => {
  const [formData, setFormData] = useState({
    name: Cookies.get('name') || '',
    title: '',
    article: '',
    date: new Date().toLocaleDateString(),
    time: getCurrentTime(),
    image: null,
    video: null,
    uploadOption: 'image', // By default, allow uploading image
    likes: 0,
    dislikes: 0,
  });

  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await axios.post('http://localhost:3001/api/blog', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response && response.data) {
        console.log(response.data);
        console.log('Form submitted:', formData);
        setFormData({
          name: Cookies.get('name') || '',
          title: '',
          article: '',
          date: new Date().toLocaleDateString(),
          time: getCurrentTime(),
          image: null,
          video: null,
          uploadOption: 'image', // Reset upload option to image
          likes: 0, // Reset like count
          dislikes: 0, // Reset dislike count
        });
        setSuccessAlert(true);
      }
    } catch (error) {
      console.error('Error during runtime', error);
      setErrorAlert(true);
      setErrorMessage('Error during submission. Please try again.');
    }
  };

  const handleLike = () => {
    setFormData((prevData) => {
      const liked = prevData.likes === 1;
      return { ...prevData, likes: liked ? 0 : 1, dislikes: liked ? 0 : prevData.dislikes };
    });
  };

  const handleDislike = () => {
    setFormData((prevData) => {
      const disliked = prevData.dislikes === 1;
      return { ...prevData, dislikes: disliked ? 0 : 1, likes: disliked ? 0 : prevData.likes };
    });
  };

  const handleUploadOptionChange = (option) => {
    setFormData({ ...formData, uploadOption: option });
  };

  const handleSuccessAlertClose = () => {
    setSuccessAlert(false);
    onClose();
  };

  const handleErrorAlertClose = () => {
    setErrorAlert(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Blog Form</h2>
        <div style={styles.formGroup}>
          <h3 style={styles.subheading}>{`Date: ${formData.date}`} <br />{`Time: ${formData.time}`}<br /> {formData.name}</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="title" style={styles.label}>
              Title:
            </label>
            <Input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="article" style={styles.label}>
              Article:
            </label>
            <Input.TextArea
              id="article"
              name="article"
              value={formData.article}
              onChange={(e) => setFormData({ ...formData, article: e.target.value })}
              style={styles.textarea}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="uploadOption" style={styles.label}>
              Upload Option:
            </label>
            <select
              id="uploadOption"
              name="uploadOption"
              value={formData.uploadOption}
              onChange={(e) => handleUploadOptionChange(e.target.value)}
              style={styles.select}
            >
              <option value="image">Image</option>
              <option value="video">Video</option>
            </select>
          </div>
          {formData.uploadOption === 'image' && (
            <div style={styles.formGroup}>
              <label htmlFor="image" style={styles.label}>
                Image:
              </label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                style={styles.input}
                accept="image/*"
                required
              />
            </div>
          )}
          {formData.uploadOption === 'video' && (
            <div style={styles.formGroup}>
              <label htmlFor="video" style={styles.label}>
                Video:
              </label>
              <input
                type="file"
                id="video"
                name="video"
                onChange={(e) => setFormData({ ...formData, video: e.target.files[0] })}
                style={styles.input}
                accept="video/*"
                required
              />
            </div>
          )}
          <div style={styles.formGroup}>
            <Button type="primary" htmlType="submit" style={styles.submitButton}>
              Submit
            </Button>
          </div>
          <div style={styles.likeDislikeGroup}>
            <Button onClick={handleLike} style={styles.likeButton} icon={<i className="far fa-thumbs-up"></i>}>
              Like ({formData.likes || 0})
            </Button>
            <Button onClick={handleDislike} style={styles.dislikeButton} icon={<i className="far fa-thumbs-down"></i>}>
              Dislike ({formData.dislikes || 0})
            </Button>
            <Button style={styles.commentButton} icon={<i className="far fa-comment-alt"></i>}>
              Comment
            </Button>
          </div>
        </form>
        {successAlert && (
          <SweetAlert success title="Success" onConfirm={handleSuccessAlertClose}>
            Data entered successfully!
          </SweetAlert>
        )}
        {errorAlert && (
          <SweetAlert error title="Error" onConfirm={handleErrorAlertClose}>
            {errorMessage}
          </SweetAlert>
        )}
      </div>
    </>
  );
};

const styles = {
  formContainer: {
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    color: '#333',
    textAlign: 'center',
    marginBottom: '20px',
  },
  subheading: {
    color: '#888',
    textAlign: 'right',
    fontSize: '14px',
    marginBottom: '10px',
  },
  formGroup: {
    marginBottom: '16px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '10px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '10px',
  },
  select: {
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '10px',
  },
  submitButton: {
    backgroundColor: '#4caf50',
    color: 'white',
    paddingbottom: '12px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  likeDislikeGroup: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  likeButton: {
    backgroundColor: '#4caf50',
    color: 'white',
    marginRight: '10px',
  },
  dislikeButton: {
    backgroundColor: '#ff5722',
    color: 'white',
    marginRight: '10px',
  },
  commentButton: {
    backgroundColor: '#2196f3',
    color: 'white',
  },
};

export default BlogForm;

