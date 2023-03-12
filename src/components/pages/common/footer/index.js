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
            height: '140px',
          }}
          direction={{ xs: 'column', md: 'row' }}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                mr: '92px',
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

          <Stack sx={{ mr: '40px' }} direction={'row'} spacing={12}>
            <Typography color={theme.palette.common.white} variant="h4">
              CityHouzing© 2021
            </Typography>
            <FacebookIcon
              sx={{
                marginLeft: '0 !important',
                height: '60px',
                width: '50px',
                color: theme.palette.common.white,
              }}
            ></FacebookIcon>
            <YouTubeIcon
              sx={{
                marginLeft: '0 !important',
                height: '60px',
                width: '50px',
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
