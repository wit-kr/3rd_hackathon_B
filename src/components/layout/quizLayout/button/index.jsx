import { Container, Title } from '@/components/layout/quizLayout/button/styles';
import { useEffect } from 'react';
const Button = ({quiznumber,clickbutton,resultPage}) => {
  return(
    <Container onClick={clickbutton}>
    {quiznumber<3?(<Title>다음</Title>)
      :(resultPage?(<Title>홈으로</Title>)
        :<Title>완료</Title>)}
  </Container>
  )
}
  

export default Button;
