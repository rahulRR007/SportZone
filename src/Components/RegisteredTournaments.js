import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Avatar,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import EventCard from '../Components/TrEventCard';
import axios from 'axios';

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
      paper: '#121212',
    },
    text: {
      primary: '#fff',
      secondary: '#b0bec5',
    },
  },
});

export default function RegisteredTournament() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [registeredTournaments, setRegisteredTournaments] = useState([]);
  const navigate = useNavigate();
  const email = localStorage.getItem('userEmail');

  useEffect(() => {
    axios.get(`http://localhost:8080/api/userpart/${email}`)
      .then(response => {
        const partId = response.data.id;
        return axios.get(`http://localhost:8080/api/registration/regIdAndTourIdPairsByPartId/${partId}`);
      })
      .then(response => {
        const regTourPairs = response.data;
        const promises = regTourPairs.map(([regId, tourId]) =>
          axios.get(`http://localhost:8080/api/tournaments/${tourId}`).then(res => ({
            ...res.data,
            regId: regId,
          }))
        );
        return Promise.all(promises);
      })
      .then(registeredTournaments => {
        setRegisteredTournaments(registeredTournaments);
      })
      .catch(error => {
        console.error("Error fetching registered tournaments!", error);
      });
  }, [email]);

  const toggleMenu = (open) => () => {
    setMenuOpen(open);
  };

  const handleNavigation = (path) => () => {
    navigate(path);
    setMenuOpen(false);
  };

  const handleBack = () => {
    navigate('/tournament');
  };

  const handleDelete = (regId) => {
    axios.delete(`http://localhost:8080/api/registration/delete/${regId}`)
      .then(() => {
        setRegisteredTournaments(prevTournaments =>
          prevTournaments.filter(tournament => tournament.regId !== regId)
        );
      })
      .catch(error => {
        console.error(`Error deleting the tournament with regId: ${regId}`, error);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={menuOpen} onClose={toggleMenu(false)}>
            <Box sx={{ width: 250, p: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <Avatar>A</Avatar>
              </Box>
              <List>
                <ListItem button onClick={handleNavigation('/profile')}>
                  <ListItemText primary="Profile" />
                </ListItem>
                <ListItem button onClick={handleNavigation('/registered-tournaments')}>
                  <ListItemText primary="Registered Tournaments" />
                </ListItem>
                <ListItem button onClick={handleNavigation('/about')}>
                  <ListItemText primary="About" />
                </ListItem>
                <ListItem button onClick={handleNavigation('/contact')}>
                  <ListItemText primary="Contact Us" />
                </ListItem>
                <ListItem button onClick={handleNavigation('/logout')}>
                  <ListItemText primary="Logout" />
                </ListItem>
              </List>
            </Box>
          </Drawer>
          <IconButton edge="start" color="inherit" aria-label="back" onClick={handleBack} sx={{ mr: 2 }}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            Registered Tournaments
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container sx={{ mt: 8 }}>
        <Typography variant="h4" gutterBottom>
          Your Registered Tournaments
        </Typography>
        <Grid container spacing={2}>
          {registeredTournaments.length > 0 ? (
            registeredTournaments.map((tournament) => (
              <Grid item xs={12} md={6} lg={4} key={tournament.regId}>
                <EventCard
                  event={tournament}
                  onDelete={() => handleDelete(tournament.regId)}
                />
              </Grid>
            ))
          ) : (
            <Typography variant="body1">No registered tournaments found.</Typography>
          )}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
