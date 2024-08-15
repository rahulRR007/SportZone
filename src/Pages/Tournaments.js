// src/pages/Dashboard.js

import React, { useState, useEffect } from 'react';
import { fetchTournaments } from './sportsData'; 
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
  Button,
  TextField,
  InputAdornment,
  createTheme,
  Avatar,
  ThemeProvider,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../images/logo.png'; // Ensure this path is correct
import Carousel from './Carousel'; // Import your Carousel component
import EventCard from '../Components/EventCard'; // Import the EventCard component
import TournamentFilter from '../Components/TournamentFilter'; // Import TournamentFilter component
import Preloader from '../OrgPages/Components/Preloader';
import Footer from '../OrgPages/Components/Footer'; // Import Footer component
import { useNavigate } from 'react-router-dom';

// Import the sports data from the new file


// Define sample data
const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", 
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
  "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const indoorSports = [
  "Badminton", "Table Tennis", "Squash", "Basketball", "Volleyball", 
  "Handball", "Chess", "Carrom", "Billiards", "Snooker", 
  "Gymnastics", "Boxing", "Wrestling", "Fencing", "Taekwondo", 
  "Judo", "Weightlifting", "Kabbadi", "Indoor Archery", "Bowling"
];

const outdoorSports = [
  "Cricket", "Football", "Hockey", "Tennis", "Baseball", 
  "Golf", "Running", "Cycling", "Swimming", "Track and Field", 
  "Rugby", "Softball", "Rowing", "Sailing", "Surfing", 
  "Triathlon", "Horse Riding", "Skateboarding", "Athletics", "Hurdles"
];

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


export default function Dashboard() {
  const [sportsGrounds, setSportsGrounds] = useState([]);
  const [filters, setFilters] = useState({
    location: '',
    indoorSport: '',
    outdoorSport: '',
    gender: '',
    teamNumber: '',
    searchQuery: '',
  });

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTournaments();
        setSportsGrounds(data);
      } catch (error) {
        console.error('Error fetching tournaments:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (event) => {
    setFilters({ ...filters, [event.target.name]: event.target.value });
  };

  const filteredGrounds = sportsGrounds.filter((ground) =>
    (!filters.searchQuery || ground.name.toLowerCase().includes(filters.searchQuery.toLowerCase())) &&
    (!filters.location || ground.location.includes(filters.location)) &&
    (!filters.indoorSport || ground.sport === filters.indoorSport) &&
    (!filters.outdoorSport || ground.sport === filters.outdoorSport) &&
    (!filters.gender || ground.gender === filters.gender) &&
    (!filters.teamNumber || ground.teamSize === parseInt(filters.teamNumber))
  );

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const toggleMenu = (open) => () => {
    setMenuOpen(open);
  };

  const navigate = useNavigate();

  const handleRegister = (id) => {
    navigate(`/register/${id}`);
  };

  const handleNavigation = (path) => () => {
    navigate(path);
    setMenuOpen(false); // Close the drawer after navigation
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!loadingComplete && <Preloader setLoadingComplete={setLoadingComplete} />}
      {loadingComplete && (
        <>
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
                    <ListItem button onClick={handleNavigation('/ParticipantsProfile')}>
                      <ListItemText primary="Profile" />
                    </ListItem>
                    <ListItem button onClick={handleNavigation('/registered-tournaments')}>
                      <ListItemText primary="Registered Tournaments" />
                    </ListItem>
                    <ListItem button onClick={handleNavigation('/About')}>
                      <ListItemText primary="About" />
                    </ListItem>
                    <ListItem button onClick={handleNavigation('/Contact')}>
                      <ListItemText primary="Contact Us" />
                    </ListItem>
                    <ListItem button onClick={handleNavigation('/')}>
                      <ListItemText primary="Logout" />
                    </ListItem>
                  </List>
                </Box>
              </Drawer>
              <Box
                component="img"
                src={logo}
                alt="Logo"
                sx={{ height: 60, width: 60, mr: 2 }} // Increased size
              />
              <Typography variant="h6" component="div" sx={{ mr: 2 }}>
                SportZone Dashboard
              </Typography>
              <TextField
                label="Search The Tournament"
                name="searchQuery"
                variant="outlined"
                value={filters.searchQuery}
                onChange={handleFilterChange}
                size="small"
                InputLabelProps={{ style: { color: '#b0bec5' } }}
                InputProps={{
                  style: { color: '#fff' },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <SearchIcon style={{ color: '#b0bec5' }} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ mr: 'auto' }} // Push search bar to the left
              />
              <Button color="inherit" onClick={toggleDrawer(true)}>
                <FilterListIcon />
                Filters
              </Button>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                <TournamentFilter 
                  filters={filters} 
                  handleFilterChange={handleFilterChange} 
                  indianStates={indianStates}
                  indoorSports={indoorSports}
                  outdoorSports={outdoorSports}
                />
              </Drawer>
            </Toolbar>
          </AppBar>
          <Toolbar />
          <Carousel /> {/* Add Carousel Component */}
          <Container sx={{ mt: 2 }}>
            <Typography variant="h4" gutterBottom>
              {/* All Sports */}
            </Typography>
            <Grid container spacing={2}>
              {loading ? (
                Array.from(new Array(6)).map((_, index) => (
                  <Grid item xs={12} md={6} lg={4} key={index}>
                    <EventCard /> {/* Pass no props for skeleton state */}
                  </Grid>
                ))
              ) : (
                filteredGrounds.map((ground, index) => (
                  <Grid item xs={12} md={6} lg={4} key={index}>
                    <EventCard
                      event={ground}
                      onRegister={() => handleRegister(index)}
                    />
                  </Grid>
                ))
              )}
            </Grid>
          </Container>
          <Footer /> {/* Add Footer Component */}
        </>
      )}
    </ThemeProvider>
  );
}
