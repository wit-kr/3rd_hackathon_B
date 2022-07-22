import Layout from '@/components/layout/mainLayout';
import Home from '@/components/domain/Home';

const HomePage = () => <Home />;
HomePage.getLayout = (page) => <Layout>{page}</Layout>;

export default HomePage;
