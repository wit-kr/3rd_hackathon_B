import { Container,Picture,QuizContainer,QuizContent,QuizSelect,Detail,Button } from '@/components/domain/Quiz/styles';
import {useState} from 'react';
const Quiz = () => {
    const [quiztext,setQuiztext] = useState([

    ]);
    return(
        <Container>
            <Picture src="" />
            <QuizContainer>
                <QuizContent>
                    <text>일회용 종이컵이나 플라스틱컵은 <br/> 대부분 재활용이 된다.</text>
                </QuizContent>
                <Detail>
                    <text>선택 후 다음을 눌러주세요</text>
                </Detail>
            </QuizContainer>
            <QuizSelect>
                <Button>
                    <text>O</text>
                </Button>
                <Button>
                    <text>X</text>
                </Button>
            </QuizSelect>
        </Container>
    );
    
};

export default Quiz;
