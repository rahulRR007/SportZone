// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', // Use 'light' mode for a white background
    primary: {
      main: '#000', // Black primary color
    },
    secondary: {
      main: '#fff', // White secondary color
    },
    background: {
      default: '#fff', // White background
      paper: '#fff', // White paper background
    },
    text: {
      primary: '#000', // Black text color
      secondary: '#333', // Dark grey text color
    },
  },
  typography: {
    h4: {
      fontSize: '2rem',
      fontWeight: 700,
      color: '#000',
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 400,
      color: '#000',
    },
    body1: {
      fontSize: '1rem',
      color: '#000',
    },
    body2: {
      fontSize: '0.875rem',
      color: '#333',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          color: '#000',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#fff',
          backgroundColor: '#000',
          '&:hover': {
            backgroundColor: '#333',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          color: '#000',
          borderRadius: '8px',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'scale(1.03)',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#fff',
            color: '#000',
            borderRadius: '20px',
          },
          '& .MuiInputLabel-root': {
            color: '#000',
          },
          '& .MuiInputAdornment-root .MuiIconButton-root': {
            color: '#000',
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#fff',
          color: '#000',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#000',
          '&:hover': {
            color: '#333',
          },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          backgroundColor: '#e0e0e0',
        },
        bar: {
          backgroundColor: '#000',
        },
      },
    },
  },
});

export default theme;
