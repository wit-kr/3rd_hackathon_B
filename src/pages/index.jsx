import Home from '@/components/domain/Home';
import Layout from '@/components/layout/mainLayout';

const Main = () => <Home />;

Main.getLayout = (page) => <Layout>{page}</Layout>;

export default Main;
