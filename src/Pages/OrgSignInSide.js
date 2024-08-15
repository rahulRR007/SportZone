import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios

// Define a custom theme
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
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#64b5f6',
          },
        },
      },
    },
  },
});

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SignInSide() {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    try {
      const response = await axios.post('http://localhost:8080/api/orglogin', {
        email,
        password,
      });

      // Handle success response
      if (response.status === 200) {
        // Set a random success message
        const messages = [
          'Welcome to SportsZone! Get ready for an amazing sports experience.',
          'Sign in successful! Your adventure in SportsZone begins now.',
          'You\'re in! Explore the best sports content with SportsZone.',
          'Welcome back! Enjoy your time with SportsZone.',
        ];
        setMessage(messages[Math.floor(Math.random() * messages.length)]);
        setOpen(true);

        // Save email to localStorage
        localStorage.setItem('userEmail', email);

        // Navigate to the profile page after a successful sign-in
        setTimeout(() => {
          navigate('/Orgainzerdash'); // Redirect to the profile page
        }, 2000); // Wait for 2 seconds to show the Snackbar message before navigating
      }
    } catch (error) {
      // Handle error response
      setMessage('Sign in failed. Please check your credentials and try again.');
      setOpen(true);
    }
  };

  const handleSignUpClick = () => {
    navigate('/orgsignup');
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundColor: theme.palette.background.default,
            backgroundSize: 'cover',
            backgroundPosition: 'left',
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 2,
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: 400,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: theme.palette.background.paper,
              borderRadius: '16px',
              padding: 3,
              boxShadow: 3,
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Typography component="h2" variant="h6" sx={{ mt: 2, color: '#b0bec5' }}>
              Access your SportsZone account and elevate your game!
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                InputLabelProps={{ style: { color: '#b0bec5' } }}
                InputProps={{ style: { color: '#fff' } }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                InputLabelProps={{ style: { color: '#b0bec5' } }}
                InputProps={{ style: { color: '#fff' } }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                sx={{ color: '#b0bec5' }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" sx={{ color: '#90caf9' }}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Box
                    component="div"
                    onClick={handleSignUpClick}
                    sx={{
                      color: '#90caf9',
                      cursor: 'pointer',
                      textDecoration: 'underline',
                      display: 'inline-block',
                    }}
                  >
                    {"Don't have an account? Sign Up"}
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}
