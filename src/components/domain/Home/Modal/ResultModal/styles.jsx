import styled from 'styled-components';

export const Content = styled.div`
  position: absolute;
  width: 72vw;
  max-width: 380px;
  height: 64vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
`;

export const CloseButton = styled.button``;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-family: 'AppleSDGothicNeoEB';
  font-size: 2.2rem;
  color: #34aa70;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.3;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70vw;
  max-width: 360px;
  margin-bottom: 24px;
`;

export const AnswerTitle = styled.p`
  font-family: 'AppleSDGothicNeoEB';
  font-size: 1.4rem;
  line-height: 3rem;
  color: #34aa70;
`;

export const AnswerBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Question = styled.p`
  font-family: 'AppleSDGothicNeo';
  font-size: 1.4rem;
  line-height: 2rem;
  color: #000;
`;

export const Answer = styled.p`
  font-family: 'AppleSDGothicNeoL';
  font-size: 1.2rem;
  line-height: 2rem;
  color: #34aa70;
`;
