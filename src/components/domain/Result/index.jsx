import { useState } from 'react';
import Link from 'next/link';
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

const Result = () => {
  const [isModalShow, setIsModalShow] = useState(false);
  const showModal = () => {
    setIsModalShow(!isModalShow);
  };
  const closeModal = () => {
    setIsModalShow(false);
  };
  return (
    <>
      <Container>
        <ScoreImg src="/image/result/result0.svg" alt="result" />
        <ResultBox>
          <Description>
            햎희님은 총
            <br />
            <NumberDescription>0문제 </NumberDescription>
            맞췄어요
          </Description>
          <AnswerButton onClick={showModal}>정답 보러가기</AnswerButton>
        </ResultBox>
        <Link href="/home">
          <HomeButton>홈으로</HomeButton>
        </Link>
      </Container>
      {isModalShow && <ResultModal onClose={closeModal} />}
    </>
  );
};

export default Result;
