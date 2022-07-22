import {
  ButtonContainer,
  Container,
} from '@/components/layout/quizLayout/styles';
import Button from '@/components/layout/quizLayout/button';
import ProgressBar from '@/components/layout/quizLayout/progressBar';
import { useState } from 'react';
// eslint-disable-next-line react/prop-types
const QuizLayout = ({ children }) => {
  const [quiznumber,setQuiznumber]=useState(0);
  const clickbutton=()=>{
    if(quiznumber<3){
      setQuiznumber(quiznumber+1);
    }
    else{
      setQuiznumber(0);
    }
  }
  return(
  <Container>
    <ProgressBar quiznumber={quiznumber} />
    {children}
    <ButtonContainer>
      <Button clickbutton={clickbutton} />
    </ButtonContainer>
  </Container>
)};

export default QuizLayout;
