import { Box, Typography } from '@mui/material';
import { StyledBtnContain, StyledBtnOutlined } from 'components/ukit/Button';
import React from 'react';
import { theme } from 'theme';
import styles from 'components/home/topic/HomeTopic.module.css';

function HomeTopic() {
  return (
    <Box className={styles.container}>
      <Box className={styles['left-info']}>
        <Box className={styles[""]}>
          <Typography
            color={theme.palette.common.black}
            className={styles.title}
          >
            The standard Lorem Ipsum passage
          </Typography>
          <Typography
            variant="h3"
            color={theme.palette.common.black}
            className={styles.content}
          >
            Lorem ipsum dolor sit
          </Typography>
          <Typography
            color={theme.palette.text.subText}
            className={styles.desciption}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam
          </Typography>
          <Box>
            {/* Figma fontSize is 24px */}
            <StyledBtnContain
              fontSize="1.25rem"
              fontWeight="600"
              lineheight="1.25rem"
              className={styles['button-bottom']}
            >
              Our Services
            </StyledBtnContain>
            <StyledBtnOutlined
              variant="outlined"
              fontSize="20px"
              fontWeight="600"
              lineheight="20px"
              className={styles['button-bottom']}
            >
              About Me
            </StyledBtnOutlined>
          </Box>
        </Box>
      </Box>
      <img
        src="/home/home-topic.png"
        alt="Home Topic"
        className={styles['right-image']}
      />
    </Box>
  );
}

export default HomeTopic;
