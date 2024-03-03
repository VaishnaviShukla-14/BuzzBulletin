
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'black',marginTop:'5px',marginBottom:'5px'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <div className="row">
         <div className="col-sm-1">
          <h3 style={{color:'rgb(251,236,93)',fontSize:'20px'}}>NATIONAL</h3>
          </div>

          <div className="col-sm-2">
          <h3 style={{color:'rgb(251,236,93)',fontSize:'20px',marginLeft:'130px'}}>INTERNATIONAL</h3>
          </div>

          <div className="col-sm-3">
          <h3 style={{color:'rgb(251,236,93)',fontSize:'20px',marginLeft:'250px'}}>SPORTS</h3>
          </div>


          <div className="col-sm-3">
          <h3 style={{color:'rgb(251,236,93)',fontSize:'20px',marginLeft:'200px'}}>BLOGS</h3>
          </div>


          <div className="col-sm-3">
          <h3 style={{color:'rgb(251,236,93)',fontSize:'20px',marginLeft:'60px'}}>EDUCATION CORNER</h3>
          </div>

          </div>
         
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}