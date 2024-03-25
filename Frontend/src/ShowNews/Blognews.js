import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './BlogNews.css'; // You can create this CSS file to style your blog cards

const BlogNews = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/blog')
            .then(response => {
                setBlogs(response.data);
            })
            .catch(error => {
                console.error('Error fetching blogs:', error);
            });
    }, []);

    return (
        <div className="blog-container">
            {blogs.map((blog, index) => (
                <div className="blog-card" key={index}>
                    <h3>{blog.title}</h3>
                    <p>{blog.article}</p>
                    {blog.image && <img src={`http://localhost:3001/${blog.image}`} alt="Blog Image" />}
                    {blog.video && (
                        <video controls>
                            <source src={`http://localhost:3001/${blog.video}`} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>
            ))}
        </div>
    );
};

export default BlogNews;
