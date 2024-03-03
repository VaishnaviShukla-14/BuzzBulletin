import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Nationalnews.css'
const NationalNews = () => {
    const [nationalNews, setNationalNews] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/nationalnews')
            .then(response => {
                setNationalNews(response.data);
            })
            .catch(error => {
                console.error('Error fetching national news:', error);
            });
    }, []);

    return (
        <div className="container">

            <div className="card-container">
                {nationalNews.map((news, index) => (
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
        </div>
    );
};

export default NationalNews;
