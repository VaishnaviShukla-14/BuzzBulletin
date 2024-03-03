import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EducationalNews.css'; // Use the same CSS file as EducationalNews

const InternationalNews = () => {
    const [internationalForms, setInternationalForms] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/internationalnews')
            .then(response => {
                setInternationalForms(response.data);
            })
            .catch(error => {
                console.error('Error fetching international forms:', error);
            });
    }, []);

    return (
        <div className="container">
            <div className="card-container">
                {internationalForms.map((form, index) => (
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

export default InternationalNews;
