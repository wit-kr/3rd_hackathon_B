import { useRouter } from 'next/router';
import QuizLayout from '@/components/layout/quizLayout';
import Quiz from '@/components/domain/Quiz';

const QuizPage = () => {
  const router = useRouter();
  console.log(router.query.level);
  return <Quiz />;
};

QuizPage.getLayout = (page) => <QuizLayout>{page}</QuizLayout>;

export default QuizPage;
