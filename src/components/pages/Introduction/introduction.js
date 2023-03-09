import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { theme } from 'theme';
import BreadCrumb from '../common/breadcrumb/breadcrumb';

const Introduction = () => {
  return (
    <>
      <Box
        sx={{
          overflow: 'hidden',
        }}
      >
        <BreadCrumb title={'Về Chúng Tôi'}></BreadCrumb>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                mr: '50px',
                padding: '20px 0 20px 0',
              }}
            >
              <Image
                height={'711px'}
                width={'523px'}
                src={'/images/placeHolderImage/aboutUsImg.png'}
              ></Image>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Stack
              padding={'100px 220px 130px 0'}
              height={'770px'}
              //   sx={{
              //     height: '770px',
              //     padding: '100px 0 130px 0',
              //   }}
            >
              <Box sx={{ mb: '25px' }}>
                <Button
                  sx={{
                    width: '129px',
                    height: '27px',
                    background: 'rgba(74, 0, 169, 0.27)',
                    bordeRadius: '25px',
                    color: 'rgba(74, 0, 169, 0.27)',
                  }}
                >
                  <Typography color={theme.palette.primary.main} variant="h6">
                    About us
                  </Typography>
                </Button>
              </Box>
              <Box sx={{ mb: '25px' }}>
                <Typography color={theme.palette.common.black} variant="h3">
                  The standard Lorem Ipsum passage
                </Typography>
              </Box>
              <Box sx={{ mb: '105px' }}>
                <Typography variant="h7" color={theme.palette.common.grey}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                </Typography>
              </Box>
              <Box>
                <Box
                  sx={{
                    boxSizing: ' border-box',
                    width: '437px',
                    height: '112px',
                    background: 'rgba(74, 0, 169, 0.12)',
                    borderLeft: '4px solid #4A00A9',
                    mb: '45px',
                  }}
                >
                  <Typography
                    padding={'20px'}
                    color={theme.palette.common.grey}
                    variant="h7"
                  >
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Button
                  sx={{
                    background: ' #FFE70C',
                  }}
                >
                  <Typography
                    padding={'20px'}
                    color={theme.palette.primary.main}
                    variant="h5"
                  >
                    Xem Dự Án
                  </Typography>
                </Button>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        {/* feature section */}
        <Stack
          height={'707px'}
          sx={{
            background: '#F8F8F8',
          }}
        >
          <Stack
            sx={{
              margin: '40px 0 40px 0',
            }}
            alignItems={'center'}
          >
            <Box>
              <Box sx={{ mb: '25px' }}>
                <Button
                  sx={{
                    width: '129px',
                    height: '27px',
                    background: 'rgba(74, 0, 169, 0.27)',
                    bordeRadius: '25px',
                    color: 'rgba(74, 0, 169, 0.27)',
                  }}
                >
                  <Typography color={theme.palette.primary.main} variant="h6">
                    Features
                  </Typography>
                </Button>
              </Box>
            </Box>
            <Box>
              <Typography
                variant="subtitle2"
                color={theme.palette.primary.main}
              >
                Giá Trị Cốt Lõi
              </Typography>
            </Box>
          </Stack>
          <Box sx={{ margin: '0 40px 40px 40px' }}>
            <Grid container>
              <Grid item xs={4}>
                <Stack
                  sx={{
                    border: '1px solid rgba(193, 193, 193, 0.54)',
                    background: '#F9F9F9',
                    boxSizing: 'border-box',
                    padding: '20px 40px 60px 40px',
                  }}
                >
                  <Box
                    sx={{
                      mb: '40px',
                    }}
                  >
                    <Image
                      height={'134px'}
                      width={'128px'}
                      src={'/images/logo/logoFeature1.png'}
                    ></Image>
                  </Box>
                  <Box
                    sx={{
                      mb: '60px',
                    }}
                  >
                    <Typography color={'black'} variant="h4">
                      Finibus Bonorum
                    </Typography>
                  </Box>
                  <Box>
                    <Typography color={'#515151'} variant="h5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs={4}>
                <Stack
                  sx={{
                    border: '1px solid rgba(193, 193, 193, 0.54)',
                    background: '#F9F9F9',
                    boxSizing: 'border-box',
                    padding: '20px 40px 60px 40px',
                  }}
                >
                  <Box
                    sx={{
                      mb: '40px',
                    }}
                  >
                    <Image
                      height={'134px'}
                      width={'128px'}
                      src={'/images/logo/logoFeature1.png'}
                    ></Image>
                  </Box>
                  <Box
                    sx={{
                      mb: '60px',
                    }}
                  >
                    <Typography color={'black'} variant="h4">
                      Finibus Bonorum
                    </Typography>
                  </Box>
                  <Box>
                    <Typography color={'#515151'} variant="h5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs={4}>
                <Stack
                  sx={{
                    border: '1px solid rgba(193, 193, 193, 0.54)',
                    background: '#F9F9F9',
                    boxSizing: 'border-box',
                    padding: '20px 40px 60px 40px',
                  }}
                >
                  <Box
                    sx={{
                      mb: '40px',
                    }}
                  >
                    <Image
                      height={'134px'}
                      width={'128px'}
                      src={'/images/logo/logoFeature1.png'}
                    ></Image>
                  </Box>
                  <Box
                    sx={{
                      mb: '60px',
                    }}
                  >
                    <Typography color={'black'} variant="h4">
                      Finibus Bonorum
                    </Typography>
                  </Box>
                  <Box>
                    <Typography color={'#515151'} variant="h5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Stack>

        {/* teams section */}
        <Stack>
          <Grid container>
            <Grid item xs={12}>
              <Stack
                sx={{
                  margin: '40px 0 40px 0',
                }}
                alignItems={'center'}
              >
                <Box>
                  <Box sx={{ mb: '25px' }}>
                    <Button
                      sx={{
                        width: '129px',
                        height: '27px',
                        background: 'rgba(74, 0, 169, 0.27)',
                        bordeRadius: '25px',
                        color: 'rgba(74, 0, 169, 0.27)',
                      }}
                    >
                      <Typography
                        color={theme.palette.primary.main}
                        variant="h6"
                      >
                        Teams
                      </Typography>
                    </Button>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    variant="subtitle2"
                    color={theme.palette.primary.main}
                  >
                    Thành Viên
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>

          <Box sx={{ margin: '0 40px 40px 40px' }}>
            <Grid container>
              <Grid item xs={4}>
                <Stack>
                  <Box>
                    <Image
                      height={'426px'}
                      width={'426px'}
                      src={'/images/placeHolderImage/avataTeam1.png'}
                    ></Image>
                  </Box>
                  <Box>
                    <Box>
                      <Typography color={'black'} variant="h3">
                        Rosalina D. William
                      </Typography>
                    </Box>
                    <Box>
                      <Typography color={'black'} variant="h6">
                        Real Estate Broker
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs={4}>
                <Stack>
                  <Box>
                    <Image
                      height={'426px'}
                      width={'426px'}
                      src={'/images/placeHolderImage/avataTeam1.png'}
                    ></Image>
                  </Box>
                  <Box>
                    <Box>
                      <Typography
                        color={theme.palette.common.black}
                        variant="h5"
                      >
                        Rosalina D. William
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        color={theme.palette.common.black}
                        variant="h6"
                      >
                        Real Estate Broker
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs={4}>
                <Stack>
                  <Box>
                    <Image
                      height={'426px'}
                      width={'426px'}
                      src={'/images/placeHolderImage/avataTeam1.png'}
                    ></Image>
                  </Box>
                  <Box>
                    <Box>
                      <Typography color={'black'} variant="h3">
                        Rosalina D. William
                      </Typography>
                    </Box>
                    <Box>
                      <Typography color={'black'} variant="h6">
                        Real Estate Broker
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Stack>

        {/* Project section */}
      </Box>
    </>
  );
};

export default Introduction;
