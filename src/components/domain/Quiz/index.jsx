import { Container,Picture,QuizContainer,QuizContent,QuizSelect,Detail,Button } from '@/components/domain/Quiz/styles';
import {useState} from 'react';
import Link from 'next/link'
import {useRouter} from 'next/router';
const Quiz = () => {
    const router = useRouter();
    console.log(router.query.result);
    const quiznumber = router.query.quiz;
    const [quiztext,setQuiztext] = useState([
        "일회용 종이컵이나 플라스틱컵은 대부분 재활용이 된다.",
        "종이컵에 이물질이 뭍어있는 경우 일반쓰레기로 버린다",
        "플라스틱이 가장 많이 쓰이는 분야는 농업이다",
    ]);
    const [right,setRight] = useState(false);
    const [wrong,setWrong] = useState(false);
    const clickright = () => {
        setRight(!right);
    }
    const clickwrong = () =>{
        setWrong(!wrong);
    }
    return(
        <Container>
            <Picture src="" />
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

        
    );
    
};

export default Quiz;
