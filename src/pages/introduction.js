import DefaultLayout from 'components/layouts/DefaultLayout';
import Introduction from 'components/pages/Introduction/introduction';
// import AboutPage from 'components/pages/About/AboutPage';
import { useEffect, useState } from 'react';

const seo = {
  title: 'About - City Houzing',
};
export default function About({ isMobile }) {
  const [position, setPosition] = useState();

  useEffect(() => {
    const scrollContainer = document.getElementsByClassName('about-scroll');

    // scrollContainer.addEventListener('wheel', (evt) => {
    //   evt.preventDefault();
    //   scrollContainer.scrollLeft += evt.deltaY;
    // });
    for (let item of scrollContainer) {
      item.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
        setPosition(item.scrollLeft);
      });
      return document.removeEventListener('wheel', () => {});
    }
    return;
  }, []);

  return (
    <DefaultLayout seo={seo}>
      <Introduction></Introduction>
    </DefaultLayout>
  );
}
