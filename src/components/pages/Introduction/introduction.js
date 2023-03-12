import { Box, Button, Chip, Grid, Stack, Typography } from '@mui/material';
import { display } from '@mui/system';
import Contact from 'components/forms/Contact';
import Image from 'next/image';
import { theme } from 'theme';
import BreadCrumb from '../common/breadcrumb/breadcrumb';

const Introduction = () => {
  const teams = [
    {
      name: 'Rosalina D. William',
      description: '  Real Estate Broker',
    },
    {
      name: 'Rosalina D. William',
      description: '  Real Estate Broker',
    },
    {
      name: 'Rosalina D. William',
      description: '  Real Estate Broker',
    },
  ];

  const features = [
    {
      imgLogo: '/images/logo/logoFeature1.png',
      name: '  Finibus Bonorum',
      description:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ',
    },
    {
      imgLogo: '/images/logo/logoFeature3.png',
      name: '  Finibus Bonorum',
      description:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ',
    },
    {
      imgLogo: '/images/logo/logoFeature2.png',
      name: '  Finibus Bonorum',
      description:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ',
    },
  ];
  return (
    <>
      <Box
        sx={{
          overflow: 'hidden',
        }}
      >
        <BreadCrumb listItem={'Giới Thiệu'} title={'Về Chúng Tôi'}></BreadCrumb>
        <Grid container spacing={2}>
          <Grid item md={6} sm={12} xs={12}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                mr: '50px',
                padding: '20px 0 20px 0',
                marginRight: {
                  sm: '100px',
                  xs: '100px',
                },
              }}
            >
              <Image
                height={'711px'}
                width={'523px'}
                src={'/images/placeHolderImage/aboutUsImg.png'}
              ></Image>
            </Box>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Stack
              sx={{
                padding: {
                  md: '100px 220px 130px 0',
                  sm: ' 0 20px 0 40px',
                  xs: '0 20px 0 40px',
                },
              }}
            >
              <Box sx={{ mb: '25px' }}>
                {/* <Button
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

                </Button> */}
                <Chip
                  sx={{
                    backgroundColor: `${theme.palette.background.property}`,
                    color: theme.palette.text.title,
                    overflow: 'unset',
                    marginBottom: '15px',
                    fontSize: '22px',
                    // height: '35px',
                    padding: '0 1.625rem',
                    height: 'auto',
                    borderRadius: '25px',
                    '& span': {
                      padding: '0.625rem 0',
                      fontSize: '1.375 rem',
                      lineHeight: '1.438rem',
                      height: 'auto',
                      fontWeight: 400,
                    },
                  }}
                  size="medium"
                  label={'About us'}
                />
              </Box>
              <Box sx={{ mb: '25px' }}>
                <Typography color={theme.palette.common.black} variant="h3">
                  The standard Lorem Ipsum passage
                </Typography>
              </Box>
              <Box sx={{ mb: '105px' }}>
                <Typography variant="h6" color={'#808080'}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                </Typography>
              </Box>
              <Box>
                <Box
                  sx={{
                    boxSizing: ' border-box',
                    width: '100%',
                    height: 'auto',
                    background: 'rgba(74, 0, 169, 0.12)',
                    borderLeft: '4px solid #4A00A9',
                    mb: '45px',
                    padding: '20px',
                  }}
                >
                  <Typography color={'#808080'} variant="h6">
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
        <Grid container mb={'20px'}>
          <Grid item>
            <Stack
              sx={{
                margin: '40px 0 0 0',
                backgroundColor: '#F3F3F3',
                padding: '40px 0 40px 0',
              }}
              alignItems={'center'}
            >
              <Box>
                <Box>
                  {/* <Button
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
                  </Button> */}
                  <Chip
                    sx={{
                      backgroundColor: `${theme.palette.background.property}`,
                      color: theme.palette.text.title,
                      overflow: 'unset',
                      marginBottom: '15px',
                      fontSize: '22px',
                      // height: '35px',
                      padding: '0 1.625rem',
                      height: 'auto',
                      '& span': {
                        padding: '0.625rem 0',
                        fontSize: '1.375 rem',
                        lineHeight: '1.438rem',
                        height: 'auto',
                        fontWeight: 400,
                      },
                    }}
                    size="medium"
                    label={'Features'}
                  />
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

            <Grid container sx={{ margin: '0 40px 40px 40px' }}>
              {(features || []).map((item, idx) => {
                return (
                  <>
                    <Grid key={idx} item xs={12} md={4} sm={12}>
                      <Stack
                        sx={{
                          border: '1px solid rgba(193, 193, 193, 0.54)',
                          background: '#F9F9F9',
                          boxSizing: 'border-box',
                          padding: '20px 40px 60px 40px',
                          '&:hover': {
                            background: theme.palette.common.white,
                            // borderBottom: `10px solid  ${theme.palette.primary.main}`,
                            boxShadow: 'inset 0 -5px 0 #4A00A9',
                          },
                        }}
                      >
                        <Box>
                          <Box
                            sx={{
                              mb: '40px',
                            }}
                          >
                            <Image
                              height={'134px'}
                              width={'128px'}
                              src={item.imgLogo}
                            ></Image>
                          </Box>
                          <Box
                            sx={{
                              mb: '60px',
                            }}
                          >
                            <Typography color={'black'} variant="h4">
                              {item.name}
                            </Typography>
                          </Box>
                          <Box>
                            <Typography color={'#515151'} variant="h5">
                              {item.description}
                            </Typography>
                          </Box>
                        </Box>
                      </Stack>
                    </Grid>
                  </>
                );
              })}
            </Grid>
          </Grid>
        </Grid>

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
                  <Box>
                    <Chip
                      sx={{
                        backgroundColor: `${theme.palette.background.property}`,
                        color: theme.palette.text.title,
                        overflow: 'unset',
                        marginBottom: '15px',
                        fontSize: '22px',
                        // height: '35px',
                        padding: '0 1.625rem',
                        height: 'auto',
                        borderRadius: '25px',
                        '& span': {
                          padding: '0.625rem 0',
                          fontSize: '1.375 rem',
                          lineHeight: '1.438rem',
                          height: 'auto',
                          fontWeight: 400,
                        },
                      }}
                      size="medium"
                      label={'Teams'}
                    />
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
            <Grid container sx={{ justifyContent: 'space-around' }}>
              {teams.map((item, idx) => {
                return (
                  <>
                    <Grid
                      //  maxWidth={ md:'27.333333% !important'}
                      key={idx}
                      item
                      xs={12}
                      md={4}
                      sm={12}
                      sx={{
                        maxWidth: {
                          md: '27.333333% !important',
                        },
                        background: '#FFFFFF',
                        padding: ' 0 5px 0 0',
                        '& :hover': {
                          '& .nameMember': {
                            color: ' #4A00A9 !important',
                            textShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.25)',
                          },
                        },
                      }}
                    >
                      <Box sx={{ border: '1px solid #4A00A9' }}>
                        <Box
                          sx={{
                            width: '100%',
                            height: '426px',
                            backgroundImage:
                              "url('/images/placeHolderImage/avataTeam1.png')",
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }}
                        ></Box>
                        <Stack>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexDirection: 'column',
                              marginTop: '30px',
                            }}
                          >
                            <Box sx={{ mb: '30px' }}>
                              <Typography
                                className="nameMember"
                                color={theme.palette.common.black}
                                variant="h5"
                              >
                                {item.name}
                              </Typography>
                            </Box>
                            <Box sx={{ mb: '60px' }}>
                              <Typography
                                color={theme.palette.primary.main}
                                variant="h6"
                                sx={{
                                  textShadow:
                                    ' 0px 4px 4px rgba(0, 0, 0, 0.25)',
                                }}
                              >
                                {item.description}
                              </Typography>
                            </Box>
                          </Box>
                        </Stack>
                      </Box>
                    </Grid>
                  </>
                );
              })}
            </Grid>
          </Box>
        </Stack>

        <Contact></Contact>
      </Box>
    </>
  );
};

export default Introduction;
