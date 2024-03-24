import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Nationalnews.css'; // Import the same CSS file as NationalNews

const InternationalNews = () => {
    const [internationalNews, setInternationalNews] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/internationalnews');
            setInternationalNews(response.data);
        } catch (error) {
            console.error('Error fetching international news:', error);
        }
    };

    return (
        <div className="container">
            <div className="card-container">
                {internationalNews.map((news, index) => (
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
                        <p>Highlight: {news.highlight}</p>
                        <p>Date: {news.dateTime}</p>
                        <p>Name: {news.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InternationalNews;
