// SportsNews.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SportsNews.css'; // Update the CSS file name if needed

const SportsNews = () => {
    const [sportsForms, setSportsForms] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/sportsnews')
            .then(response => {
                setSportsForms(response.data);
            })
            .catch(error => {
                console.error('Error fetching sports forms:', error);
            });
    }, []);

    return (
        <div className="container">
            <div className="card-container">
                {sportsForms.map((form, index) => (
                    <div className="card" key={index}>
                        <h3>{form.title}</h3>
                        <p>{form.article}</p>
                        <img src={`http://localhost:3001/${form.image}`} alt="Form Image" />
                        <p>Date: {form.dateTime}</p>
                        <p>Sport: {form.sport}</p>
                        <p>Highlight: {form.highlight}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SportsNews;
