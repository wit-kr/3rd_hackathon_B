import { Container, Title } from '@/components/layout/quizLayout/button/styles';
import { useEffect } from 'react';
const Button = ({clickbutton}) => {
  return(
    <Container onClick={clickbutton}>
    <Title>다음</Title>
  </Container>
  )
}
  

export default Button;
