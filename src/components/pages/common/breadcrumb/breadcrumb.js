import { Box, Breadcrumbs, Container, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import Link from '@mui/material/Link';
import { theme } from 'theme';
import HomeIcon from '@mui/icons-material/Home';
const BreadCrumb = ({ title, listItem, ...props }) => {
  return (
    <>
      <Stack
        alignItems={'flex-start'}
        sx={{
          background: '#F3F3F3',
          height: '225px',
        }}
      >
        <Container
          sx={{
            height: 'inherit !important',
            marginLeft: '0',
          }}
          maxWidth={'xl'}
        >
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              marginLeft: {
                md: '110px',
                xs: '20px',
              },
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          >
            <Box>
              <Typography
                sx={{ marginBottom: '20px' }}
                variant="subtitle2"
                color={theme.palette.primary.main}
              >
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
                  <Box sx={{ display: 'flex' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        pb: '2px',
                      }}
                    >
                      <HomeIcon
                        sx={{ mr: 0.5, color: theme.palette.primary.main }}
                        fontSize="inherit"
                      />
                    </div>
                    <div>Trang chủ</div>
                  </Box>
                </Link>
                <Link
                  sx={{
                    fontWeight: 'bold',
                    color: theme.palette.common.black,
                  }}
                  underline="hover"
                  color="inherit"
                  href="/material-ui/getting-started/installation/"
                >
                  {listItem}
                </Link>
              </Breadcrumbs>
            </Box>
          </Box>
        </Container>
      </Stack>
    </>
  );
};

export default BreadCrumb;
