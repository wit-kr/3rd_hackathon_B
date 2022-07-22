import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  ButtonContainer,
  Container,
} from '@/components/layout/quizLayout/styles';
import Button from '@/components/layout/quizLayout/button';
import ProgressBar from '@/components/layout/quizLayout/progressBar';

const QuizLayout = ({ children }) => {
  const [resultPage, setResultPage] = useState(false);
  const router = useRouter();
  const currentUser = router.query['current-user'];
  const level =
      Number(process.browser && localStorage.getItem(currentUser)) ?? Number('1');
  const {quiznumber} = router.query;
  const { right } = router.query;
  const { wrong } = router.query;
  console.log("DDD"+level);
  const [active, setActive] = useState(false);
  const clickbutton = () => {
    if (quiznumber < 2) {
      quiznumber=Number(quiznumber)+1;
    } else if (quiznumber == 2) {
      setResultPage(true);
      quiznumber=Number(quiznumber)+1;
    } else {
      setResultPage(false);
    }
    router.push({
      pathname: `/quiz/[quiz]`,
      query: { quiz:level,quiznumber,right, wrong },
    });
  };
  // useEffect(() => {
  //   router.push({
  //     pathname: `/quiz/1`,
  //   });
  // }, [quiznumber]);
  useEffect(() => {
    if (right == 'true' || wrong == 'true') {
      setActive(true);
    } else if (quiznumber == 3) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [right, wrong]);
  return (
    <Container>
      {resultPage ? null : <ProgressBar quiznumber={quiznumber} />}
      {children}
      <ButtonContainer>
        <Button
          active={active}
          clickbutton={clickbutton}
          quiznumber={quiznumber}
          resultPage={resultPage}
        />
      </ButtonContainer>
    </Container>
  );
};

export default QuizLayout;
