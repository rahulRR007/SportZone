import React from 'react';
import { Card, CardContent, Typography, Box, Button, Link, LinearProgress, Skeleton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  if (!event) {
    return (
      <Card sx={{ height: '100%' }}>
        <CardContent>
          <Skeleton variant="rectangular" height={140} />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
        </CardContent>
      </Card>
    );
  }

  const { name, organizer, location, mapLink, sport, gender, teamSize, currentTeams, date, prize, image, tour_id } = event;
  const currentTeamsCount = parseInt(currentTeams.split('/')[0]);
  const totalTeamsCount = parseInt(currentTeams.split('/')[1]);

  const handleRegister = () => {
    navigate(`/register/${tour_id}`);
  };

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Box
          component="img"
          src={image}
          alt={name}
          sx={{ height: 140, width: '100%', mb: 2, objectFit: 'cover' }}
        />
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body1" component="div">
          Organizer: {organizer}
        </Typography>
        <Typography variant="body1" component="div">
          <Link href={mapLink} target="_blank" color="inherit">
            {location}
          </Link>
        </Typography>
        <Typography variant="body1" component="div">
          Sport: {sport}
        </Typography>
        <Typography variant="body1" component="div">
          Gender: {gender}
        </Typography>
        <Typography variant="body1" component="div">
          Team Size: {teamSize}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Current Teams: {currentTeams}
          <LinearProgress
            variant="determinate"
            value={(currentTeamsCount / totalTeamsCount) * 100}
            sx={{ mt: 1 }}
          />
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Date: {date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Prize: {prize}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          fullWidth
          onClick={handleRegister}
        >
          Register Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default EventCard;
