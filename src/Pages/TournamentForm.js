// src/components/TournamentForm.js

import React, { useState } from 'react';
import { TextField, Button, Container, Paper, Typography, Grid } from '@mui/material';

export default function TournamentForm({ onAddTournament }) {
  const [tournament, setTournament] = useState({
    name: '',
    image: '',
    gender: '',
    rules: '',
    numberOfTeams: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTournament((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTournament(tournament);
    setTournament({
      name: '',
      image: '',
      gender: '',
      rules: '',
      numberOfTeams: '',
    });
  };

  return (
    <Container component={Paper} sx={{ padding: 4, marginTop: 4 }}>
      <Typography variant="h6">Create Tournament</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="name"
              label="Tournament Name"
              fullWidth
              value={tournament.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="image"
              label="Image URL"
              fullWidth
              value={tournament.image}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="gender"
              label="Gender"
              fullWidth
              value={tournament.gender}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="rules"
              label="Rules"
              fullWidth
              value={tournament.rules}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="numberOfTeams"
              label="Number of Teams"
              type="number"
              fullWidth
              value={tournament.numberOfTeams}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Create Tournament
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
