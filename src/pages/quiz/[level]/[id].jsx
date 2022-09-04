import QuizLayout from '@/components/layout/quizLayout';
import Quiz from '@/components/domain/Quiz';
import Layout from '@/components/layout/mainLayout';

const QuizPage = () => <Quiz />;

QuizPage.getLayout = (page) => <Layout>{page}</Layout>;

export default QuizPage;
