import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { debounce } from 'lodash';
import HomeTopic from '../../home/topic/HomeTopic';
import OutstandingProject from 'components/home/outstandingProject/OutstandingProject';
import Property from 'components/shared/Property';
import News from 'components/home/news/News';
import ListNews from 'components/home/news/ListNews';
import { theme } from 'theme';
import moment from 'moment';
import BreadCrumb from '../common/breadcrumb/breadcrumb';
import Image from 'next/image';
import Achievement from 'components/home/achievements/Achievement';
import Contact from 'components/forms/Contact';

export default function H(props) {
  const router = useRouter();
  const { chapterList, isWheel } = props;
  const [chapters, setChapters] = useState(chapterList || []);
  const [scrolling, setScrolling] = useState(false);
  const [news, setNews] = useState();

  // const handleOnScrollPage = () => {
  //   setScrolling(true);
  //   debounce(() => {
  //     setScrolling(false);
  //   }, 350)();
  // };
  // useEffect(() => {
  //   setChapters(props?.chapterList);
  // }, [props?.chapterList]);

  useEffect(() => {
    setNews([
      {
        id: Math.ceil(Math.random() * 9999999),
        image: '/home/news-2nd.png',
        title: 'NLorem ipsum dolor sit',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ...',
        createdAt: moment(new Date()).format('DD-MM-YYYY'),
      },
      {
        id: Math.ceil(Math.random() * 9999999),
        image: '/home/news.png',
        title: 'NLorem ipsum dolor sit',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ...',
        createdAt: moment(new Date()).format('DD-MM-YYYY'),
      },
      {
        id: Math.ceil(Math.random() * 9999999),
        image: '/home/news-2nd.png',
        title: 'NLorem ipsum dolor sit',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ...',
        createdAt: moment(new Date()).format('DD-MM-YYYY'),
      },
      {
        id: Math.ceil(Math.random() * 9999999),
        image: '/home/news.png',
        title: 'NLorem ipsum dolor sit',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ...',
        createdAt: moment(new Date()).format('DD-MM-YYYY'),
      },
      {
        id: Math.ceil(Math.random() * 9999999),
        image: '/home/news-2nd.png',
        title: 'NLorem ipsum dolor sit',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ...',
        createdAt: moment(new Date()).format('DD-MM-YYYY'),
      },
      {
        id: Math.ceil(Math.random() * 9999999),
        image: '/home/news.png',
        title: 'NLorem ipsum dolor sit',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ...',
        createdAt: moment(new Date()).format('DD-MM-YYYY'),
      },
    ]);
  }, []);
  // useEffect(() => {
  //   const oldChapter = localStorage.getItem('CHAPTER');
  //   if (oldChapter) {
  //     const index = JSON.parse(oldChapter)?.index || 0;
  //     const element = document.getElementById('chapter-' + --index);
  //     const melement = document.getElementById('mchapter-' + --index);
  //     element?.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'start',
  //       inline: 'start',
  //     });
  //     // melement?.scrollIntoView({
  //     //   behavior: 'smooth',
  //     //   block: 'start',
  //     //   inline: 'start',
  //     // });
  //     setTimeout(() => {
  //       localStorage.removeItem('CHAPTER');
  //     }, 500);
  //   }
  // }, [chapters]);
  return (
    <Box
      sx={{
        overflow: 'hidden',
      }}
    >
      <HomeTopic></HomeTopic>
      <Property
        title="Dự án nổi bật"
        chipContent="Property"
        padding="100px 0 190px 0"
        bodyComponent={OutstandingProject}
      />
      <Property
        title="Tin tức mới nhất"
        chipContent={'Property'}
        padding={'40px 45px 60px 40px'}
        bodyComponent={ListNews}
        backgroundColor={theme.palette.background.topic}
        data={news}
      ></Property>
      <Achievement></Achievement>
      <Contact></Contact>
    </Box>
  );
}
