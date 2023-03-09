import { Box, Breadcrumbs, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import Link from '@mui/material/Link';
import { theme } from 'theme';
import HomeIcon from '@mui/icons-material/Home';
const BreadCrumb = ({ title, ...props }) => {
  return (
    <>
      <Stack
        alignItems={'flex-start'}
        sx={{
          background: '#F3F3F3',
          height: '225px',
        }}
      >
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '110px',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <Box sx={{ mb: '25x' }}>
            <Typography variant="subtitle2" color={theme.palette.primary.main}>
              {title}
            </Typography>
          </Box>
          <Box>
            <Breadcrumbs sx={{ fontSize: '16px' }} aria-label="breadcrumb">
              <Link
                // sx={{ fontSize: '16px' }}
                underline="hover"
                color="inherit"
                href="/"
              >
                <HomeIcon
                  sx={{ mr: 0.5, color: theme.palette.primary.main }}
                  fontSize="inherit"
                />
                Trang chủ
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/material-ui/getting-started/installation/"
              >
                Giới Thiệu
              </Link>
            </Breadcrumbs>
          </Box>
        </Box>
      </Stack>
      {/* <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'flex-start',
          height: '225px',
          flexDirection: 'column',
        }}
      >
      </Box> */}
    </>
  );
};

export default BreadCrumb;
