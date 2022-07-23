import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import {
  AnswerButton,
  Container,
  Description,
  HomeButton,
  NumberDescription,
  ScoreImg,
  ResultBox,
} from '@/components/domain/Result/styles';
import ResultModal from '@/components/domain/Home/Modal/ResultModal';
import { answerState, levelState } from '../../../atom/atom';

const Result = () => {
  const [answer, setAnswer] = useRecoilState(answerState);
  const [level, setLevel] = useRecoilState(levelState);
  const router = useRouter();
  const currentUser = router.query['current-user'];
  const [isModalShow, setIsModalShow] = useState(false);
  const showModal = () => {
    setIsModalShow(!isModalShow);
  };
  const closeModal = () => {
    setIsModalShow(false);
  };
  const pushHomeRoute = () => {
    router.push(`/home?current-user=${currentUser}`);
  };
  setAnswer(3);
  setLevel(2);
  return (
    <>
      <Container>
        <ScoreImg src={`/image/result/result${answer}.svg`} alt="result" />
        <ResultBox>
          <Description>
            {currentUser}
            님은 총
            <br />
            <NumberDescription>
              {answer}
              문제{' '}
            </NumberDescription>
            맞췄어요
          </Description>
          <AnswerButton onClick={showModal}>정답 보러가기</AnswerButton>
        </ResultBox>
        <HomeButton onClick={pushHomeRoute}>홈으로</HomeButton>
      </Container>
      {isModalShow && <ResultModal onClose={closeModal} />}
    </>
  );
};

export default Result;
