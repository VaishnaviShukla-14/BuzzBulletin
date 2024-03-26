import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './BlogNews.css'; // You can create this CSS file to style your blog cards

const BlogNews = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/blog')
            .then(response => {
                setBlogs(response.data.map(blog => ({ ...blog, liked: false })));
            })
            .catch(error => {
                console.error('Error fetching blogs:', error);
            });
    }, []);

    // Function to handle like action
    const handleLike = (blogIndex) => {
        const updatedBlogs = [...blogs];
        const blog = updatedBlogs[blogIndex];
        
        if (!blog.liked) {
            blog.likes++;
        } else {
            blog.likes--;
        }
        
        blog.liked = !blog.liked;
        
        setBlogs(updatedBlogs);
    };

    return (
        <div className="blog-container">
            {blogs.map((blog, index) => (
                <div className="blog-card" key={index} style={styles.card}>
                    {/* Image or video */}
                    {blog.image && <img src={`http://localhost:3001/${blog.image}`} alt="Blog Image" style={styles.media} />}
                    {blog.video && (
                        <video controls style={styles.media}>
                            <source src={`http://localhost:3001/${blog.video}`} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}

                    {/* Title and article */}
                    <div style={styles.content}>
                        <h3>{blog.title}</h3>
                        <p>{blog.article}</p>
                    </div>

                    {/* Like button */}
                    <div className="actions">
                        <button onClick={() => handleLike(index)}>
                            <i className={`far fa-heart${blog.liked ? ' active' : ''}`}></i> {blog.likes}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

const styles = {
  card: {
    width: '550px',
    height: '550px',
    margin: '10px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  media: {
    width: '100%',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  content: {
    textAlign: 'center',
  }
};

export default BlogNews;
