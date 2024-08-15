import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, Card, CardContent, CardMedia, TextField, Button, FormControl, InputLabel, Input, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const TournamentRegistration = () => {
  const { tour_id } = useParams();
  const navigate = useNavigate();
  const [tournament, setTournament] = useState(null);
  const [loading, setLoading] = useState(true);
  const [partId, setPartId] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const partEmail = localStorage.getItem('userEmail');
  const [idimage, setImage] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState(partEmail || '');

  useEffect(() => {
    const fetchTournamentDetails = async () => {
      if (!tour_id) {
        console.error('Tournament ID is not available');
        setLoading(false);
        return;
      }
      try {
        const response = await axios.get(`http://localhost:8080/api/tournaments/${tour_id}`);
        setTournament(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tournament details:', error);
        setLoading(false);
      }
    };

    fetchTournamentDetails();
  }, [tour_id]);

  useEffect(() => {
    const fetchPartId = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/userpart/${partEmail}`);
        setPartId(response.data.id);
      } catch (error) {
        console.error('Error fetching part_id:', error);
      }
    };

    if (partEmail) {
      fetchPartId();
    }
  }, [partEmail]);

  const handleBack = () => {
    navigate('/tournament');
  };

  const handlePayNow = () => {
    navigate('/payment');
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

  
    const formData = new FormData();
    formData.append('part_id', partId);
    formData.append('tour_id', tour_id);
    formData.append('org_id', tournament.orgId);
    formData.append('part_name', name);
    formData.append('part_email', email);
    formData.append('id-proof', idimage);

    try {
      const response = await axios.post('http://localhost:8080/api/registration/save', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log('Registration successful:', response.data);
      handlePayNow();
    } catch (error) {
      console.error('Error registering for tournament:', error);
      setErrorMessage('Registration failed. Please try again.');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!tournament) {
    return <div>Tournament not found</div>;
  }

  return (
    <Container sx={{ mt: 2 }}>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleBack}
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 2 }}
      >
        Back
      </Button>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={`data:image/png;base64,${tournament.image}`}
          alt={tournament.name}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>{tournament.name}</Typography>
          <Typography variant="body1" color="textSecondary">Sport: {tournament.sport}</Typography>
          <Typography variant="body1" color="textSecondary">Location: {tournament.location}</Typography>
          <Typography variant="body1" color="textSecondary">Organizer: {tournament.organizer}</Typography>
          <Typography variant="body1" color="textSecondary">Dates: {tournament.dates}</Typography>
          <Typography variant="body1" color="textSecondary">Prize Money: {tournament.prizeMoney}</Typography>
          <Typography variant="body1" color="textSecondary">Rules: {tournament.rules}</Typography>
          <Typography variant="body1" color="textSecondary">Eligibility: {tournament.eligibility}</Typography>
          <Typography variant="body1" color="textSecondary">Gender: {tournament.gender}</Typography>
          <Typography variant="body1" color="textSecondary">Team Size: {tournament.teamSize}</Typography>
        </CardContent>
      </Card>
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Register for {tournament.name}
      </Typography>
      {errorMessage && (
        <Typography variant="body2" color="error" sx={{ mb: 2 }}>
          {errorMessage}
        </Typography>
      )}
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <TextField
            name="email"
            label="Email ID"
            type="email"
            variant="outlined"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel htmlFor="image-upload" sx={{ fontWeight: 'bold', color: 'black' }}>ID Proof</InputLabel>
              <Input
                id="id-proof"
                type="file"
                onChange={handleImageChange}
                sx={{ '& .MuiInputBase-root': { fontWeight: 'bold', color: 'black' } }}
              />
            </FormControl>
            {idimage && <img src={URL.createObjectURL(idimage)} alt="Preview" style={{ marginTop: 10, maxWidth: '100%', maxHeight: 200 }} />}
          </Grid>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          sx={{ mr: 2 }}
          type="submit"
        >
          Pay Now
        </Button>
      </form>
    </Container>
  );
};

export default TournamentRegistration;
