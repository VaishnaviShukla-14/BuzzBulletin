import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const FooterCarousel = () => {
  return (
    <Carousel showArrows={true} showThumbs={false} infiniteLoop={true}>
      <div>
        <img src="https://i.pinimg.com/564x/a3/05/02/a30502a08704423f4a24ee0cb36de582.jpg" style={{width:'500px'}}/>
      </div>
      <div>
        <img src="https://i.pinimg.com/564x/7d/83/c5/7d83c5b60ee45f5949183aa587b665c4.jpg" style={{width:'500px'}} />
      </div>
      <div>
        <img src="https://i.pinimg.com/564x/17/54/6c/17546c08cb5f70c36ced106a1aa512f2.jpg" style={{width:'500px'}} />
      </div>
    </Carousel>
  );
};

export default FooterCarousel;
