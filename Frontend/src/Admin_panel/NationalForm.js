import React, { useState } from 'react';
import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';
import { useNavigate } from 'react-router-dom';
import { message, Button, Input, Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Cookies from 'js-cookie';

const { Option } = Select;

const NationalForm = ({ isVisible, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    article: '',
    highlight: 'none',
    date: new Date().toLocaleDateString(),
    time: getCurrentTime(),
    image: null,
  });

  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);

  const Navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlefileChange = (e) => {
    const image = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: image,
    }));
  };

  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  const handleHighlightChange = (value) => {
    setFormData({ ...formData, highlight: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataWithUser = {
        ...formData,
        name: Cookies.get('name'), // Add the user's name to the form data
      };

      const response = await axios.post('http://localhost:3001/api/nationalnews', formDataWithUser, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response && response.data) {
        console.log(response.data);
        console.log('Form submitted:', formDataWithUser);
        setFormData({
          title: '',
          article: '',
          highlight: 'none',
          date: new Date().toLocaleDateString(),
          time: getCurrentTime(),

        });
        setSuccessAlert(true);
        Navigate('/nationalnews')

      }
    } catch (error) {
      console.error('Error during runtime', error);
      setErrorAlert(true);
    }
  };

  const handleSuccessAlertClose = () => {
    setSuccessAlert(false);
    Navigate('/AdminPage');
  };

  const handleErrorAlertClose = () => {
    setErrorAlert(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
      {contextHolder}
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>National Form</h2>
        <div style={styles.formGroup}>
          <h3 style={styles.subheading}>{`Date: ${formData.date}`} <br />{`Time: ${formData.time}`}<br /> {Cookies.get('name')}</h3>
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
              onChange={handleChange}
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
              onChange={handleChange}
              style={styles.textarea}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="image" style={styles.label}>
              Image:
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handlefileChange}
              style={styles.input}
              accept="image/*"
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="highlight" style={styles.label}>
              Highlight:
            </label>
            <select
              id="highlight"
              name="highlight"
              value={formData.highlight}
              onChange={(e) => handleHighlightChange(e.target.value)}
              style={styles.select}
            >
              <option value="none">None</option>
              <option value="highlight">Highlight</option>
            </select>
          </div>
          <div style={styles.formGroup}>
            <Button type="primary" htmlType="submit" style={styles.submitButton}>
              Submit
            </Button>
          </div>
        </form>
        <Button onClick={onClose} type="danger" style={styles.closeButton}>
          Close Form
        </Button>

        {successAlert && (
          <SweetAlert success title="Success" onConfirm={handleSuccessAlertClose}>
            Data entered successfully!
          </SweetAlert>
        )}

        {errorAlert && (
          <SweetAlert error title="Error" onConfirm={handleErrorAlertClose}>
            Error during submission. Please try again.
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
  closeButton: {
    backgroundColor: '#ff5252',
    color: 'white',
    paddingbottom: '12px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px',
  },
};

export default NationalForm;