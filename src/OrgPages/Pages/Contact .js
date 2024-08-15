import React from 'react';
import { Typography, TextField, Button } from '@mui/material';
import Footer from '../Components/Footer';

const ContactUs = () => {
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
        <Typography variant="h2" gutterBottom>Contact Us</Typography>
        <Typography variant="body1" paragraph>
          We’d love to hear from you! Whether you have questions, feedback, or need support, feel free to reach out to us using the form below.
        </Typography>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            maxWidth: '600px'
          }}
        >
          <TextField
            label="Name"
            variant="outlined"
            margin="normal"
            fullWidth
            InputLabelProps={{ style: { color: '#000000' } }} // Black label text
            InputProps={{ style: { color: '#000000' } }} // Black input text
          />
          <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            fullWidth
            InputLabelProps={{ style: { color: '#000000' } }} // Black label text
            InputProps={{ style: { color: '#000000' } }} // Black input text
          />
          <TextField
            label="Message"
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
            fullWidth
            InputLabelProps={{ style: { color: '#000000' } }} // Black label text
            InputProps={{ style: { color: '#000000' } }} // Black input text
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: '1rem' }}
          >
            Send
          </Button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;