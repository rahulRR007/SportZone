import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import '../OrgPages/css/OrgProfilePage.css';

export default function OrganizerProfile() {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const email = localStorage.getItem('userEmail');
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/Orgainzerdash');
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get( `http://localhost:8080/api/user/${email}`);
        if (response.status === 200) {
          setUserProfile(response.data);
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
    return <h1>Loading...</h1>;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src="https://via.placeholder.com/80" alt="Profile" />
        <h1>{userProfile?.firstName} {userProfile?.lastName}</h1>
      </div>
      <div className="profile-info">
        <div className="info-item">
          <i className="fas fa-envelope"></i>
          <span className="info-label">Email:</span>
          <span>{userProfile?.email}</span>
        </div>
        <div className="info-item">
          <i className="fas fa-birthday-cake"></i>
          <span className="info-label">Date of Birth:</span>
          <span>{userProfile?.dateOfBirth}</span>
        </div>
        <div className="info-item">
          <i className="fas fa-phone"></i>
          <span className="info-label">Contact Number:</span>
          <span>{userProfile?.contactNumber}</span>
        </div>
        <div className="info-item">
          <i className="fas fa-map-marker-alt"></i>
          <span className="info-label">Address:</span>
          <span>{userProfile?.address}</span>
        </div>
      </div>
      <div className="back-button-container">
        <Button
          variant="contained"
          color="primary"
          onClick={handleBackClick}
          className="back-button"
        >
          Back
        </Button>
      </div>
    </div>
  );
}