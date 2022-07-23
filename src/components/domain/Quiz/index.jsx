import { useRouter } from 'next/router';
import {
  Container,
  QuizImage,
  QuizBox,
  QuizQuestion,
  Description,
  ButtonContainer,
  Button,
} from '@/components/domain/Quiz/styles';
import quizData from '@/data/quiz.json';
import { useRecoilState, useRecoilValue } from 'recoil';
import { answerState, levelState } from '../../../atom/atom';
import { useState } from 'react';

const Quiz = () => {
  const [answer, setAnswer] = useRecoilState(answerState);
  const router = useRouter();
  const currentUser = router.query['current-user'];
  const level = useRecoilValue(levelState);
  const id = Number(router.query.id);
  const imagePath = level * 3 - (3 - id);
  const quiz = quizData?.quizList[id - 1];

  if (level * 3 < id) {
    router.push(`/quiz/result/?current-user=${currentUser}`);
  }

  const setCorrect = () => {
    const nextQuiz = id + 1;
    if (quiz.solution.split(',')[0] === 'O') {
      setAnswer(answer + 1);
      console.log(answer);
    }
    router.push(`/quiz/${level}/${nextQuiz}?current-user=${currentUser}`);
  };

  const setFalse = () => {
    const nextQuiz = id + 1;
    if (quiz.solution.split(',')[0] === 'X') {
      setAnswer(answer + 1);
      console.log(answer);
    }
    router.push(`/quiz/${level}/${nextQuiz}?current-user=${currentUser}`);
  };

  return (
    <Container>
      <QuizImage src={`/image/quiz/${imagePath}.svg`} />
      <QuizBox>
        <QuizQuestion>{quiz?.content}</QuizQuestion>
        {/* <Description>선택 후 다음을 눌러주세요</Description> */}
      </QuizBox>
      <ButtonContainer>
        <Button onClick={setCorrect}>O</Button>
        <Button onClick={setFalse}>X</Button>
      </ButtonContainer>
    </Container>
  );
};

export default Quiz;
