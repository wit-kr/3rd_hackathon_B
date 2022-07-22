import {
    ContainerStyle,BarStyle
  } from '@/components/layout/quizLayout/progressBar/styles';

const ProgressBar = ({quiznumber}) => {
    const quiz_count=["33%","66%","100%"];
    console.log(quiznumber);
    return (
        <ContainerStyle>
            <BarStyle quiz_count={quiz_count[quiznumber]} />
        </ContainerStyle>
    )
}

export default ProgressBar;
