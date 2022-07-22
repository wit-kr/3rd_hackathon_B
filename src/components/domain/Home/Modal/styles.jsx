import styled from 'styled-components';

export const Content = styled.div`
  position: absolute;
  width: 288px;
  height: 248px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;

  @media (min-width: 500px) {
    width: 500px;
  }
`;

export const CloseButton = styled.button``;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1``;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.3;
`;
