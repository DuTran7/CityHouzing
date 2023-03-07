import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { debounce } from 'lodash';
import HomeTopic from './HomeTopic';

export default function HomePage(props) {
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
    </Box>
  );
}
