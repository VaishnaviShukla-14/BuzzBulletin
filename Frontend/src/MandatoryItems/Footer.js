
// import React from 'react';
// import Imglogo from '../Images/VPP.jpeg';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
// import MailIcon from '@mui/icons-material/Mail';
// import TelegramIcon from '@mui/icons-material/Telegram';
// import { Button } from '@mui/material';
// import mainpage from '../Pages/MainPage';
// import './Footer.css';

// const Footer = () => {
//     const handleClick = () => {
//         const element = document.getElementById(mainpage.toLowerCase());
//         if (element) {
//             element.scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     return (
//         <div className="footer-page" style={{marginTop:"20%"}}>
//         <footer className="Footer">
//             <div className="container">
//                 <div className="row">
//                     <div className="col_1">
//                         <div className="button-logo" onClick={handleClick}>
//                             <img src={Imglogo} alt="Logo" />
//                             <Button color="inherit" sx={{ fontWeight: 'bold', fontSize:'1.75rem',color:'#b173cc'}}>
//                                 VP News
//                             </Button>
//                         </div>
//                         <p>
//                             Hello! Welcome to our news service, where we deliver the latest and
//                             most relevant updates. Our goal is to save you time by providing
//                             quality news in a simple and enjoyable format. We hope you like it
//                             and find it easy to read. Happy reading!
//                         </p>
//                         <div className="social-icons">
//                             <FacebookIcon style={{ color: 'blue' }} />
//                             <InstagramIcon style={{ color: 'purple' }} />
//                             <LinkedInIcon style={{ color: 'Dark blue' }} />
//                         </div>
//                     </div>
//                     <div className="col_2">
//                         <h3>Quick Links</h3>
//                         <p>
//                             <a href="/Pages/MainPage">Services</a>
//                         </p>
//                         <p>
//                             <a href="/About">About Us</a>
//                         </p>
//                         <p>
//                             <a href="/Contact">Contact Us</a>
//                         </p>
//                     </div>
//                     <div className="col_3">
//                         <h3>Contact Info</h3>
//                         <p>
//                             <WifiCalling3Icon style={{ color: 'White' }} /> +91 7212982392
//                         </p>
//                         <p>
//                             <MailIcon style={{ color: 'White' }} /> vaishu014@gmail.com
//                         </p>
//                         <p>
//                             <TelegramIcon style={{ color: 'White' }} /> Near It, Lucknow
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//         </div>
//     );
// };

// export default Footer;



import React from 'react';
import Imglogo from '../Images/logobuzz.jpg';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import MailIcon from '@mui/icons-material/Mail';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Button } from '@mui/material';
import mainpage from '../Pages/MainPage';
import './Footer.css';

const Footer = () => {
    const handleClick = () => {
        const element = document.getElementById(mainpage.toLowerCase());
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="footer-page" style={{marginTop:"20%"}}>
        <footer className="Footer">
            <div className="container">
                <div className="row">
                    <div className="col_1">
                        <div className="button-logo" onClick={handleClick}>
                            <img className="logo-design" src={Imglogo} alt="Logo" />
                            <Button color="inherit" sx={{ fontWeight: 'bold', fontSize:'1.75rem',color:'black'}}>
                                The BuzzBulletin
                            </Button>
                        </div>
                        <p>
                            Hello! Welcome to our news service!!, where we deliver the latest and the
                            most relevant updates. Our goal is to save your time by providing
                            quality news in a simple yet enjoyable format. We hope you'll like it
                            and find it easy to read. Happy reading readers!
                        </p>
                        <div className="social-icons">
                            <FacebookIcon style={{ color: 'blue', fontSize:'25px' }} />
                            <InstagramIcon style={{ color: 'purple',  fontSize:'25px' }} />
                            <LinkedInIcon style={{ color: 'Dark blue',  fontSize:'25px' }} />
                        </div>
                    </div>
                    <div className="col_2">
                        <h3 style={{color:'black',fontWeight:'bold'}}>QUICK LINKS</h3>
                        <p>
                            <a style={{color:'black'}} href="/Pages/MainPage">Services</a>
                        </p>
                        <p>
                            <a style={{color:'black'}} href="/About">About Us</a>
                        </p>
                        <p>
                            <a style={{color:'black'}} href="/Contact">Contact Us</a>
                        </p>
                    </div>
                    <div className="col_3">
                        <h3 style={{color:'black',fontWeight:'bold'}} >Contact Info</h3>
                        <p>
                            <WifiCalling3Icon style={{ color: 'black' }} /> +91 7212982392, +91 9935224966
                        </p>
                        <p>
                            <MailIcon style={{ color: 'black' }} /> vaishu014@gmail.com, pranatikaushik05@gmail.com
                        </p>
                        <p>
                            <TelegramIcon style={{ color: 'black' }} /> Hazratganj, Lucknow.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        </div>
    );
};

export default Footer;
