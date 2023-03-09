import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { debounce } from 'lodash';
import HomeTopic from '../../home/topic/HomeTopic';
import OutstandingProject from '../../home/outstandingProject/OutstandingProject';
import Property from 'components/shared/Property';

export default function H(props) {
  const router = useRouter();
  const { chapterList, isWheel } = props;
  const [chapters, setChapters] = useState(chapterList || []);
  const [scrolling, setScrolling] = useState(false);

  const handleOnScrollPage = () => {
    setScrolling(true);
    debounce(() => {
      setScrolling(false);
    }, 350)();
  };
  useEffect(() => {
    setChapters(props?.chapterList);
  }, [props?.chapterList]);

  useEffect(() => {
    const oldChapter = localStorage.getItem('CHAPTER');
    if (oldChapter) {
      const index = JSON.parse(oldChapter)?.index || 0;
      const element = document.getElementById('chapter-' + --index);
      const melement = document.getElementById('mchapter-' + --index);
      element?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start',
      });
      // melement?.scrollIntoView({
      //   behavior: 'smooth',
      //   block: 'start',
      //   inline: 'start',
      // });
      setTimeout(() => {
        localStorage.removeItem('CHAPTER');
      }, 500);
    }
  }, [chapters]);
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
        margin="100px 0 190px 0"
        bodyComponent={OutstandingProject}
      />
    </Box>
  );
}
