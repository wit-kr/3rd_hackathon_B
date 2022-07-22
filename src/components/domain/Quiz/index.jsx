import {
  Container,
  QuizImage,
  QuizBox,
  QuizQuestion,
  Description,
  ButtonContainer,
  Button,
} from '@/components/domain/Quiz/styles';
import { useEffect, useState } from 'react';
const Quiz = () => {
    return(
        <Container>
            <QuizImage src="/image/quiz/1.svg" />
            <QuizBox>
            <QuizQuestion>
                종이컵에 이물질이 묻어있는 경우
                <br />
                일반쓰레기로 버린다
            </QuizQuestion>
            <Description>선택 후 다음을 눌러주세요</Description>
            </QuizBox>
            <ButtonContainer>
                <Button onClick={()=>console.log("clicked")}>O</Button>
                <Button onClick={()=>console.log("clicked")}>X</Button>
            </ButtonContainer>
        </Container>
  )
};

export default Quiz;
