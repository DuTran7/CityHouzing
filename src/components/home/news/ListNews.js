import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import News from './News';
import moment from 'moment';

function ListNews({ data }) {
  const [listNews, setlistNews] = useState([]);

  useEffect(() => {
    console.log({ data });
    if (!data) {
      setlistNews([
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
    } else {
      setlistNews(data);
    }
    console.log(listNews);
  }, [data]);

  const NewsList = ({ listNews }) => {
    return (
      <Grid container spacing={2}>
        {listNews.map((news) => {
          return (
            <Grid
              key={news.id}
              item
              xl={4}
              lg={4}
              md={6}
              sm={6}
              xs={12}
              sx={{
                display: 'grid',
                gridAutoFlow: 'row',
                gap: 1,
              }}
            >
              <News news={news}></News>
            </Grid>
          );
        })}
      </Grid>
    );
  };

  return (
    <Box>
      <NewsList listNews={listNews}></NewsList>
    </Box>
  );
}

export default ListNews;
