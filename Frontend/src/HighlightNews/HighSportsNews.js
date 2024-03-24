// HighSportsNews.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
// import './SportsNews.css'; // Update the CSS file name if needed

const HighSportsNews = () => {
    const [highlightSportsForms, setHighlightSportsForms] = useState([]);

    useEffect(() => {
        fetchHighlightSportsForms();
    }, []);

    const fetchHighlightSportsForms = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/sportsnews');
            const sportsFormsData = response.data;

            const currentDate = new Date().toLocaleDateString(); // Get current date in "MM/DD/YYYY" format
            const todaysHighlightForms = sportsFormsData.filter(
                form => form.highlight === 'highlight' && form.dateTime.includes(currentDate)
            );

            setHighlightSportsForms(todaysHighlightForms);
        } catch (error) {
            console.error('Error fetching sports highlight forms:', error);
        }
    };

    return (
        <div className="container">
            <div className="card-container">
                {highlightSportsForms.map((form, index) => (
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

            {/* Card with arrow to navigate to other page */}
            {highlightSportsForms.length === 0 && (
                <Link to="/SportsNews" className="card card-arrow">
                    <p>No Highlight Sports News Today. Click to see Sports News</p>
                    <div>&rarr;</div>
                </Link>
            )}
        </div>
    );
};

export default HighSportsNews;
