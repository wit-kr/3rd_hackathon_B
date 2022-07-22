import Layout from '@/components/layout/mainLayout';
import Splash from '@/components/domain/Splash';

const Main = () => <Splash />;

Main.getLayout = (page) => <Layout>{page}</Layout>;

export default Main;
