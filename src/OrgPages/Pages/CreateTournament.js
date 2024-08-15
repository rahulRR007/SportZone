import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, InputLabel, Input, FormControl, MenuItem, Select } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const CreateTournament = () => {
  const [name, setName] = useState('');
  const [sport, setSport] = useState('');
  const [organizer, setOrganizer] = useState('');
  const [location, setLocation] = useState('');
  const [dates, setDates] = useState('');
  const [registrationFee, setRegistrationFee] = useState('');
  const [prizeMoney, setPrizeMoney] = useState('');
  const [rules, setRules] = useState('');
  const [eligibility, setEligibility] = useState('');
  const [gender, setGender] = useState('');
  const [teamSize, setTeamSize] = useState('');
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Fetch org_id based on user email
      const email = localStorage.getItem('userEmail');
      if (!email) {
        toast.error('User email is missing.');
        return;
      }

      const response = await axios.get(`http://localhost:8080/api/user/${email}`);
      const profileData = response.data;
      const orgId = profileData.id;

      if (!orgId || isNaN(orgId)) {
        toast.error('Organization ID is missing or invalid.');
        return;
      }

      const orgIdNumber = Number(orgId);

      const formData = new FormData();
      formData.append('name', name);
      formData.append('sport', sport);
      formData.append('organizer', organizer);
      formData.append('location', location);
      formData.append('dates', dates);
      formData.append('registrationFee', registrationFee);
      formData.append('prizeMoney', prizeMoney);
      formData.append('rules', rules);
      formData.append('eligibility', eligibility);
      formData.append('gender', gender);
      formData.append('teamSize', teamSize);
      formData.append('image', image);
      formData.append('org_id', orgIdNumber);

      await axios.post('http://localhost:8080/api/tournaments/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success('Tournament created successfully!', {
        onClose: () => navigate('/Orgainzerdash'),
      });
    } catch (error) {
      toast.error('Failed to create tournament. Please try again.');
    }
  };

  return (
    <Container sx={{ backgroundColor: 'white', padding: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'black' }}>
        Create Tournament
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Tournament Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              sx={{ '& .MuiInputLabel-root': { fontWeight: 'bold', color: 'black' }, '& .MuiInputBase-root': { fontWeight: 'bold', color: 'black' } }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Sport"
              variant="outlined"
              fullWidth
              value={sport}
              onChange={(e) => setSport(e.target.value)}
              required
              sx={{ '& .MuiInputLabel-root': { fontWeight: 'bold', color: 'black' }, '& .MuiInputBase-root': { fontWeight: 'bold', color: 'black' } }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Organizer Name"
              variant="outlined"
              fullWidth
              value={organizer}
              onChange={(e) => setOrganizer(e.target.value)}
              required
              sx={{ '& .MuiInputLabel-root': { fontWeight: 'bold', color: 'black' }, '& .MuiInputBase-root': { fontWeight: 'bold', color: 'black' } }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Location"
              variant="outlined"
              fullWidth
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              sx={{ '& .MuiInputLabel-root': { fontWeight: 'bold', color: 'black' }, '& .MuiInputBase-root': { fontWeight: 'bold', color: 'black' } }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Dates"
              variant="outlined"
              fullWidth
              value={dates}
              onChange={(e) => setDates(e.target.value)}
              required
              sx={{ '& .MuiInputLabel-root': { fontWeight: 'bold', color: 'black' }, '& .MuiInputBase-root': { fontWeight: 'bold', color: 'black' } }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Registration Fee"
              variant="outlined"
              fullWidth
              type="number"
              value={registrationFee}
              onChange={(e) => setRegistrationFee(e.target.value)}
              sx={{ '& .MuiInputLabel-root': { fontWeight: 'bold', color: 'black' }, '& .MuiInputBase-root': { fontWeight: 'bold', color: 'black' } }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Prize Money"
              variant="outlined"
              fullWidth
              type="number"
              value={prizeMoney}
              onChange={(e) => setPrizeMoney(e.target.value)}
              sx={{ '& .MuiInputLabel-root': { fontWeight: 'bold', color: 'black' }, '& .MuiInputBase-root': { fontWeight: 'bold', color: 'black' } }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id="gender-label" sx={{ fontWeight: 'bold', color: 'black' }}>Gender</InputLabel>
              <Select
                labelId="gender-label"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                sx={{ '& .MuiInputBase-root': { fontWeight: 'bold', color: 'black' } }}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Mixed">Mixed</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id="team-size-label" sx={{ fontWeight: 'bold', color: 'black' }}>Team Size</InputLabel>
              <Select
                labelId="team-size-label"
                value={teamSize}
                onChange={(e) => setTeamSize(e.target.value)}
                sx={{ '& .MuiInputBase-root': { fontWeight: 'bold', color: 'black' } }}
              >
                {Array.from({ length: 20 }, (_, i) => i + 1).map(size => (
                  <MenuItem key={size} value={size}>{size}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Rules"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              value={rules}
              onChange={(e) => setRules(e.target.value)}
              sx={{ '& .MuiInputLabel-root': { fontWeight: 'bold', color: 'black' }, '& .MuiInputBase-root': { fontWeight: 'bold', color: 'black' } }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Eligibility Criteria"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              value={eligibility}
              onChange={(e) => setEligibility(e.target.value)}
              sx={{ '& .MuiInputLabel-root': { fontWeight: 'bold', color: 'black' }, '& .MuiInputBase-root': { fontWeight: 'bold', color: 'black' } }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel htmlFor="image-upload" sx={{ fontWeight: 'bold', color: 'black' }}>Upload Image</InputLabel>
              <Input
                id="image-upload"
                type="file"
                onChange={handleImageChange}
                sx={{ '& .MuiInputBase-root': { fontWeight: 'bold', color: 'black' } }}
              />
            </FormControl>
            {image && <img src={URL.createObjectURL(image)} alt="Preview" style={{ marginTop: 10, maxWidth: '100%', maxHeight: 200 }} />}
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Create Tournament
            </Button>
          </Grid>
        </Grid>
      </form>
      <ToastContainer />
    </Container>
  );
};

export default CreateTournament;
