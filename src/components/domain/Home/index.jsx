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
import { useEffect, useState } from "react";
import Modal from '@/components/domain/Home/Modal';
import characterData from '@/data/character.json';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { levelState } from '../../../atom/atom';

const  Home = () => {

  const router = useRouter();
  const currentUser = router.query['current-user'];
  const level =
    Number(process.browser && localStorage.getItem(currentUser)) ?? Number('1');
  const tempLevel = useRecoilValue(levelState);

  const [isModalShow, setIsModalShow] = useState(false);

  const pushQuizRoute = () => {
    router.push(`/quiz/${level}/1?current-user=${currentUser}`);
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
            <GradeTitle>나의 등급</GradeTitle>
          </TextBox>
        </TopBox>
        <BottomBox>
          <CharacterImageBox>
            <CharacterImage
              src={`/image/characters/char${tempLevel}.svg`}
              alt="character"
            />
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
