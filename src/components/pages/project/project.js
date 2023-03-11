import { Box, Grid, Stack, Typography } from '@mui/material';
import { theme } from 'theme';
import BreadCrumb from '../common/breadcrumb/breadcrumb';

const Project = ({ ...props }) => {
  return (
    <>
      <BreadCrumb title={'Về Chúng Tôi'}></BreadCrumb>
      {/* Project section */}
      <Box sx={{ margin: '0 40px 40px 40px' }}>
        <Grid container spacing={2}>
          <Grid
            xl={4}
            md={12}
            sm={12}
            xs={12}
            item
            sx={{
              '&:hover': {
                '.box2': {
                  display: 'block !important',
                },
              },
            }}
          >
            <Box
              style={{
                backgroundImage: "url('/home/project.png')",
                backgroundPosition: 'center bottom',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '395px',
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: 'rgb(250, 40, 38)',
                flexDirection: 'column',
              }}
            >
              <Box
                style={{
                  display: 'inline-block',
                  boxSizing: 'border-box',
                  width: '100%',
                  height: '155px',
                  textAlign: 'start',
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  paddingLeft: '25px',
                }}
              >
                <Typography
                  color={'#FFE70C'}
                  style={{ marginBottom: '30px' }}
                  variant="h7"
                >
                  Bình Thạnh
                </Typography>
                <Typography
                  color={theme.palette.common.white}
                  style={{ marginBottom: '30px' }}
                  variant="h5"
                >
                  Xô Viết Nghệ Tĩnh Duplex
                </Typography>
              </Box>

              <Box
                className="box2"
                style={{
                  display: 'inline-block',
                  boxSizing: 'border-box',
                  width: '100%',
                  height: '75px',
                  textAlign: 'start',
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  paddingLeft: '25px',
                  display: 'none',
                }}
              >
                <Stack
                  direction={'row'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  height={'100%'}
                  padding={'30px'}
                >
                  <Box>
                    <Typography color={theme.palette.common.white} variant="h7">
                      4k/kwh
                    </Typography>
                  </Box>
                  <Box>
                    <Typography color={theme.palette.common.white} variant="h7">
                      100k/p
                    </Typography>
                  </Box>
                  <Box>
                    <Typography color={theme.palette.common.white} variant="h7">
                      Free
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Grid>
          <Grid
            xl={4}
            md={12}
            sm={12}
            xs={12}
            item
            sx={{
              '&:hover': {
                '.box2': {
                  display: 'block !important',
                },
              },
            }}
          >
            <Box
              style={{
                backgroundImage: "url('/home/project.png')",
                backgroundPosition: 'center bottom',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '395px',
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: 'rgb(250, 40, 38)',
                flexDirection: 'column',
              }}
            >
              <Box
                style={{
                  display: 'inline-block',
                  boxSizing: 'border-box',
                  width: '100%',
                  height: '155px',
                  textAlign: 'start',
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  paddingLeft: '25px',
                }}
              >
                <Typography
                  color={'#FFE70C'}
                  style={{ marginBottom: '30px' }}
                  variant="h7"
                >
                  Bình Thạnh
                </Typography>
                <Typography
                  color={theme.palette.common.white}
                  style={{ marginBottom: '30px' }}
                  variant="h5"
                >
                  Xô Viết Nghệ Tĩnh Duplex
                </Typography>
              </Box>

              <Box
                className="box2"
                style={{
                  display: 'inline-block',
                  boxSizing: 'border-box',
                  width: '100%',
                  height: '75px',
                  textAlign: 'start',
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  paddingLeft: '25px',
                  display: 'none',
                }}
              >
                <Stack
                  direction={'row'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  height={'100%'}
                  padding={'30px'}
                >
                  <Box>
                    <Typography color={theme.palette.common.white} variant="h7">
                      4k/kwh
                    </Typography>
                  </Box>
                  <Box>
                    <Typography color={theme.palette.common.white} variant="h7">
                      100k/p
                    </Typography>
                  </Box>
                  <Box>
                    <Typography color={theme.palette.common.white} variant="h7">
                      Free
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Grid>

          <Grid
            xl={4}
            md={12}
            sm={12}
            xs={12}
            item
            sx={{
              '&:hover': {
                '.box2': {
                  display: 'block !important',
                },
              },
            }}
          >
            <Box
              style={{
                backgroundImage: "url('/home/project.png')",
                backgroundPosition: 'center bottom',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '395px',
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: 'rgb(250, 40, 38)',
                flexDirection: 'column',
              }}
            >
              <Box
                style={{
                  display: 'inline-block',
                  boxSizing: 'border-box',
                  width: '100%',
                  height: '155px',
                  textAlign: 'start',
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  paddingLeft: '25px',
                }}
              >
                <Typography
                  color={'#FFE70C'}
                  style={{ marginBottom: '30px' }}
                  variant="h7"
                >
                  Bình Thạnh
                </Typography>
                <Typography
                  color={theme.palette.common.white}
                  style={{ marginBottom: '30px' }}
                  variant="h5"
                >
                  Xô Viết Nghệ Tĩnh Duplex
                </Typography>
              </Box>

              <Box
                className="box2"
                style={{
                  display: 'inline-block',
                  boxSizing: 'border-box',
                  width: '100%',
                  height: '75px',
                  textAlign: 'start',
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  paddingLeft: '25px',
                  display: 'none',
                }}
              >
                <Stack
                  direction={'row'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  height={'100%'}
                  padding={'30px'}
                >
                  <Box>
                    <Typography color={theme.palette.common.white} variant="h7">
                      4k/kwh
                    </Typography>
                  </Box>
                  <Box>
                    <Typography color={theme.palette.common.white} variant="h7">
                      100k/p
                    </Typography>
                  </Box>
                  <Box>
                    <Typography color={theme.palette.common.white} variant="h7">
                      Free
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Project;
