import {
  ButtonContainer,
  Container,
} from '@/components/layout/quizLayout/styles';
import Button from '@/components/layout/quizLayout/button';
import ProgressBar from '@/components/layout/quizLayout/progressBar';

// eslint-disable-next-line react/prop-types
const QuizLayout = ({ children }) => (
  <Container>
    <ProgressBar />
    {children}
    <ButtonContainer>
      <Button />
    </ButtonContainer>
  </Container>
);

export default QuizLayout;
