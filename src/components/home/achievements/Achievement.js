import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Button, Box, Typography, Divider } from '@mui/material';
import { theme } from 'theme';
import { useStyles } from './styles';
import styles from './achivement.module.css';

function Achievement() {
  const classes = useStyles();
  const [currentIndexCarousel, setCurrentIndexCarousel] = useState(1);
  const [windowWidth, setWindowWidth] = useState(null);
  const [listImages, setListImage] = useState([
    ['/home/news.png'],
    ['/home/news-2nd.png'],
    ['/home/news.png'],
    ['/home/news-2nd.png'],
  ]);

  const handleClick = (operator) => {
    switch (operator) {
      case 'next':
        if (currentIndexCarousel >= listImages.length - 1) {
          setCurrentIndexCarousel(0);
        } else {
          setCurrentIndexCarousel(currentIndexCarousel + 1);
        }
        break;

      default:
        if (currentIndexCarousel <= 0) {
          setCurrentIndexCarousel(listImages.length - 1);
        } else {
          setCurrentIndexCarousel(currentIndexCarousel - 1);
        }
    }
  };

  function handleWindowSizeChange() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);
  useEffect(() => {
    const newListImages = [];
    if (windowWidth < 1339) {
      listImages.flat(Infinity).forEach((image) => {
        newListImages.push([image]);
      });
    } else {
      listImages.flat(Infinity).forEach((image, index) => {
        if (index % 2) {
          newListImages.push([listImages[index - 1], image]);
        }
      });
    }
    setListImage(newListImages);
  }, [windowWidth]);

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
      <Box className={styles['header-carousel']}>
        <Box className={styles['header-carousel-left']}>
          <Typography
            sx={{
              textTransform: 'uppercase',
              fontSize: '2.625rem',
              fontWeight: 600,
              lineHeight: '3.188rem',
              marginBottom: '0.75rem',
            }}
          >
            Thành tựu
          </Typography>
          <Divider
            sx={{
              width: '81%',
              borderBottomWidth: 'medium',
              // height: '0.375rem',
              marginBottom: '0.3rem',
              borderColor: theme.palette.text.title,
            }}
          />
          <Divider
            sx={{
              width: '44%',
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
        sx={{
          overflow: 'visible',
          top: '3rem',
        }}
        autoPlay={false}
        index={currentIndexCarousel}
        animation="fade"
        indicators={false}
      >
        {listImages.map((images, i) => (
          <Box className="box-carousel" sx={{}} key={i}>
            <Box sx={{ textAlign: 'center' }}>
              {images.map((image) => (
                <img
                  key={Math.ceil(Math.random() * 99999999999)}
                  style={{ marginRight: '5rem', width: '520px' }}
                  alt="Achivement"
                  src={image}
                  className={styles['achivement-image']}
                />
              ))}
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}

export default Achievement;
