// src/components/TournamentCard.js

import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Paper } from '@mui/material';

export default function TournamentCard({ tournament }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card component={Paper} elevation={3} sx={{ height: '100%' }}>
        <CardMedia
          component="img"
          height="140"
          image={tournament.image}
          alt={tournament.name}
        />
        <CardContent>
          <Typography variant="h6">{tournament.name}</Typography>
          <Typography variant="body2" color="textSecondary">
            Gender: {tournament.gender}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Rules: {tournament.rules}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Number of Teams: {tournament.numberOfTeams}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
