import { AppBar, Box, Stack, styled, Toolbar, Typography } from '@mui/material';
import LinkLogo from 'components/shared/LinkLogo';
import React, { useState, useEffect } from 'react';
import { theme } from 'theme';

const ListItem = styled('div')(({ theme }) => ({
  '& .item': {
    color: theme.palette.common.black,
    cursor: 'pointer',
    '&:hover': {
      borderBottom: '1px solid #4A00A9',
      color: ' #4A00A9',
    },
  },
}));

// useEffect(() => {}, []);

const Header = ({ ...props }) => {
  return (
    <>
      <Stack
        direction={'row'}
        alignItems="center"
        justifyContent={'space-between'}
        sx={{ height: '130px', width: '100%' }}
      >
        <Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              ml: {
                xs: '20px',
                md: '103px',
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
            <LinkLogo
              height={'76px'}
              width={'112px'}
              imageURL={'/images/logo/logo.png'}
            />
          </Typography>
        </Box>
        <Box>
          <ListItem>
            <Stack
              direction={'row'}
              spacing={12}
              justifyContent="flex-end"
              sx={{
                color: theme.palette.common.black,
              }}
            >
              <Typography variant="h4" className="item">
                Trang chủ
              </Typography>
              <Typography variant="h4" className="item">
                Giới Thiệu
              </Typography>
              <Typography variant="h4" className="item">
                Dự Án
              </Typography>
              <Typography variant="h4" className="item">
                Tin Tức
              </Typography>
              <Typography variant="h4" className="item">
                Liên Hệ
              </Typography>
            </Stack>
          </ListItem>
        </Box>
      </Stack>
    </>
  );
};

export default Header;
