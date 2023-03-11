import { Box } from '@mui/system';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import Header from '../pages/common/header/index.js';
import Footer from '../pages/common/footer/index';
import { Container, Stack } from '@mui/material';

const DefaultLayout = ({ children, showFooter = true, seo }) => {
  return (
    <>
      <Stack direction={'column'}>
        <NextSeo {...seo} />
        {/* <Head>
        <link rel="shortcut icon" href="/logo.jpg" />
      </Head> */}
        <Container maxWidth="xl">
          <Box>
            <Header></Header>
          </Box>
          <Box>
            <Box
              sx={
                {
                  // overflowX: {
                  //   xs: 'hidden',
                  //   md: 'scroll',
                  // },
                  // overflowY: 'hidden',
                }
              }
            >
              {children}
            </Box>
          </Box>
          <Box>
            {showFooter ? (
              <>
                <Footer></Footer>
              </>
            ) : (
              <></>
            )}
          </Box>
        </Container>
      </Stack>
    </>
  );
};

export default DefaultLayout;
