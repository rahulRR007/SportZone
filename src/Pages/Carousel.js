import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, useTheme } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import b from '../images/boxing-tournament-event-landscape-poster-youtube-thumbnail_490702-1035.jpg';
import a from '../images/image-1200x300 (1).jpg';
import c from '../images/image-1200x300 (2).jpg';

const carouselItems = [
  {
    image: b,
    text: 'Check out our Amazing Offer 1!',
  },
  {
    image: c,
    text: 'Don’t miss out on Amazing Offer 2!',
  },
  {
    image: a,
    text: 'Grab Amazing Offer 3 now!',
  },
  // Add more items here
];

const Carousel = () => {
  const theme = useTheme();
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <Box sx={{ width: '100%', height: '8cm', overflow: 'hidden' }}>
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              position: 'relative',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              src={item.image}
              alt={`Carousel ${index}`}
              sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <Typography
              variant="h4"
              component="div"
              sx={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.background.paper,
                p: 1,
                borderRadius: '4px',
              }}
            >
              {item.text}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;