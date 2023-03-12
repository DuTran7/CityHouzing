import { Container } from '@mui/system';
import DefaultLayout from 'components/layouts/DefaultLayout';
import HomePage from 'components/pages/Home/HomePage';
const seo = {
  title: 'Home - City Houzing',
  description: `City Houzing - nền tảng kết nối chủ nhà cho thuê và người đi thuê tại Tp. City Houzing đang hỗ trợ kết nối với hàng trăm chủ nhà và hàng nghìn căn hộ cho thuê`,
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
