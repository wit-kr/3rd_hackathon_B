import Layout from '@/components/layout/mainLayout';
import Result from '@/components/domain/Result';

const ResultPage = () => <Result />;

ResultPage.getLayout = (page) => <Layout>{page}</Layout>;

export default ResultPage;
