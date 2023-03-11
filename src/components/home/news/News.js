import { Box, Typography } from '@mui/material';
import { StyledBtnOutlined } from 'components/ukit/Button';
import React from 'react';
import { theme } from 'theme';
import { useStyles } from './styles';

function News({ news }) {
  const classes = useStyles();

  return (
    <Box
      className={classes.container}
      style={{
        border: `1px solid ${theme.palette.borderBox.box}`,
        backgroundColor: theme.palette.common.white,
      }}
    >
      <Box>
        <img alt={news.title} src={news.image} width={'100%'} />
        <Box style={{ padding: '8% 8% 0 8%' }}>
          <Typography
            style={{
              color: theme.palette.text.subText,
              marginBottom: '1.25rem',
              fontWeight: 100,
              lineHeight: '1.438rem',
              fontStyle: 'italic',
            }}
          >
            {news.createdAt}
          </Typography>
          <Typography
            style={{
              color: theme.palette.common.black,
              fontWeight: 600,
              marginBottom: '1.25rem',
              fontSize: '2rem',
              lineHeight: '2.438rem',
              lineBreak: 'anywhere',
            }}
          >
            {news.title}
          </Typography>
          <Typography
            style={{
              color: theme.palette.common.black,
              fontWeight: '400',
              marginBottom: '1.25',
              lineHeight: '1.438rem',
              lineBreak: 'anywhere',
            }}
          >
            {news.description}
          </Typography>
        </Box>
      </Box>
      <Box style={{ padding: '8%' }}>
        <StyledBtnOutlined
          variant="outlined"
          fontSize="1.5rem"
          fontWeight="600"
          lineheight="1.25rem"
          sx={{
            boxShadow: 'rgba(0, 0, 0, 0.15) 0 0.125rem 0.163rem',
            fontWeight: '600',
            lineHeight: '1.5rem',
          }}
        >
          Read
        </StyledBtnOutlined>
      </Box>
    </Box>
  );
}

export default News;
