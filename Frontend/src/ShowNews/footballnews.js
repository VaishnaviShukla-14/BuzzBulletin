import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './FootballNews.css'; // Update the CSS file name if needed

const FootballNews = () => {
    const [footballNews, setFootballNews] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/sportsnews');
            const footballNewsData = response.data.filter(news => news.sport.toLowerCase() === 'football');
            setFootballNews(footballNewsData);
        } catch (error) {
            console.error('Error fetching football news:', error);
        }
    };

    return (
        <div className="container">
            <div className="card-container">
                {footballNews.map((news, index) => (
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

export default FootballNews;
