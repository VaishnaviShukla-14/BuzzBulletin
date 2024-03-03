// NewsPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsPage = () => {
  const [selectedForm, setSelectedForm] = useState('international');
  const [formData, setFormData] = useState([]);
//   const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    // Fetch data from the selected form when the component mounts or when selectedForm changes
    fetchFormData(selectedForm);
  }, [selectedForm]);

  const fetchFormData = async (formType) => {
    try {
      const response = await axios.get(`http://localhost:3001/api/${formType}news`);
      console.log('Response data:', response.data);
      setFormData(response.data);
    } catch (error) {
      console.error(`Error fetching ${formType} news data:`, error);
    }
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/news/${id}`);
      alert('News deleted successfully!');
      // After deletion, fetch updated news data
    //   fetchNewsList();
    } catch (error) {
      console.error('Error deleting news:', error);
      alert('Failed to delete news. Please try again.');
    }
  };

  return (
    <div>
      <h1>News Page</h1>
      <div>
        <button onClick={() => setSelectedForm('international')}>International</button>
        <button onClick={() => setSelectedForm('national')}>National</button>
        <button onClick={() => setSelectedForm('sports')}>Sports</button>
        <button onClick={() => setSelectedForm('educational')}>Educational</button>
      </div>

      <h2>{selectedForm.toUpperCase()} News:</h2>
      <div>
        {formData.map((news, index) => (
          <div key={index}>
            <p>Title: {news.title}</p>
            <p>Article: {news.article}</p>
            {/* Add other news details here */}
            <button onClick={() => handleDelete(news._id)}>Delete</button>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
