import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carouselnews = () => {
  const [carouselItems, setCarouselItems] = useState([]);

  useEffect(() => {
    const fetchCarouselItems = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/carousel');
        if (response && response.data) {
          setCarouselItems(response.data.slice(0, 5)); // Limit to maximum 5 items
        }
      } catch (error) {
        console.error('Error fetching carousel items:', error);
      }
    };

    fetchCarouselItems();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={styles.carouselContainer}>
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <div key={index}>
            {item.video ? (
              <video style={styles.media} controls>
                <source src={`http://localhost:3001/${item.video}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={`http://localhost:3001/${item.image}`} alt="Carousel Item" style={styles.media} />
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

const styles = {
  carouselContainer: {
    maxWidth: '600px',
    margin: 'auto',
  },
  media: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
  },
};

export default Carouselnews;
