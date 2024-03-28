import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SportsNews.css'; // Update the CSS file name if needed

const SportsNews = () => {
    const [sportsNews, setSportsNews] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/sportsnews');
            setSportsNews(response.data);
        } catch (error) {
            console.error('Error fetching sports news:', error);
        }
    };

    return (
        <div className="container">
            <div className="card-container">
                {sportsNews.map((news, index) => (
                    <div className="card" key={index}>
                        <h3>{news.title}</h3>
                        <p>{news.article}</p>
                        {news.image && <img src={`http://localhost:3001/${news.image}`} alt="News Image" />}
                        {news.video && (
                            <video controls>
                                <source src={`http://localhost:3001/${news.video}`} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SportsNews;
