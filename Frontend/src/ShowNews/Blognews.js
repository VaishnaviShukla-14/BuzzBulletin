import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'antd';

const BlogNews = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/blog');
        if (response && response.data) {
          setBlogs(response.data);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const BlogCard = ({ blog }) => (
    <Card style={styles.card}>
      {blog.video ? (
        <video style={styles.media} controls>
          <source src={blog.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img src={blog.image} alt="Blog" style={styles.media} />
      )}
      <div>
        <h3>{blog.title}</h3>
        <p>{blog.article}</p>
      </div>
    </Card>
  );

  return (
    <div style={styles.blogContainer}>
      {blogs.map((blog, index) => (
        <BlogCard key={index} blog={blog} />
      ))}
    </div>
  );
};

const styles = {
  blogContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    maxWidth: '600px',
    width: '100%',
    marginBottom: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  media: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px 8px 0 0',
  },
};

export default BlogNews;
