// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Nationalnews.css';

// const NationalNews = () => {
//     const [nationalNews, setNationalNews] = useState([]);

//     useEffect(() => {
//         const fetchNews = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3001/api/nationalnews');
//                 console.log('Response:', response); // Log the response for debugging
//                 const filteredNews = response.data.filter(news => {
//                     const newsDate = new Date(news.dateTime); // Parse the dateTime string to a Date object
//                     const today = new Date();
//                     const todayWithoutTime = new Date(today.getFullYear(), today.getMonth(), today.getDate());

//                     // Check if the news date matches today's date
//                     return newsDate.toDateString() === todayWithoutTime.toDateString();
//                 });
//                 console.log('Filtered News:', filteredNews); // Log the filtered news for debugging
//                 setNationalNews(filteredNews);
//             } catch (error) {
//                 console.error('Error fetching national news:', error);
//             }
//         };

//         fetchNews();

//         // Set timer for each news to display for 24 hours from the time it was inserted
//         const interval = setInterval(fetchNews, 24 * 60 * 60 * 1000);
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="container">
//             <div className="card-container">
//                 {nationalNews.length > 0 ? (
//                     nationalNews.map((news, index) => (
//                         <div className="card" key={index}>
//                             <h3>{news.title}</h3>
//                             <p>{news.article}</p>
//                             {news.image && <img src={`http://localhost:3001/${news.image}`} alt="News Image" />}
//                             {news.video && (
//                                 <video controls>
//                                     <source src={`http://localhost:3001/${news.video}`} type="video/mp4" />
//                                     Your browser does not support the video tag.
//                                 </video>
//                             )}
//                             <p>Highlight: {news.highlight}</p>
//                             <p>Date: {news.dateTime}</p>
//                             <p>Name: {news.name}</p>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No national news available for today.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default NationalNews;


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

export default NationalNews;
