import { Container, Title } from '@/components/layout/quizLayout/button/styles';
import { useEffect } from 'react';
const Button = ({quiznumber,clickbutton,resultPage,active}) => {
    if(active){
      return(
      <Container onClick={clickbutton} active={active}>
        {quiznumber<2?(<Title>다음</Title>)
          :(resultPage?(<Title>홈으로</Title>)
            :<Title>완료</Title>)}
      </Container>
      )}
    else{
      return(
        <Container onClick={clickbutton} active={active} disabled>
        {quiznumber<2?(<Title>다음</Title>)
          :(resultPage?(<Title>홈으로</Title>)
            :<Title>완료</Title>)}
      </Container>
      )
    }
}
  

export default Button;
