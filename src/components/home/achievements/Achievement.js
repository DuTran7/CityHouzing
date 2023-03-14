import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Button, Box, Typography, Divider } from '@mui/material';
import { BrowserView, MobileView } from 'react-device-detect';
import { theme } from 'theme';
import styles from './achivement.module.css';
function Achievement() {
  const [currentIndexCarousel, setCurrentIndexCarousel] = useState(1);
  const [windowWidth, setWindowWidth] = useState(null);
  const [listImages, setListImage] = useState([
    ['/home/news.png', '/home/news-2nd.png'],
    ['/home/news.png', '/home/news-2nd.png'],
    ['/home/news.png', '/home/news-2nd.png'],
    ['/home/news.png', '/home/news-2nd.png'],
    ['/home/news.png', '/home/news-2nd.png'],
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

  const handleWindowSizeChange = () => {
    setWindowWidth(window.innerWidth || 0);
  };

  const ButtonPrev = () => {
    return (
      <Button
        onClick={() => handleClick('prev')}
        className={styles['button-prev']}
      >
        <img
          src="/home/previous-button.png"
          style={{ borderRadius: '0.313rem' }}
        />
      </Button>
    );
  };
  const ButtonNext = () => {
    return (
      <Button
        onClick={() => handleClick('next')}
        className={styles['button-next']}
      >
        <img src="/home/next-button.png" style={{ borderRadius: '0.313rem' }} />
      </Button>
    );
  };

  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);
  useEffect(() => {
    if (windowWidth < 1339) {
      const newListImages = [];
      listImages.flat(Infinity).forEach((image) => {
        newListImages.push([image]);
      });
      if (newListImages.length > 0) setListImage(newListImages);
    } else {
      const newListImages = [];
      listImages.flat(Infinity).forEach((image, index) => {
        if (index % 2 !== 0 && index !== 0) {
          if (listImages.flat(Infinity).length % 2 === 0)
            newListImages.push([listImages.flat(Infinity)[index - 1], image]);
          else if (
            listImages.flat(Infinity).length % 2 !== 0 &&
            index === listImages.flat(Infinity).length - 1
          ) {
            newListImages.push([listImages.flat(Infinity)[index - 1]]);
          }
        }
        if (newListImages.length > 0) setListImage(newListImages);
      });
    }
  }, [windowWidth]);

  return (
    <Box className={styles['container']}>
      <Box className={styles['header-carousel']}>
        <Box className={styles['header-carousel-left']}>
          <Typography
            sx={{
              textTransform: 'uppercase',
              fontSize: '2.625rem',
              fontWeight: 600,
              lineHeight: '3.188rem',
              marginBottom: '0.75rem',
              textAlign: 'center',
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
        {(windowWidth || 0) >= 768 && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 0,
            }}
          >
            <ButtonPrev />
            <ButtonNext />
          </Box>
        )}
      </Box>
      <Box className={styles['carousel-box']}>
        {(windowWidth || 0) < 768 && <ButtonPrev />}
        <Carousel
          className={styles['carousel-content']}
          autoPlay={false}
          index={currentIndexCarousel}
          animation="fade"
          indicators={false}
          navButtonsAlwaysInvisible
        >
          {listImages.map((images, i) => (
            <Box className={styles['box-carousel']} sx={{}} key={i}>
              <Box sx={{ textAlign: 'center' }}>
                {images.map((image) => (
                  <img
                    key={Math.ceil(Math.random() * 99999999999)}
                    style={{
                      marginRight: '5rem',
                      width: '520px',
                      borderRadius: '0.313rem',
                    }}
                    alt="Achivement"
                    src={image}
                    className={styles['achivement-image']}
                  />
                ))}
              </Box>
            </Box>
          ))}
        </Carousel>
        {(windowWidth || 0) < 768 && <ButtonNext />}
      </Box>
    </Box>
  );
}

export default Achievement;
