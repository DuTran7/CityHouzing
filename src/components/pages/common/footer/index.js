import { AppBar, Box, Stack, Toolbar, Typography } from '@mui/material';
import LinkLogo from 'components/shared/LinkLogo';
import React, { useState, useEffect } from 'react';
import { theme } from 'theme';

// useEffect(() => {}, []);

const Footer = ({ ...props }) => {
  return (
    <>
      <Stack
        sx={{
          backgroundColor: theme.palette.primary.main,
          height: '140px',
        }}
        direction={'row'}
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
                xs: 'none',
                md: 'flex',
              },
              cursor: 'pointer',
            }}
            width={{
              sm: 'calc(100vw / 3)',
            }}
          >
            <LinkLogo imageURL={'/images/logo/logo1.png'} />
          </Typography>
        </Box>

        <Stack direction={'row'} spacing={12}>
          <Typography color={theme.palette.common.white} variant="h4">
            CityHouzing© 2021
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};
export default Footer;
