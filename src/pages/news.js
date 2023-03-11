import React from 'react';
import ListNews from 'components/home/news/ListNews';
import Property from 'components/shared/Property';
import { theme } from 'theme';
import { Box } from '@mui/material';
import BreadCrumb from 'components/pages/common/breadcrumb/breadcrumb';
import DefaultLayout from 'components/layouts/DefaultLayout';
import Contact from 'components/forms/Contact';

function News() {
  return (
    <Box>
      <DefaultLayout>
        <BreadCrumb title={'Tin Tức'}></BreadCrumb>
        <Property
          padding={'40px 45px 60px 40px'}
          bodyComponent={ListNews}
        ></Property>
        <Contact></Contact>
      </DefaultLayout>
    </Box>
  );
}

export default News;
