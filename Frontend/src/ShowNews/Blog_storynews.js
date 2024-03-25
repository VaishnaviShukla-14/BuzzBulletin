import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'antd';

const Blog_storynews = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/blog_story');
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
      <div style={styles.mediaContainer}>
        {blog.video ? (
          <video src={`http://localhost:3001/${blog.video}`} style={styles.media} controls />
        ) : (
          <img src={`http://localhost:3001/${blog.image}`} alt="Blog" style={styles.media} />
        )}
      </div>
      <div style={styles.content}>
        <h3 style={styles.title}>{blog.title}</h3>
        <p style={styles.article}>{blog.article}</p>
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
    width: '100%',
    marginBottom: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  mediaContainer: {
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    overflow: 'hidden',
  },
  media: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  content: {
    padding: '20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
    textAlign: 'center',
    color: '#333',
  },
  article: {
    fontSize: '16px',
    color: '#666',
  },
};

export default Blog_storynews;
