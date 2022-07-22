import { Container, Title } from '@/components/layout/quizLayout/button/styles';
import { useEffect } from 'react';
const Button = ({quiznumber,clickbutton}) => {
  return(
    <Container onClick={clickbutton}>
    {quiznumber==3?(<Title>완료</Title>):(<Title>다음</Title>)}
  </Container>
  )
}
  

export default Button;
