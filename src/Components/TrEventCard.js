// src/Components/EventCard.js

import React from 'react';
import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';

export default function EventCard({ event, onDelete }) {
  console.log(event);
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {event.name}
        </Typography>
        <Typography color="text.secondary">
          sport:{event.sport}
        </Typography>
        <Typography variant="body2">
          date:{event.dates}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onDelete}>Delete</Button>
      </CardActions>
    </Card>
  );
}
