import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  z-index: 999;
  left: 50%;
  transform: translateX(-50%);
  height: calc(100vh - 100px);
`;

export const Content = styled.div`
  position: absolute;
  width: 72vw;
  max-width: 300px;
  height: 420px;
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
  line-height: 3rem;
  color: #34aa70;
`;

export const Background = styled.div`
  //position: absolute;
  //top: 0;
  //left: 0;
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
