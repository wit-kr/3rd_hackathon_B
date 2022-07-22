/* eslint-disable */
import {
  BottomBox,
  ButtonBox,
  CharacterImage,
  CharacterImageBox,
  Container,
  Description,
  GradeTitle,
  StartButton,
  TextBox,
  TopBox,
  TutorialButton,
  UserName,
} from '@/components/domain/Home/styles';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Modal from '@/components/domain/Home/Modal';

const Home = () => {
  const router = useRouter();
  const currentUser = router.query['current-user'];
  const level = (process.browser && localStorage.getItem(currentUser)) ?? '0';

  const [isModalShow, setIsModalShow] = useState(false);

  const pushQuizRoute = () => {
    router.push(`/quiz/${level}`);
  };
  const showModal = () => {
    setIsModalShow(!isModalShow);
  };
  const closeModal = () => {
    setIsModalShow(false);
  };

  return (
    <>
      <Container>
        <TopBox>
          <TextBox>
            <UserName>
              {currentUser}님<Description> 반가워요</Description>
            </UserName>
            <Description>오늘도 환경에 한발짝 더 가까워져요</Description>
          </TextBox>
          <GradeTitle>나의 등급</GradeTitle>
        </TopBox>
        <BottomBox>
          <CharacterImageBox>
            <CharacterImage src="/image/characters/char1.svg" alt="character" />
          </CharacterImageBox>
          <ButtonBox>
            <StartButton onClick={pushQuizRoute}>
              오늘의 퀴즈 풀러가기
            </StartButton>
            <TutorialButton onClick={showModal}>
              튜토리얼 보러가기
            </TutorialButton>
          </ButtonBox>
        </BottomBox>
      </Container>
      {isModalShow && <Modal onClose={closeModal}></Modal>}
    </>
  );
};

export default Home;
