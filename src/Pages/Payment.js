import React, { useState } from 'react';
import { Container, Grid, TextField, Button, Typography, Box, Snackbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: '2rem',
  backgroundColor: '#f5f5f5',
}));

const headingStyles = {
  color: 'black',
  fontWeight: 'bold'
};

const PaymentPage = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate(); // Initialize navigate function

  const handlePaymentSubmit = () => {
    // Handle payment submission
    setPaymentSuccess(true);
    setOpenSnackbar(true);
    // Redirect to /tournament after payment is successful
    setTimeout(() => {
      navigate('/tournament');
    }, 2000); // Optional delay for user to see the snackbar message
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <StyledContainer maxWidth="md">
      <Typography variant="h4" gutterBottom sx={headingStyles}>
        Payment Page
      </Typography>
      
      <Box sx={{ marginBottom: '2rem' }}>
        <Typography variant="h6" gutterBottom sx={headingStyles}>
          Price Details
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '1rem', fontWeight: 'bold', color: 'black' }}>
          Tournament Registration Fee: $100
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '1rem', fontWeight: 'bold', color: 'black' }}>
          Additional Fees: $20
        </Typography>
        <Typography variant="h6" gutterBottom sx={headingStyles}>
          Total Amount: $120
        </Typography>
      </Box>

      <Box sx={{ marginBottom: '2rem' }}>
        <Typography variant="h6" gutterBottom sx={headingStyles}>
          Payment Details
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Card Number"
              variant="outlined"
              fullWidth
              required
              autoComplete="off"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Expiration Date"
              variant="outlined"
              fullWidth
              required
              autoComplete="off"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="CVV"
              variant="outlined"
              fullWidth
              required
              autoComplete="off"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Cardholder Name"
              variant="outlined"
              fullWidth
              required
              autoComplete="off"
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: '1rem' }}
          onClick={handlePaymentSubmit}
        >
          Submit Payment
        </Button>
      </Box>

      {/* Snackbar for payment success */}
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success">
          Payment successful! Thank you for your registration.
        </Alert>
      </Snackbar>
    </StyledContainer>
  );
};

export default PaymentPage;
