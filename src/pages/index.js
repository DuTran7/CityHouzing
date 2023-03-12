import { Container } from '@mui/system';
import DefaultLayout from 'components/layouts/DefaultLayout';
import HomePage from 'components/pages/Home/HomePage';
const seo = {
  title: 'Home - City Houzing',
  description: `Best of real estate`,
};
export default function Home({}) {
  return (
    // <Container maxWidth="xl">
    <DefaultLayout seo={seo}>
      <HomePage />
    </DefaultLayout>
    // </Container>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  // const req = await getAllCategories();
  return {
    props: {
      // data: req?.data,
    },
  };
}
