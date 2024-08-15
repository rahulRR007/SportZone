// src/components/TournamentFilter.js

import React from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography
} from '@mui/material';

const TournamentFilter = ({ filters, handleFilterChange, indianStates, indoorSports, outdoorSports }) => {
  return (
    <Box sx={{ width: 250, p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Filters
      </Typography>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Location</InputLabel>
        <Select
          name="location"
          value={filters.location}
          onChange={handleFilterChange}
          size="small"
        >
          <MenuItem value=""><em>All</em></MenuItem>
          {indianStates.map((state) => (
            <MenuItem key={state} value={state}>{state}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Indoor Sport</InputLabel>
        <Select
          name="indoorSport"
          value={filters.indoorSport}
          onChange={handleFilterChange}
          size="small"
        >
          <MenuItem value=""><em>None</em></MenuItem>
          {indoorSports.map((sport) => (
            <MenuItem key={sport} value={sport}>{sport}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Outdoor Sport</InputLabel>
        <Select
          name="outdoorSport"
          value={filters.outdoorSport}
          onChange={handleFilterChange}
          size="small"
        >
          <MenuItem value=""><em>None</em></MenuItem>
          {outdoorSports.map((sport) => (
            <MenuItem key={sport} value={sport}>{sport}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Gender</InputLabel>
        <Select
          name="gender"
          value={filters.gender}
          onChange={handleFilterChange}
          size="small"
        >
          <MenuItem value=""><em>All</em></MenuItem>
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Team Number</InputLabel>
        <Select
          name="teamNumber"
          value={filters.teamNumber}
          onChange={handleFilterChange}
          size="small"
        >
          <MenuItem value=""><em>All</em></MenuItem>
          {[1, 2, 4, 6, 8, 10, 11, 12, 15].map((num) => (
            <MenuItem key={num} value={num}>{num}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default TournamentFilter;
