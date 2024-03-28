import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './HockeyNews.css'; // Update the CSS file name if needed

const HockeyNews = () => {
    const [hockeyNews, setHockeyNews] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/sportsnews');
            const hockeyNewsData = response.data.filter(news => news.sport.toLowerCase() === 'hockey');
            setHockeyNews(hockeyNewsData);
        } catch (error) {
            console.error('Error fetching hockey news:', error);
        }
    };

    return (
        <div className="container">
            <div className="card-container">
                {hockeyNews.map((news, index) => (
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

export default HockeyNews;
