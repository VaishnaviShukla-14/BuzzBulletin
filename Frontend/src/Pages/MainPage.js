// import * as React from 'react';
// import '../index.css';
// import Appbar from '../MandatoryItems/Appbar';
// import LeftDrawer from '../MandatoryItems/LeftDrawer';
// import SubAppBar from '../MandatoryItems/SubAppBar';
// import Footer from '../MandatoryItems/Footer';
// import Weather from './Weather';


// const MainPage = () => {
//   return (
//     <>
//       <div className="Container">
//         <Appbar />
//       </div>
//       <div className="Container">
//         <SubAppBar />
//       </div>
//       <div className="Container_2_main">
//       <div className="Container_2" sx={{marginTop:'20%'}}>
//         <LeftDrawer />
//       </div>
//       <div className='container_2_a'>
//       <Weather/>
//       </div>
//       </div>
//       <div className='container_3'>
//         <Footer/>
//       </div>
//     </>
//   );
// };

// export default MainPage;


import * as React from 'react';
import '../index.css';
import Appbar from '../MandatoryItems/Appbar';
import SubAppBar from '../MandatoryItems/SubAppBar';
import Footer from '../MandatoryItems/Footer';
import Weather from './Weather';
import Slider from './Slider';

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
      <div className='container_4'>
        <Footer />
      </div>
      </div>
    </>
  );
};

export default MainPage;
