import Layout from '@/components/layout/mainLayout';
import Login from '@/components/domain/Login';

const Main = () => <Login />;

Main.getLayout = (page) => <Layout>{page}</Layout>;

export default Main;
