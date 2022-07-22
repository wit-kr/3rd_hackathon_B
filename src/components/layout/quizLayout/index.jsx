import {
  ButtonContainer,
  Container,
} from '@/components/layout/quizLayout/styles';
import Button from '@/components/layout/quizLayout/button';
import ProgressBar from '@/components/layout/quizLayout/progressBar';
import Result from '@/components/layout/quizLayout/result';
import { useEffect, useState } from 'react';
import Link from 'next/link'
import {useRouter} from 'next/router';
const QuizLayout = ({ children }) => {
  const [quiznumber,setQuiznumber]=useState(0);
  const [resultPage,setResultPage]=useState(false);
  const router = useRouter();
  const right = router.query.right;
  const wrong = router.query.wrong;
  const [active,setActive]=useState(false);
  const clickbutton=()=>{
    if(quiznumber<2){
      setQuiznumber(quiznumber+1);
    }
    else if(quiznumber==2){
      setResultPage(true);
      setQuiznumber(quiznumber+1);
    }
    else{
      setResultPage(false);
      setQuiznumber(0);
    }
  }
  useEffect(()=>{
    router.push({
      pathname:`/${quiznumber}`
    })
  },[quiznumber])
  useEffect(()=>{
    if(right=="true" || wrong=="true"){
      setActive(true);
    }
    else if(quiznumber==3){
      setActive(true);
    }
    else{
      setActive(false);
    }
  },[right,wrong])
  return(
    <Container>
      {resultPage?(null)
        :(<ProgressBar quiznumber={quiznumber} />)}
        {resultPage?(<Result />):children}
      <ButtonContainer>
        <Button active={active} clickbutton={clickbutton} quiznumber={quiznumber} resultPage={resultPage} />
      </ButtonContainer>
    </Container>
)};

export default QuizLayout;
