// src/pages/TournamentPage.js

import React, { useState } from 'react';
import TournamentForm from './TournamentForm';
import TournamentCard from '../Components/TournamentCard';
import { Container, Grid, Typography } from '@mui/material';
import NavBar from '../Components/OrganizerPanelNavBar';

export default function TournamentPage() {
  const [tournaments, setTournaments] = useState([]);

  const handleAddTournament = (tournament) => {
    setTournaments((prev) => [...prev, { ...tournament, id: prev.length + 1 }]);
  };

  return (
    <div>
      <NavBar />
      <Container>
        <TournamentForm onAddTournament={handleAddTournament} />
        <Typography variant="h6" sx={{ marginTop: 4 }}>
          Ongoing Tournaments
        </Typography>
        <Grid container spacing={2}>
          {tournaments.map((tournament) => (
            <TournamentCard key={tournament.id} tournament={tournament} />
          ))}
        </Grid>
      </Container>
    </div>
  );
}
