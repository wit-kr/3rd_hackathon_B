import styled, { keyframes } from 'styled-components';

const LogoMove = keyframes`
  from {
    margin-top: 40vh;
  }
  to {
    margin-top: 20vh;
  }
`;

const ButtonMove = keyframes`
  from {
    opacity: 0;
  } 
  to {
    opacity: 1;
  }
`;

const FormMove = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #34aa70;
  width: 100%;
  height: 100vh;
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
`;

export const LogoBox = styled.div`
  margin-top: 50%;
  display: flex;
  flex-direction: column;
  > img {
    margin-top: 10px;
  }
  animation: ${LogoMove} 2s 1s both;
`;

export const DisabledStartButton = styled.button`
  width: 100%;
  max-width: 400px;
  height: 50px;
  background-color: #fff;
  border-radius: 50px;
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 9vh;
  animation: ${ButtonMove} 2s 1s both;
  color: #a0a0a0;
`;

export const StartButton = styled.button`
  width: 100%;
  max-width: 400px;
  height: 50px;
  background-color: #fff;
  border-radius: 50px;
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 9vh;
  color: #34aa70;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 38vh;
  color: #fff;
  width: 83.3vw;
  max-width: 400px;
  animation: ${FormMove} 2s 1s both;
`;

export const Input = styled.input`
  color: #fff;
  font-size: 1.4rem;
  width: 100%;
  border-bottom: 1px solid #fff;
  ::placeholder {
    color: #fff;
  }
`;
