import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Container,
  Picture,
  QuizContainer,
  QuizContent,
  QuizSelect,
  Detail,
  Button,
} from '@/components/domain/Quiz/styles';
import quizData from '@/data/quiz.json';

const Quiz = () => {
    const { quizList } = quizData;
    const router = useRouter();
    const currentUser = router.query['current-user'];
    const level =
        Number(process.browser && localStorage.getItem(currentUser)) ?? Number('1');
    console.log("여기 level"+level);
    const {quiznumber} = router.query;
    const quizImg = [
        // quizList[0+${level}*3].quizImg,
        // quizList[1+${level}*3].quizImg,
        // quizList[2+${level}*3].quizImg
        quizList[0].quizImg,
        quizList[1].quizImg,
        quizList[2].quizImg,
    ];
    const quiztext = [
    // quizList[0+${level}*3].content,
    // quizList[1+${level}*3].content,
    // quizList[2+${level}*3].content
        quizList[0].content,
        quizList[1].content,
        quizList[2].content,
    ];
    const [right, setRight] = useState(false);
    const [wrong, setWrong] = useState(false);
    const clickright = () => {
        setRight(!right);
        if (wrong) {
            setWrong(false);
        }
    };
    const clickwrong = () => {
        setWrong(!wrong);
        if (right) {
            setRight(false);
        }
    };
    useEffect(() => {
        if(quiznumber==''){
            quiznumber=0;
            router.push({
                pathname: `/quiz/${level}`,
                query: { quiznumber,right, wrong },
            });
        }
        else{
            router.push({
                pathname: `/quiz/${level}`,
                query: { quiznumber,right, wrong },
            });
        }
    }, [right, wrong, quiznumber]);
    useEffect(() => {
        setRight(false);
        setWrong(false);
    }, [quiznumber]);
    return(
        <Container>
            <Picture src={quizImg[quiznumber]} />
            <QuizContainer>
                <QuizContent>
                    <text>{quiztext[quiznumber]}</text>
                </QuizContent>
                <Detail>
                    <text>선택 후 다음을 눌러주세요</text>
                </Detail>
            </QuizContainer>
            <QuizSelect>
                <Button onClick={clickright} clickedornot={right}>
                    <text>O</text>
                </Button>
                <Button onClick={clickwrong} clickedornot={wrong}>
                    <text>X</text>
                </Button>
            </QuizSelect>
        </Container>
    )
    
}
export default Quiz;
