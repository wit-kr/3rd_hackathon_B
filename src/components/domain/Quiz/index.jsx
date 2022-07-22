import { Container,Picture,QuizContainer,QuizContent,QuizSelect,Detail,Button } from '@/components/domain/Quiz/styles';
import {useEffect, useState} from 'react';
import Link from 'next/link'
import {useRouter} from 'next/router';
const Quiz = () => {
    const router = useRouter();
    const quiznumber = router.query.quiz;
    const [quizImg,setQuizImg] = useState([]);
    const quiztext=[
        "일회용 종이컵이나 플라스틱컵은 대부분 재활용이 된다.",
        "종이컵에 이물질이 뭍어있는 경우 일반쓰레기로 버린다",
        "플라스틱이 가장 많이 쓰이는 분야는 농업이다",
    ];
    const [right,setRight] = useState(false);
    const [wrong,setWrong] = useState(false);
    const clickright = () => {
        setRight(!right);
        if(wrong){
            setWrong(false);
        }
    }
    const clickwrong = () =>{
        setWrong(!wrong);
        if(right){
            setRight(false);
        }
    }
    useEffect(()=>{
        if(quiznumber==undefined){
            quiznumber=0;
        }
        router.push({
            pathname:`/${quiznumber}`,
            query:{right:right,wrong:wrong}
        })
    },[right,wrong,quiznumber])
    useEffect(()=>{
        setRight(false);
        setWrong(false);
    },[quiznumber])
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
    );
    
};

export default Quiz;
