import {
  AppBar,
  Box,
  Container,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import LinkLogo from 'components/shared/LinkLogo';
import React, { useState, useEffect } from 'react';
import { theme } from 'theme';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
// useEffect(() => {}, []);

const Footer = ({ ...props }) => {
  return (
    <>
      <Container sx={{ maxWidth: '100% !important' }}>
        <Stack
          sx={{
            backgroundColor: theme.palette.primary.main,
            height: {
              md: '140px',
              xs: 'auto',
            },
          }}
          direction={{ xs: 'column', md: 'row' }}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Box
            sx={{
              mt: {
                md: '0',
                xs: '10px',
              },
              ml: {
                md: '0',
                xs: '55px',
              },
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                mr: {
                  md: '92px',
                  xs: '70px',
                },
                ml: {
                  xs: '20px',
                  md: '40px',
                },
                color: theme.palette.common.white,
                display: {
                  xs: 'flex',
                  md: 'flex',
                },
                cursor: 'pointer',
              }}
              width={{
                sm: 'calc(100vw / 3)',
              }}
            >
              <LinkLogo
                width={'auto'}
                height={'60px'}
                imageURL={'/images/logo/logo1.jpg'}
              />
            </Typography>
          </Box>

          <Stack
            sx={{ mr: '40px' }}
            alignItems={'center'}
            direction={'row'}
            spacing={12}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: '16px',
                  md: '32px',
                },
              }}
              color={theme.palette.common.white}
              variant="h4"
            >
              CityHouzing© 2021
            </Typography>
            <FacebookIcon
              sx={{
                marginLeft: '0 !important',
                height: {
                  md: '60px',
                  xs: '24px',
                },
                width: {
                  md: '50px',
                  xs: '30px',
                },
                color: theme.palette.common.white,
              }}
            ></FacebookIcon>
            <YouTubeIcon
              sx={{
                marginLeft: '0 !important',
                height: {
                  md: '60px',
                  xs: '24px',
                },
                width: {
                  md: '50px',
                  xs: '30px',
                },
                color: theme.palette.common.white,
              }}
            ></YouTubeIcon>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};
export default Footer;
