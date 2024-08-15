import React from 'react';
import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';

const AboutUs = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/Orgainzerdash');
  };

  return (
    <>
      <div
        style={{
          backgroundColor: '#ffffff', // White background
          color: '#000000', // Black text
          padding: '2rem',
          minHeight: '60vh', // Set a fixed height for the content section
          boxSizing: 'border-box', // Include padding in the height calculation
          overflowX: 'hidden', // Ensure content fits horizontally
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography variant="h2" gutterBottom>About Us</Typography>
        <Typography variant="body1" paragraph>
          At SportsZone, we are passionate about sports and dedicated to creating a thriving community for athletes and fans alike. SportsZone is a dynamic platform designed to revolutionize the way sports tournaments are organized and experienced. By connecting passionate athletes, dedicated organizers, and enthusiastic fans, we aim to create a thriving sports community. Our platform offers a comprehensive suite of tools to streamline tournament management, from registration and scheduling to live scoring and results. Whether you're an avid player looking for your next challenge or an organizer seeking to create unforgettable events, SportsZone is your ultimate sports companion.
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to empower athletes, connect fans, and foster a love for sports. We believe in fair play, inclusivity, and excellence. Through our platform, we aim to build a thriving sports community where everyone feels welcome and inspired.
        </Typography>
        <Typography variant="body1" paragraph>
          Our team is composed of experienced sports enthusiasts who are committed to providing an exceptional platform for sports management and engagement. We are proud to support local sports by organizing community tournaments, sponsoring local teams, and promoting grassroots sports development.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleBackClick}
          style={{ marginTop: '2rem' }}
        >
          Back
        </Button>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;