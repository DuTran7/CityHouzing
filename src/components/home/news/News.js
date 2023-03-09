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
            style={{ color: theme.palette.text.subText, marginBottom: '20px', fontWeight: 400 }}
            variant="h6"
          >
            {news.createdAt}
          </Typography>
          <Typography
            style={{
              color: theme.palette.common.black,
              fontWeight: 600,
              marginBottom: '20px',
              fontSize: '32px',
              lineBreak: 'anywhere',
            }}
            variant="h4"
          >
            {news.title}
          </Typography>
          <Typography
            style={{
              color: theme.palette.common.black,
              marginBottom: '20px',
              lineBreak: 'anywhere',
            }}
            variant="h6"
          >
            {news.description}
          </Typography>
        </Box>
      </Box>
      <Box style={{ padding: '8%' }}>
        <StyledBtnOutlined
          variant="outlined"
          fontSize="24px"
          fontWeight="600"
          lineheight="20px"
          style={{
            boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 2.6px',
          }}
        >
          Read
        </StyledBtnOutlined>
      </Box>
    </Box>
  );
}

export default News;
