import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import InternationalForm from './InternationalForm'; // Import the International form component
import NationalForm from './NationalForm';
import SportsForm from './SportsForm';
import EducationForm from './EducationForm';
import LeftDrawer from '../MandatoryItems/LeftDrawer';

const pages = ['International', 'National', 'Sports', 'Education'];

function ResponsiveAppBar() {
  const [activePage, setActivePage] = useState('International'); // Set default value to 'International'
  const [formVisible, setFormVisible] = useState({
    International: false,
    National: false,
    Sports: false,
    Education: false,
  });

  const handleClick = (page) => {
    setActivePage(page);

    // Set the visibility of the clicked page's form to true
    setFormVisible((prevFormVisible) => ({
      ...prevFormVisible,
      [page]: true,
    }));

    const element = document.getElementById(page.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to close the form
  const handleCloseForm = () => {
    setFormVisible({
      International: false,
      National: false,
      Sports: false,
      Education: false,
    });
  };

  // Function to render the active form based on the selected page
  const renderActiveForm = () => {
    switch (activePage) {
      case 'International':
        return (
          <InternationalForm
            isVisible={formVisible.International}
            onClose={handleCloseForm}
          />
        );
      case 'National':
        return (
          <NationalForm
            isVisible={formVisible.National}
            onClose={handleCloseForm}
          />
        );
      case 'Sports':
        return (
          <SportsForm
            isVisible={formVisible.Sports}
            onClose={handleCloseForm}
          />
        );
      case 'Education':
        return (
          <EducationForm
            isVisible={formVisible.Education}
            onClose={handleCloseForm}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
    <div>
      <AppBar position="static" sx={{ backgroundColor: ' linear-gradient( rgb(129, 2, 184), rgb(129, 2, 184)) !important' }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {pages.map((page) => (
              <div key={page}>
                <Button
                  color="inherit"
                  onClick={() => handleClick(page)}
                  sx={{ fontWeight: 'bold' }}
                >
                  {page}
                </Button>
              </div>
            ))}
          </Box>
        </Container>
      </AppBar>
      <Container maxWidth="xl">
        {renderActiveForm()}
      </Container>
    </div>
    <div>
      <LeftDrawer/>
    </div>
    </>
  );
}

export default ResponsiveAppBar;
