// EducationalNews.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EducationalNews.css'; // Update the CSS file name if needed

const EducationalNews = () => {
    const [educationalForms, setEducationalForms] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/educationalnews')
            .then(response => {
                setEducationalForms(response.data);
            })
            .catch(error => {
                console.error('Error fetching educational forms:', error);
            });
    }, []);

    return (
        <div className="container">
            <div className="card-container">
                {educationalForms.map((form, index) => (
                    <div className="card" key={index}>
                        <h3>{form.title}</h3>
                        <p>{form.article}</p>
                        <img src={`http://localhost:3001/${form.image}`} alt="Form Image" />
                        <p>Highlight: {form.highlight}</p>
                        <p>Date: {form.dateTime}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EducationalNews;
