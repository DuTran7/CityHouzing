import { Box, Typography } from '@mui/material';
import { StyledBtnContain, StyledBtnOutlined } from 'components/ukit/Button';
import React from 'react';
import { theme } from 'theme';

function HomeTopic() {
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F3F3F3',
      }}
    >
      <Box
        style={{
          maxWidth: '50%',
          width: '50%',
          boxSizing: 'border-box',
          padding: '4%',
        }}
      >
        <Box style={{}}>
          <Typography
            color={theme.palette.common.black}
            style={{
              fontWeight: 600,
              fontSize: '24px',
              lineheight: '29px',
              marginBottom: '32px',
            }}
          >
            The standard Lorem Ipsum passage
          </Typography>
          <Typography
            variant="h3"
            color={theme.palette.common.black}
            style={{
              fontWeight: 600,
              fontSize: '69px',
              lineheight: '84px',
              marginBottom: '66px',
            }}
          >
            Lorem ipsum dolor sit
          </Typography>
          <Typography
            color={theme.palette.text.subText}
            style={{
              fontWeight: 400,
              fontSize: '16px',
              lineheight: '32px',
              borderLeft: '1px solid black',
              paddingLeft: '17px',
              marginBottom: '65px',
            }}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam
          </Typography>
          <Box>
            {/* Figma fontSize is 24px */}
            <StyledBtnContain
              fontSize="20px"
              fontWeight="600"
              lineheight="20px"
              style={{ marginRight: '9%' }}
            >
              Our Services
            </StyledBtnContain>
            <StyledBtnOutlined
              variant="outlined"
              fontSize="20px"
              fontWeight="600"
              lineheight="20px"
            >
              About Me
            </StyledBtnOutlined>
          </Box>
        </Box>
      </Box>
      <img
        src="/home/home-topic.png"
        alt="Home Topic"
        style={{ width: '50%' }}
      />
    </Box>
  );
}

export default HomeTopic;
