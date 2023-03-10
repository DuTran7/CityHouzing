import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Button, Box, Typography, Divider } from '@mui/material';
import { theme } from 'theme';
import { useStyles } from './styles';

function Achievement() {
  const classes = useStyles();
  const [currentIndexCarousel, setCurrentIndexCarousel] = useState(1);
  const [first, setfirst] = useState([
    {
      img: ['/home/news.png', '/home/news-2nd.png'],
    },
    {
      img: ['/home/news-2nd.png', '/home/news.png'],
    },
  ]);

  const handleClick = (operator) => {
    console.log('click', currentIndexCarousel);
    switch (operator) {
      case 'next':
        if (currentIndexCarousel >= first.length - 1) {
          console.log('>=');
          setCurrentIndexCarousel(0);
        } else {
          console.log('else');
          setCurrentIndexCarousel(currentIndexCarousel + 1);
        }
        break;

      default:
        if (currentIndexCarousel <= 0) {
          console.log('>=');
          setCurrentIndexCarousel(first.length - 1);
        } else {
          console.log('else');
          setCurrentIndexCarousel(currentIndexCarousel - 1);
        }
    }
    console.log('click', currentIndexCarousel);
  };

  return (
    <Box
      sx={{
        padding: '2.25rem 0 0 0',
        backgroundImage: 'url(home/achive.png)',
        position: 'relative',
        top: 0,
        marginBottom: '50px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: '0 3rem',
        }}
      >
        <Box>
          <Typography
            sx={{ textTransform: 'uppercase' }}
            // style={{ color: theme.palette.common.black }}
            variant="h3"
          >
            Thành tựu
          </Typography>
          <Divider
            sx={{
              width: '85%',
              borderBottomWidth: 'medium',
              // height: '0.375rem',
              marginBottom: '0.3rem',
              borderColor: theme.palette.text.title,
            }}
          />
          <Divider
            sx={{
              width: '65%',
              borderBottomWidth: 'medium',
              borderColor: theme.palette.primary.secondary,
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 0,
          }}
        >
          <Button onClick={() => handleClick('prev')}>
            <img src="/home/previous-button.png" />
          </Button>
          <Button onClick={() => handleClick('next')}>
            <img src="/home/next-button.png" />
          </Button>
        </Box>
      </Box>
      <Carousel
        className={classes.carouselBox}
        autoPlay={false}
        index={currentIndexCarousel}
        animation="fade"
        indicators={false}
        next={() => {
          console.log('next');
        }}
        prev={() => {
          console.log('prev');
        }}
      >
        {first.map((item, i) => (
          <Box className="box-carousel" sx={{}} key={i}>
            <Box sx={{ textAlign: 'center' }}>
              <img
                style={{ marginRight: '5rem' }}
                alt="test"
                src={item.img[0]}
              />
              <img alt="test" src={item.img[1]} />
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}

export default Achievement;
