import { Box, Grid, Stack, Typography } from '@mui/material';
import Contact from 'components/forms/Contact';
import LinkLogo from 'components/shared/LinkLogo';
import { theme } from 'theme';
import BreadCrumb from '../common/breadcrumb/breadcrumb';

const Project = ({ ...props }) => {
  const projects = [
    {
      imgURL: '',
      address: '',
      room: '',
      electric: '',
      wifi: '',
      others: '',
    },
    {
      imgURL: '',
      address: '',
      room: '',
      electric: '',
      wifi: '',
      others: '',
    },
    {
      imgURL: '',
      address: '',
      room: '',
      electric: '',
      wifi: '',
      others: '',
    },
    {
      imgURL: '',
      address: '',
      room: '',
      electric: '',
      wifi: '',
      others: '',
    },
    {
      imgURL: '',
      address: '',
      room: '',
      electric: '',
      wifi: '',
      others: '',
    },
    {
      imgURL: '',
      address: '',
      room: '',
      electric: '',
      wifi: '',
      others: '',
    },
    {
      imgURL: '',
      address: '',
      room: '',
      electric: '',
      wifi: '',
      others: '',
    },
  ];
  return (
    <>
      <BreadCrumb listItem={'Dự Án'} title={'Về Chúng Tôi'}></BreadCrumb>
      {/* Project section */}
      <Box sx={{ margin: '0 40px 40px 40px' }}>
        <Grid container spacing={4}>
          {(projects || []).map((item, idx) => {
            return (
              <>
                <Grid
                  key={idx}
                  xl={4}
                  md={6}
                  sm={6}
                  xs={12}
                  item
                  sx={{
                    '&:hover': {
                      '.box2': {
                        display: 'block !important',
                        cursor: 'pointer',
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
                          <LinkLogo
                            width={'25px'}
                            height={'18px'}
                            imageURL={'/images/icons/electric.png'}
                          ></LinkLogo>
                          <Typography
                            color={theme.palette.common.white}
                            variant="h7"
                          >
                            4k/kwh
                          </Typography>
                        </Box>
                        <Box>
                          <LinkLogo
                            width={'25px'}
                            height={'18px'}
                            imageURL={'/images/icons/other.png'}
                          ></LinkLogo>
                          <Typography
                            color={theme.palette.common.white}
                            variant="h7"
                          >
                            100k/p
                          </Typography>
                        </Box>
                        <Box>
                          <LinkLogo
                            width={'25px'}
                            height={'18px'}
                            imageURL={'/images/icons/wifi.png'}
                          ></LinkLogo>
                          <Typography
                            color={theme.palette.common.white}
                            variant="h7"
                          >
                            Free
                          </Typography>
                        </Box>
                      </Stack>
                    </Box>
                  </Box>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Box>

      <Contact></Contact>
    </>
  );
};

export default Project;
