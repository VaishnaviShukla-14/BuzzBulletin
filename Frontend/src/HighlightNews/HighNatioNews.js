// NationalNews.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import SearchBar from '../MandatoryItems/NewsSearch';
// import './Nationalnews.css';

const HighNatioNews = () => {
    const [nationalHighlightNews, setNationalHighlightNews] = useState([]);

    useEffect(() => {
        fetchNationalHighlightNews();
    }, []);
    
    const fetchNationalHighlightNews = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/nationalnews');
            const newsData = response.data;

            const highlightNews = newsData.filter(news => news.highlight === 'highlight');
            
            setNationalHighlightNews(highlightNews);
        } catch (error) {
            console.error('Error fetching national highlight news:', error);
        }
    };

    return (
        <div className="container">
            <div className="card-container">
                {nationalHighlightNews.map((news, index) => (
                    <div className="card" key={index}>
                        <h3>{news.title}</h3>
                        <p>{news.article}</p>
                        <img src={`http://localhost:3001/${news.image}`} alt="News Image" />
                        <p>Highlight: {news.highlight}</p>
                        <p>Date: {news.dateTime}</p>
                        <p>Name: {news.name}</p>
                    </div>
                ))}
            </div>

            {/* Card with arrow to navigate to other page */}
            {nationalHighlightNews.length > 0 && (
                <Link to="/NationalNews" className="card card-arrow">
                    <p>See All National News</p>
                    <div>&rarr;</div>
                </Link>
            )}
        </div>
    );
};

export default HighNatioNews;
