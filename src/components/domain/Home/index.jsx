/* eslint-disable */
import { useEffect, useState } from 'react';
import {
  BottomBox,
  ButtonBox,
  CharacterImage,
  CharacterImageBox,
  Container,
  Description,
  GradeBox,
  GradeTitle,
  StartButton,
  TextBox,
  TopBox,
  TutorialButton,
  UserName,
} from '@/components/domain/Home/styles';
import { NICKNAME } from '../../../utils/localstorageKey';

const Home = () => {
  const [nickName, setNickname] = useState('');
  useEffect(() => {
    setNickname(JSON.parse(localStorage.getItem(NICKNAME)));
  }, [nickName]);

  return (
    <Container>
      <TopBox>
        <TextBox>
          <UserName>
            {nickName}님<Description> 반가워요</Description>
          </UserName>
          <Description>오늘도 환경에 한발짝 더 가까워져요</Description>
          <GradeTitle>나의 등급</GradeTitle>
        </TextBox>
      </TopBox>
      <BottomBox>
        <CharacterImageBox>
          <CharacterImage src="/image/characters/char1.svg" alt="character" />
        </CharacterImageBox>
        <ButtonBox>
          <StartButton>오늘의 퀴즈 풀러가기</StartButton>
          <TutorialButton>튜토리얼 보러가기</TutorialButton>
        </ButtonBox>
      </BottomBox>
    </Container>
  );
};

export default Home;
