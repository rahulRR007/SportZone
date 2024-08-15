import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MuiAlert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#000',
      paper: '#121212',
    },
    text: {
      primary: '#fff',
      secondary: '#b0bec5',
    },
  },
  typography: {
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      color: '#fff',
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 400,
      color: '#fff',
    },
    body1: {
      fontSize: '1rem',
      color: '#b0bec5',
    },
    body2: {
      fontSize: '0.875rem',
      color: '#b0bec5',
    },
  },
});

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SignUp() {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const navigate = useNavigate();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  
    const user = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
      dateOfBirth: data.get('dateOfBirth'),
      gender: data.get('gender'),
      contactNumber: data.get('contactNumber'),
      address: data.get('address'),
    };
  
    try {
      const response = await axios.post('http://localhost:8080/api/signup', user);
      if (response.status === 200) {
        const userData = {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          dateOfBirth: user.dateOfBirth,
          gender: user.gender,
          contactNumber: user.contactNumber,
          address: user.address,
        };
  
        // Save email and user data to localStorage
        localStorage.setItem('userEmail', user.email);
        localStorage.setItem('userProfile', JSON.stringify(userData));
  
        const messages = [
          'Welcome to SportsZone! Your adventure begins now.',
          'You\'re all set! Get ready for an amazing experience.',
          'Signup successful! Let the games begin.',
          'Great to have you! Your journey starts here.',
        ];
        setMessage(messages[Math.floor(Math.random() * messages.length)]);
        setOpen(true);
  
        // Navigate to the Tournaments page after a successful sign-up
        setTimeout(() => {
          navigate('/tournament'); // Redirect to the Tournaments page
        }, 2000); // Wait for 2 seconds to show the Snackbar message before navigating
      }
    } catch (error) {
      console.error(error);
      setMessage('Signup failed! Please try again.');
      setOpen(true);
    }
  };
  

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: '#fff',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Typography component="h2" variant="h6" sx={{ mt: 2, color: '#b0bec5' }}>
            Join the SportsZone community and elevate your game!
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  InputLabelProps={{ style: { color: '#b0bec5' } }}
                  InputProps={{ style: { color: '#fff' } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  InputLabelProps={{ style: { color: '#b0bec5' } }}
                  InputProps={{ style: { color: '#fff' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  InputLabelProps={{ style: { color: '#b0bec5' } }}
                  InputProps={{ style: { color: '#fff' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  InputLabelProps={{ style: { color: '#b0bec5' } }}
                  InputProps={{ style: { color: '#fff' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="dateOfBirth"
                  label="Date of Birth"
                  name="dateOfBirth"
                  type="date"
                  InputLabelProps={{ shrink: true, style: { color: '#b0bec5' } }}
                  InputProps={{ style: { color: '#fff' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="gender"
                  label="Gender"
                  name="gender"
                  select
                  SelectProps={{
                    native: true,
                  }}
                  InputLabelProps={{ style: { color: '#b0bec5' } }}
                  InputProps={{ style: { color: '#fff' } }}
                >
                  <option value="" />
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="contactNumber"
                  label="Contact Number"
                  name="contactNumber"
                  autoComplete="tel"
                  InputLabelProps={{ style: { color: '#b0bec5' } }}
                  InputProps={{ style: { color: '#fff' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  autoComplete="street-address"
                  InputLabelProps={{ style: { color: '#b0bec5' } }}
                  InputProps={{ style: { color: '#fff' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I agree to receive communications related to SportsZone."
                  sx={{ color: '#b0bec5' }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: '#90caf9',
                color: '#000',
                '&:hover': {
                  backgroundColor: '#64b5f6',
                },
              }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2" sx={{ color: '#90caf9' }}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            {message}
          </Alert>
        </Snackbar>
      </Container>
    </ThemeProvider>
  );
}
