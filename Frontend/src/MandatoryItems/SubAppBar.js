import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import './SubAppbar.css';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{background:' linear-gradient(to right, #ffc7e2, #e899dc), rgba(232, 153, 220, 0.1)'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <div className="row">
         <div className="col-sm-1 headingone">
          <h3 style={{marginLeft:'50px'}}><Link to="/NationalNews.js" style={{textDecoration:'none',color:'#000',fontSize:'20px',fontWeight:'bold',fontFamily:'Times New Roman'}}>NATIONAL</Link></h3>
          </div>

          <div className="col-sm-2 heading">
          <h3 style={{marginLeft:'195px'}}><Link to="/Internationalnews.js" style={{textDecoration:'none',color:'#000',fontSize:'20px',fontWeight:'bold',fontFamily:'Times New Roman'}}>INTERNATIONAL</Link></h3>
          </div>

          <div className="col-sm-3 heading">
          <h3 style={{marginLeft:'310px'}}><Link to="/Sportsnews.js" style={{textDecoration:'none',color:'#000',fontSize:'20px',fontWeight:'bold',fontFamily:'Times New Roman'}}>SPORTS</Link></h3>
          </div>


          <div className="col-sm-3 heading">
          <h3 style={{marginLeft:'210px'}}><Link to="/Blog.js" style={{color:'#000',fontSize:'20px',fontWeight:'bold',fontFamily:'Times New Roman',textDecoration:'none'}}>BLOGS</Link></h3>
          </div>


          <div className="col-sm-3 heading">
          <h3 style={{marginLeft:'70px'}}><Link to="/Educationalnews.js" style={{textDecoration:'none',color:'#000',fontSize:'20px',fontWeight:'bold',fontFamily:'Times New Roman'}}>EDUCATION CORNER</Link></h3>
          </div>

          </div>
         
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}