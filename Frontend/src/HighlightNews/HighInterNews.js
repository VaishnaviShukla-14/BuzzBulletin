// HighInterNews.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
// import './EducationalNews.css'; // Use the same CSS file as EducationalNews

const HighInterNews = () => {
    const [highlightInternationalNews, setHighlightInternationalNews] = useState([]);

    useEffect(() => {
        fetchHighlightInternationalNews();
    }, []);

    const fetchHighlightInternationalNews = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/internationalnews');
            const internationalNewsData = response.data;

            const currentDate = new Date().toLocaleDateString(); // Get current date in "MM/DD/YYYY" format
            const todaysHighlightNews = internationalNewsData.filter(
                news => news.highlight === 'highlight' && news.dateTime.includes(currentDate)
            );

            setHighlightInternationalNews(todaysHighlightNews);
        } catch (error) {
            console.error('Error fetching international highlight news:', error);
        }
    };

    return (
        <div className="container">
            <div className="card-container">
                {highlightInternationalNews.map((news, index) => (
                    <div className="card" key={index}>
                        <h3>{news.title}</h3>
                        <p>{news.article}</p>
                        <img src={`http://localhost:3001/${news.image}`} alt="News Image" />
                        <p>Highlight: {news.highlight}</p>
                        <p>Date: {news.dateTime}</p>
                    </div>
                ))}
            </div>

            {/* Card with arrow to navigate to other page */}
            {highlightInternationalNews.length === 0 && (
                <Link to="/InternationalNews" className="card card-arrow">
                    <p>No Highlight News Today. Click to see International News</p>
                    <div>&rarr;</div>
                </Link>
            )}
        </div>
    );
};

export default HighInterNews;
