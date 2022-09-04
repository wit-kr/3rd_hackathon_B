import {
  Container,
  QuizImage,
  QuizBox,
  QuizQuestion,
  Description,
  ButtonContainer,
  OButton,
  XButton,
  NextButton,
  ContentBox,
} from '@/components/domain/Quiz/styles';
import { useState } from 'react';

const Quiz = () => {
  const [clicked, setClicked] = useState(false);
  const [oClicked, setOClicked] = useState(false);
  const [xClicked, setXClicked] = useState(false);

  const clickO = () => {
    setClicked(true);
    setOClicked(true);
    setXClicked(false);
  };

  const clickX = () => {
    setClicked(true);
    setOClicked(false);
    setXClicked(true);
  };

  return (
    <Container>
      <ContentBox>
        <QuizImage src="/image/quiz/1.svg" />
        <QuizBox>
          <QuizQuestion>
            일회용 종이컵이나 플라스틱컵은
            <br />
            대부분 재활용이 된다
          </QuizQuestion>
          <Description>선택 후 다음을 눌러주세요</Description>
        </QuizBox>
        <ButtonContainer>
          <OButton onClick={clickO} oClicked={oClicked}>
            O
          </OButton>
          <XButton onClick={clickX} xClicked={xClicked}>
            X
          </XButton>
        </ButtonContainer>
      </ContentBox>
      <NextButton clicked={clicked}>다음</NextButton>
    </Container>
  );
};

export default Quiz;
