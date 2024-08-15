import React from 'react';
import { Container, Typography, Box, Grid, Link, Button } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../css/Footer.css';

const Footer = () => {
  return (
    <Box component="footer" className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} sm={4} className="footer-grid-item">
            <Typography variant="h6" color="Black" gutterBottom>
              SportsZone
            </Typography>
            <Typography variant="body2" gutterBottom>
              India's Leading Sports Venue Booking App
            </Typography>
            <Typography variant="body2">
              Download SportsZone app for exciting offers
            </Typography>
            <Box mt={2} display="flex">
              <Link href="https://play.google.com/store/apps" className="footer-logo">
                <img src="https://www.playspots.in/wp-content/themes/playspots/assets/images/google-play.png" alt="Google Play" />
              </Link>
              <Link href="https://apps.apple.com/in/app" className="footer-logo">
                <img src="https://www.playspots.in/wp-content/themes/playspots/assets/images/app-store.png" alt="App Store" />
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={2} className="footer-grid-item">
            <Typography variant="h6" color="Black" gutterBottom>
              Quick Links
            </Typography>
            <ul>
              <li><Link href="#" color="inherit" underline="none">Home</Link></li>
              <li><Link href="#" color="inherit" underline="none">About Us</Link></li>
             
              <li><Link href="#" color="inherit" underline="none">Contact Us</Link></li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={3} className="footer-grid-item">
            <Typography variant="h6" color="Black" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Titans startup mission campus, green Park, covai, India
            </Typography>
            <Typography variant="body2">
              <Link href="tel:+918086601731" color="inherit" underline="none">
                +91 8086 601 731
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="mailto:support@playspots.in" color="inherit" underline="none">
                support@SportsZone.in
              </Link>
            </Typography>
            <Box mt={2} className="footer-social-icons">
              <Link href="https://www.instagram.com" color="inherit">
                <InstagramIcon />
              </Link>
              <Link href="https://www.facebook.com" color="inherit">
                <FacebookIcon />
              </Link>
              <Link href="https://www.linkedin.com" color="inherit">
                <LinkedInIcon />
              </Link>
            </Box>
          </Grid>

        
        </Grid>
        <Box mt={4} className="footer-bottom">
          <Typography variant="body2">
            Copyright © SportsZone
         
          </Typography>
          <Typography variant="body2">
           
            Company Registered as SportsZone Private Ltd
          </Typography>
        </Box>

        {/* New section from the screenshot */}
        <Box mt={4} className="footer-links">
          <Typography variant="body2">
            <Link href="#" color="inherit" underline="none">Help</Link> | {' '}
            <Link href="#" color="inherit" underline="none">Contact</Link> | {' '}
            <Link href="#" color="inherit" underline="none">Terms & Conditions</Link> | {' '}
            <Link href="#" color="inherit" underline="none">Privacy</Link> | {' '}
            <Link href="#" color="inherit" underline="none">Change cookie preferences</Link> | {' '}
            <Link href="#" color="inherit" underline="none">Cookie policy</Link>
          </Typography>
          <Typography variant="body2" mt={1}>
            Telenet BV/SRL – Liersesteenweg 4, 2800 Mechelen – VAT BE 0473.416.418 – RPR/RPM Antwerp dept. Mechelen – © Telenet 2024
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;