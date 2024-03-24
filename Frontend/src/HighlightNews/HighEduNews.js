// HighEduNews.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
// import './EducationalNews.css'; // Update the CSS file name if needed

const HighEduNews = () => {
    const [highlightEducationalForms, setHighlightEducationalForms] = useState([]);

    useEffect(() => {
        fetchHighlightEducationalForms();
    }, []);

    const fetchHighlightEducationalForms = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/educationalnews');
            const educationalFormsData = response.data;

            const currentDate = new Date().toLocaleDateString(); // Get current date in "MM/DD/YYYY" format
            const todaysHighlightForms = educationalFormsData.filter(
                form => form.highlight === 'highlight' && form.dateTime.includes(currentDate)
            );

            setHighlightEducationalForms(todaysHighlightForms);
        } catch (error) {
            console.error('Error fetching educational highlight forms:', error);
        }
    };

    return (
        <div className="container">
            <div className="card-container">
                {highlightEducationalForms.map((form, index) => (
                    <div className="card" key={index}>
                        <h3>{form.title}</h3>
                        <p>{form.article}</p>
                        <img src={`http://localhost:3001/${form.image}`} alt="Form Image" />
                        <p>Highlight: {form.highlight}</p>
                        <p>Date: {form.dateTime}</p>
                    </div>
                ))}
            </div>

            {/* Card with arrow to navigate to other page */}
            <Link to="/EducationalNews" className="card card-arrow">
                <p>No Highlight News Today. Click to see Educational News</p>
                <div>&rarr;</div>
            </Link>
        </div>
    );
};

export default HighEduNews;
