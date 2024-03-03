import * as React from 'react';
import '../index.css';
import Appbar from '../MandatoryItems/Appbar';
import SubAppBar from '../MandatoryItems/SubAppBar';
import Footer from '../MandatoryItems/Footer';
import Weather from './Weather';
import Slider from './Slider';
import Nationalnews from '../ShowNews/NationalNews';
import Internationalnews from '../ShowNews/Internationalnews';
import Educationalnews from '../ShowNews/Educationalnews';
import Sportnews from '../ShowNews/Sportsnews';


const MainPage = () => {
  return (
    <>
    <div>
      <div className="Container" >
        <Appbar />
      </div>
      <div className="Container" >
        <SubAppBar />
      </div>
      <div className='Container'> 
        <Weather/>
      </div>
      <div className="Container_3" >
        <div>
          <Slider/>
        </div>
      </div>
      <div><h1>National News</h1>
        <div>
          <Nationalnews/>
        </div>
        <h1>International News</h1>
        <div>
          <Internationalnews/>
        </div>
        <h1>Educational News</h1>
        <div>
          <Educationalnews/>
        </div>
        <h1>Sports News</h1>
        <div>
          <Sportnews/>
        </div>
      </div>
      <div className='container_4'>
        <Footer />
      </div>
      </div>
    </>
  );
};

export default MainPage;
