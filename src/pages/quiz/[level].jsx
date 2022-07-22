import QuizLayout from '@/components/layout/quizLayout';
import Quiz from '@/components/domain/Quiz';

const QuizPage = () => <Quiz />;

QuizPage.getLayout = (page) => <QuizLayout>{page}</QuizLayout>;

export default QuizPage;
