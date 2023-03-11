import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import News from './News';

function Index({ news }) {
  const [listNews, setlistNews] = useState([
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
      image: '/home/news.png',
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
      image: '/home/news.png',
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
      image: '/home/news.png',
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
      image: '/home/news.png',
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
      image: '/home/news.png',
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

  const ListNews = ({ listNews }) => {
    return (
      <Grid container spacing={2}>
        {listNews.map((news) => {
          return (
            <Grid key={news.id} item xl={4} lg={4} md={6} sm={6} xs={12}>
              <News news={news}></News>
            </Grid>
          );
        })}
      </Grid>
    );
  };

  return (
    <Box>
      <ListNews listNews={listNews}></ListNews>
    </Box>
  );
}

export default Index;
