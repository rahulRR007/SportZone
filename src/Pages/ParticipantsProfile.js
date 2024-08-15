import React, { useEffect, useState } from 'react';
import { Typography, Grid, Button } from '@mui/material';
import axios from 'axios';
import '../OrgPages/css/OrgProfilePage.css';
import { useNavigate } from 'react-router-dom';

export default function OrganizerProfile() {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const email = localStorage.getItem('userEmail'); // Assuming you store email in localStorage
  const navigate = useNavigate(); // Initialize useNavigate

  const handleBackClick = () => {
    navigate('/tournament');
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get( `http://localhost:8080/api/userpart/${email}`);
        if (response.status === 200) {
          const profileData = response.data;
          setUserProfile(profileData);
        }
      } catch (error) {
        console.error('There was an error fetching the user data!', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [email]);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <Typography component="h1" variant="h5" gutterBottom>
          Profile
        </Typography>
      </div>
      <div className="profile-info">
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6}>
            <div className="info-item">
              <span>First Name: {userProfile?.firstName}</span>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="info-item">
              <span>Last Name: {userProfile?.lastName}</span>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="info-item">
              <span>Email: {userProfile?.email}</span>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="info-item">
              <span>Date of Birth: {userProfile?.dateOfBirth}</span>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="info-item">
              <span>Gender: {userProfile?.gender}</span>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="info-item">
              <span>Contact Number: {userProfile?.contactNumber}</span>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="info-item">
              <span>Address: {userProfile?.address}</span>
            </div>
          </Grid>
        </Grid>
        <div className="back-button-container">
          <Button
            variant="contained"
            onClick={handleBackClick}
            className="back-button"
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
}