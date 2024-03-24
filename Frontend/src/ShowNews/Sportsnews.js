import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SportsNews.css'; // Update the CSS file name if needed

const SportsNews = () => {
    const [sportsForms, setSportsForms] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/sportsnews');
            const sportsFormsData = response.data;

            // Get current date in "MM/DD/YYYY" format
            const currentDate = new Date().toLocaleDateString();

            // Filter forms for today's date
            const todaysSportsForms = sportsFormsData.filter(
                form => form.dateTime.includes(currentDate)
            );

            setSportsForms(todaysSportsForms);
        } catch (error) {
            console.error('Error fetching sports forms:', error);
        }
    };

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
