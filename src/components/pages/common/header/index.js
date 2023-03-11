import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import LinkLogo from 'components/shared/LinkLogo';
import React, { useState, useEffect } from 'react';
import { theme } from 'theme';
import { styled } from '@mui/material';
import { display } from '@mui/system';

const ListItem = styled('div')(({ theme }) => ({
  '& .item': {
    color: theme.palette.common.black,
    cursor: 'pointer',
    paddingBottom: '15x',

    '&:hover': {
      borderBottom: '2px solid #4A00A9',
      color: ' #4A00A9',
    },
  },
  '& h4.MuiTypography-root.MuiTypography-h4.item.css-yvfnmw-MuiTypography-root':
    {
      paddingTop: '15px',
    },
}));

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const Items = ['Trang chủ', ' Giới Thiệu', '    Tin Tức'];

const Header = ({ ...props }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: theme.palette.common.white,
          color: theme.palette.common.black,
        }}
      >
        <Toolbar sx={{ padding: '20px' }} disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              ml: '100px',
            }}
          >
            <LinkLogo
              height={'76px'}
              width={'112px'}
              imageURL={'/images/logo/logo.png'}
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon></MenuIcon>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {Items.map((item) => (
                <MenuItem key={item} onClick={handleCloseNavMenu}>
                  <Typography
                    sx={{
                      color: theme.palette.common.black,
                      cursor: 'pointer',
                      paddingBottom: '15x',
                      mr: '50px',
                      '&:hover': {
                        borderBottom: '2px solid #4A00A9',
                        color: ' #4A00A9',
                      },
                    }}
                    variant="h4"
                    className="item"
                  >
                    {item}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <LinkLogo
              height={'76px'}
              width={'112px'}
              imageURL={'/images/logo/logo.png'}
            />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>

          <Box
            sx={{
              flexGrow: 0,
              display: { xs: 'none', md: 'flex' },
              flexDirection: 'row',
            }}
          >
            {Items.map((item, index) => {
              return (
                <>
                  <Typography
                    sx={{
                      color: theme.palette.common.black,
                      cursor: 'pointer',
                      paddingBottom: '15x',
                      mr: '50px',
                      '&:hover': {
                        borderBottom: '2px solid #4A00A9',
                        color: ' #4A00A9',
                      },
                    }}
                    key={index}
                    variant="h4"
                    className="item"
                  >
                    {item}
                  </Typography>
                </>
              );
            })}

            <Box>
              <Typography
                sx={{
                  color: theme.palette.common.black,
                  cursor: 'pointer',
                  paddingBottom: '15x',
                  mr: '50px',
                  background: ' #FFE70C',
                  // '&:hover': {
                  //   borderBottom: '2px solid #4A00A9',
                  //   color: ' #4A00A9',
                  // },
                }}
                variant="h4"
                className="item"
              >
                Liên Hệ
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
