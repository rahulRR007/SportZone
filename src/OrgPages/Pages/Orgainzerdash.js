import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  CssBaseline,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import '../css/Dashboard.css';
import Preloader from '../Components/Preloader.js';
import Footer from '../Components/Footer.js';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#000',
      paper: '#00000',
    },
    text: {
      primary: '#fff',
      secondary: '#b0bec5',
    },
  },
});

const Orgainzerdash = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [showSection, setShowSection] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [tournaments, setTournaments] = useState([]); // State to hold tournaments
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      const email = localStorage.getItem('userEmail');
      try {
        const response = await axios.get(`http://localhost:8080/api/user/${email}`);
        if (response.status === 200) {
          const { firstName, lastName, id } = response.data;
          setFirstName(firstName);
          setLastName(lastName);
          fetchTournaments(id); // Fetch tournaments using org_id
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    const fetchTournaments = async (org_id) => {
      try {
        const response = await axios.get(`http://localhost:8080/api/tournaments/byOrganizer/${org_id}`);
        setTournaments(response.data); // Store tournaments in state
      } catch (error) {
        console.error('Error fetching tournaments:', error);
      }
    };

    fetchUserProfile();
  }, []);

  useEffect(() => {
    if (loadingComplete) {
      setShowSection(true);
    }
  }, [loadingComplete]);

  const handleMenuOpen = () => {
    navigate('/OrganizerProfile');
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    navigate('/');
    handleMenuClose();
  };

  const handleJoinPortal = () => {
    setShowSection(false);
  };

  const handleAdvertiseTournament = () => {
    navigate('/CreateTournament');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!loadingComplete && <Preloader setLoadingComplete={setLoadingComplete} />}
      {loadingComplete && (
        <>
          <AppBar position="fixed" className="appBar">
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setDrawerOpen(!drawerOpen)} className="menuIcon">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="title">
                SportsZone
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="body1" className="username">
                  {firstName} {lastName}
                </Typography>
                <IconButton edge="end" color="inherit" aria-label="profile" onClick={handleMenuOpen} className="profileButton">
                  <AccountCircleIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            PaperProps={{
              sx: {
                backgroundColor: '#0A0A0A',
                color: '#fff',
              },
            }}
            className="drawer"
          >
            <List sx={{ width: 250 }}>
              <ListItem button onClick={() => setDrawerOpen(false)} className="listItem">
                <ListItemIcon>
                  <CloseIcon className="closeIcon" />
                </ListItemIcon>
              </ListItem>
              <ListItem button component={Link} to="/OrganizerPanel" className="listItem">
                <ListItemText primary="OrganizerPanel" className="listItemText" />
              </ListItem>
              <ListItem button component={Link} to="/OrgAbout" className="listItem">
                <ListItemText primary="About Us" className="listItemText" />
              </ListItem>
              <ListItem button component={Link} to="/Contact" className="listItem">
                <ListItemText primary="Contact" className="listItemText" />
              </ListItem>
              <ListItem button onClick={handleLogout} className="listItem">
                <ListItemText primary="Logout" className="listItemText" />
              </ListItem>
            </List>
          </Drawer>
          <Box className="mainContent">
            <Box className={`new-section ${showSection ? 'fade-in' : 'fade-out'}`}>
              <h2>Give ads For Your Tournaments Today!</h2>
              <p>Shape the future of sports. Create your own tournament on SportsZone and connect with passionate athletes.</p>
              <button onClick={handleJoinPortal}>Join our SportZone Portal to start your sports journey.</button>
            </Box>
            {!showSection && (
              <Box className="tournaments-section fade-in">
                <Button variant="contained" color="secondary" sx={{ mb: 2 }} onClick={handleAdvertiseTournament}>
                  Advertise Your Tournament
                </Button>
                <h2>Your Tournaments Ongoing</h2>
                <Grid container spacing={3}>
                  {tournaments.map((tournament, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                      <Card>
                        <CardMedia
                          component="img"
                          height="140"
                          image={`data:image/jpeg;base64,${tournament.image}`} // Display the tournament image
                          alt={tournament.name}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {tournament.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {tournament.dates}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {tournament.location}
                          </Typography>
                          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                            View Details
                          </Button>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}
          </Box>
          <Footer />
        </>
      )}
    </ThemeProvider>
  );
};

export default Orgainzerdash;
