import {
  BottomBox,
  ButtonBox,
  Container,
  Description,
  GradeBox,
  GradeContainer,
  GradeTitle,
  GradeTitleBox,
  StartButton,
  TextBox,
  TopBox,
  TutorialButton,
  UserName,
} from '@/components/domain/Home/styles';

const Home = () => (
  <Container>
    <TopBox>
      <TextBox>
        <UserName>
          햎희님
          <Description> 반가워요</Description>
        </UserName>
        <Description>오늘도 환경에 한발짝 더 가까워져요</Description>
        <GradeTitle>나의 등급</GradeTitle>
      </TextBox>
    </TopBox>
    <BottomBox>
      <GradeBox>
        <div />
      </GradeBox>
      <ButtonBox>
        <StartButton>오늘의 퀴즈 풀러가기</StartButton>
        <TutorialButton>튜토리얼 보러가기</TutorialButton>
      </ButtonBox>
    </BottomBox>
  </Container>
);

export default Home;
