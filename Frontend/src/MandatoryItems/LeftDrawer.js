import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import '../index.css';

const drawerWidth = 200;

function LeftDrawer() {
  const menuItems = [
    { text: 'News', icon: <PersonIcon/>, link: '/login' },
    {text: 'User', icon: <PersonIcon/>, link: '/user'},
    {text: 'Logout', icon: <PersonIcon/>, link: '/login'},
    // Add more menu items as needed
  ];

  return (

    <Drawer
      variant="permanent"
      open
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        marginTop: '13%',
        zIndex: 500, // Set a high z-index to ensure it appears above other content
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          position: 'absolute', // Change the position to absolute
        },
      }}
    >
      <div style={{ marginTop: '44%' }}>
        {/* <Typography style={{fontFamily:'serif',fontWeight:'bold',alignContent:"center",alignItems:'center'}} gutterBottom>
        For notification and get updated with the news login here.<br/><br/>
      </Typography> */}
        <List>
          {menuItems.map(({ text, icon, link }, index) => (
            <Link to={link} key={text} style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon className='drawericon'>
                    {icon}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
        <br />
        {/* <Typography style={{ fontFamily: 'serif'}} gutterBottom>&nbsp; Not Register?&nbsp;&nbsp;
         
        </Typography> */}
      </div>
    </Drawer>
  );
}

export default LeftDrawer;


