import { useRouter } from 'next/router';
import { Container } from '@/components/layout/quizLayout/button/styles';

const Button = () => {
  const router = useRouter();
  const quiz = Number(router.query.id);
  const { level } = router.query;
  const currentUser = router.query['current-user'];
  const pushNext = () => {
    const nextQuiz = quiz + 1;
    router.push(`/quiz/${level}/${nextQuiz}?current-user=${currentUser}`);
  };
  return <Container onClick={pushNext}>다음</Container>;
};

export default Button;
