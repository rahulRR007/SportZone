import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Typography, Stack, Grid, Paper, Box, Collapse } from '@mui/material';
import { blue, red, grey } from '@mui/material/colors';
import video from '../images/video.mp4';
import logo from '../images/logo.png'; // Import your logo image
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Home = () => {
  // State for managing dropdown visibility
  const [openParticipant, setOpenParticipant] = useState(false);
  const [openOrganizer, setOpenOrganizer] = useState(false);

  // Hook for navigation
  const navigate = useNavigate();

  // Handle mouse enter and leave events
  const handleParticipantMouseEnter = () => setOpenParticipant(true);
  const handleParticipantMouseLeave = () => setOpenParticipant(false);
  const handleOrganizerMouseEnter = () => setOpenOrganizer(true);
  const handleOrganizerMouseLeave = () => setOpenOrganizer(false);

  // Handle button click
  const handleParticipantPortalClick = () => {
    navigate('/signin'); // Navigate to the SignInSide component
  };

  const handleOrganizerPortalClick = () => {
    navigate('/slidesingin'); // Navigate to the SlideSignIn component
  };

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', height: '100vh' }}>
      {/* Navbar */}
      <AppBar position="fixed" sx={{ background: 'black' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box 
              component="img" 
              src={logo} 
              alt="Logo" 
              sx={{ height: '1.5cm', width: 'auto', marginRight: 2 }} // Set the logo height to 1.5cm
            />
            
          </Box>
          
        </Toolbar>
      </AppBar>

      {/* Video background */}
      <Box
        component="video"
        src={video}
        autoPlay
        loop
        muted
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
          filter: 'brightness(0.5)', // Increase shadow effect by decreasing brightness
        }}
      />
      
      <Box sx={{ padding: 4, position: 'relative', zIndex: 1, marginTop: 8 }}>
        <Box sx={{ textAlign: 'center', marginBottom: 6 }}>
          <Typography 
            variant="h1" 
            gutterBottom 
            sx={{ 
              color: 'white', 
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' // Adding shadow to the title
            }}
          >
            Welcome to SportsZone
          </Typography>
        </Box>

        <Stack spacing={4} alignItems="center">
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Paper 
                elevation={6} 
                sx={{ 
                  padding: 4, 
                  borderRadius: 3, 
                  textAlign: 'center', 
                  backgroundColor: 'rgba(249, 249, 249, 0.5)', // Decreased opacity
                  position: 'relative',
                  '&:hover': {
                    cursor: 'pointer', // Change cursor to pointer on hover
                  }
                }}
                onMouseEnter={handleParticipantMouseEnter}
                onMouseLeave={handleParticipantMouseLeave}
              >
                <Typography variant="h4" gutterBottom sx={{ color: 'white' }}>
                  For Participants
                </Typography>
                <Collapse in={openParticipant}>
                  <Typography variant="body1" paragraph sx={{ color: grey[200] }}>
                    Access features and manage your participation with ease. Explore our portal to find everything you need for a great sports experience.
                  </Typography>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    size="large" 
                    sx={{ 
                      mt: 2, 
                      textTransform: 'none', 
                      transition: 'transform 0.3s ease, background-color 0.3s ease', 
                      borderRadius: '8px',
                      '&:hover': {
                        backgroundColor: blue[700], // Darker shade for hover effect
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Adding shadow on hover
                        transform: 'scale(1.05)' // Slightly enlarge the button on hover
                      },
                      '&:active': {
                        transform: 'scale(0.95)', // Slightly shrink the button on click
                      }
                    }}
                    onClick={handleParticipantPortalClick} // Handle button click
                  >
                    Participant Portal
                  </Button>
                </Collapse>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Paper 
                elevation={6} 
                sx={{ 
                  padding: 4, 
                  borderRadius: 3, 
                  textAlign: 'center', 
                  backgroundColor: 'rgba(249, 249, 249, 0.5)', // Decreased opacity
                  position: 'relative',
                  '&:hover': {
                    cursor: 'pointer', // Change cursor to pointer on hover
                  }
                }}
                onMouseEnter={handleOrganizerMouseEnter}
                onMouseLeave={handleOrganizerMouseLeave}
              >
                <Typography variant="h4" gutterBottom sx={{ color: 'white' }}>
                  For Organizers
                </Typography>
                <Collapse in={openOrganizer}>
                  <Typography variant="body1" paragraph sx={{ color: grey[200] }}>
                    Manage tournaments, oversee events, and ensure everything runs smoothly. Our organizer portal provides all the tools you need.
                  </Typography>
                  <Button 
                    variant="contained" 
                    color="secondary" 
                    size="large" 
                    sx={{ 
                      mt: 2, 
                      textTransform: 'none', 
                      transition: 'transform 0.3s ease, background-color 0.3s ease', 
                      borderRadius: '8px',
                      '&:hover': {
                        backgroundColor: red[700], // Darker shade for hover effect
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Adding shadow on hover
                        transform: 'scale(1.05)' // Slightly enlarge the button on hover
                      },
                      '&:active': {
                        transform: 'scale(0.95)', // Slightly shrink the button on click
                      }
                    }}
                    onClick={handleOrganizerPortalClick} // Handle button click
                  >
                    Organizer Portal
                  </Button>
                </Collapse>
              </Paper>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
};

export default Home;
