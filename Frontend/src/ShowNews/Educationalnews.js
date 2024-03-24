// EducationalNews.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EducationalNews.css'; // Update the CSS file name if needed

const Educationalnews = () => {
    const [todaysEducationalForms, setTodaysEducationalForms] = useState([]);

    useEffect(() => {
        fetchTodaysEducationalForms();
    }, []);

    const fetchTodaysEducationalForms = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/educationalnews');
            const educationalFormsData = response.data;

            const currentDate = new Date().toLocaleDateString(); // Get current date in "MM/DD/YYYY" format
            const todaysForms = educationalFormsData.filter(form => form.dateTime.includes(currentDate));

            setTodaysEducationalForms(todaysForms);
        } catch (error) {
            console.error('Error fetching educational forms:', error);
        }
    };

    return (
        <div className="container">
            <div className="card-container">
                {todaysEducationalForms.map((form, index) => (
                    <div className="card" key={index}>
                        <h3>{form.title}</h3>
                        <p>{form.article}</p>
                        {form.image && <img src={`http://localhost:3001/${form.image}`} alt="Form Image" />}
                        {form.video && (
                            <video controls>
                                <source src={`http://localhost:3001/${form.video}`} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                        <p>Highlight: {form.highlight}</p>
                        <p>Date: {form.dateTime}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Educationalnews;
