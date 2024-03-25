import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Popover from '@mui/material/Popover';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../index.css';

const drawerWidth = 200;

function LeftDrawer() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const menuItems = [
    { text: 'User', icon: <PersonIcon />, link: '/user' },
    { text: 'Deleted Users', icon: <PersonIcon />, link: '/deleteUser' },
    { text: 'Logout', icon: <PersonIcon />, link: '/logout' },
    // Add more menu items as needed
  ];

  const handleNewsClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNewsClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Drawer
      variant="permanent"
      open
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        marginTop: '13%',
        zIndex: 500,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          position: 'absolute',
        },
      }}
    >
      <div style={{ marginTop: '50%',backgroundcolor: 'rgb(218, 140, 23)' }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={handleNewsClick}
              
            >
              <ListItemIcon className='drawericon'>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="News" />
              <ExpandMoreIcon fontSize="small" />
            </ListItemButton>
          </ListItem>
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleNewsClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <List>
              <Link to="/enhancedintertable" >
                <ListItemButton
                  onClick={handleNewsClose}
                 
                >
                  <ListItemText primary="International" />
                </ListItemButton>
              </Link>
              <Link to="/enhancednatiotable" >
                <ListItemButton
                  onClick={handleNewsClose}
                
                >
                  <ListItemText primary="National" />
                </ListItemButton>
              </Link>
              <Link to="/enhancededutable" >
                <ListItemButton
                  onClick={handleNewsClose}
                  
                >
                  <ListItemText primary="Education" />
                </ListItemButton>
              </Link>
              <Link to="/enhancedsportstable" >
                <ListItemButton
                  onClick={handleNewsClose}
                  
                >
                  <ListItemText primary="Blog" />
                </ListItemButton>
              </Link>
              <Link to="/enhancedblogtable" >
                <ListItemButton
                  onClick={handleNewsClose}
                  
                >
                  <ListItemText primary="Blog" />
                </ListItemButton>
              </Link>
            <Link to="/enhancedblog_storytable" >
                <ListItemButton
                  onClick={handleNewsClose}
                >
                  <ListItemText primary="Blog_Story" />
                </ListItemButton>
              </Link>
              <Link to="/enhancedcarouseltable" >
                <ListItemButton
                  onClick={handleNewsClose}
                >
                  <ListItemText primary="Carousel" />
                </ListItemButton>
              </Link>
            </List>
          </Popover>
          {menuItems.map(({ text, icon, link }, index) => (
            <Link to={link} key={text} >
              <ListItem disablePadding>
                <ListItemButton >
                  <ListItemIcon className='drawericon'>
                    {icon}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    </Drawer>
  );
}

export default LeftDrawer;

