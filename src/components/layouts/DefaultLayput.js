import { Box } from '@mui/system';
import { NextSeo } from 'next-seo';
import Head from 'next/head';

const DefaultLayout = ({ children, showFooter = true, seo }) => {
  return (
    <>
      <NextSeo {...seo} />
      <Head>
        <link rel="shortcut icon" href="/logo.jpg" />
      </Head>
      <Box>
        <Box
          sx={{
            overflowX: {
              xs: 'hidden',
              md: 'scroll',
            },
            overflowY: 'hidden',
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
};

export default DefaultLayout;
