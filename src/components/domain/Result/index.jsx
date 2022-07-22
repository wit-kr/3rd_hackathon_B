import {
  AnswerButton,
  Container,
  Description,
  HomeButton,
  NumberDescription,
  ScoreImg,
  ResultBox,
} from '@/components/domain/Result/styles';

const Result = () => (
  <Container>
    <ScoreImg src="/image/result/result0.svg" alt="result" />
    <ResultBox>
      <Description>
        햎희님은 총
        <br />
        <NumberDescription>0문제 </NumberDescription>
        맞췄어요
      </Description>
      <AnswerButton>정답 보러가기</AnswerButton>
    </ResultBox>
    <HomeButton>홈으로</HomeButton>
  </Container>
);

export default Result;
