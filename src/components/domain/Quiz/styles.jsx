import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 15vh;
  height: 50vh;
`;

export const QuizImage = styled.img`
  width: 27.7vw;
  max-width: 150px;
  height: auto;
`;

export const QuizBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const QuizQuestion = styled.p`
  margin-top: 30px;
  font-family: 'AppleSDGothicNeoEB';
  font-size: 1.8rem;
  line-height: 3rem;
  text-align: center;
  color: #000;
`;

export const Description = styled.p`
  font-family: 'AppleSDGothicNeoEB';
  font-size: 1rem;
  line-height: 2.4rem;
  color: #a0a0a0;
`;

export const QuizSelect = styled.div`
  display: flex;
  width: 83.3%;
  flex-direction: column;
  height: 100px;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  width: 83.3vw;
  max-width: 400px;
  height: 50px;
  border-radius: 50px;
  border: 1px solid #34aa70;
  text-align: center;
  font-family: 'AppleSDGothicNeoM';
  font-size: 2rem;
  line-height: 2.4rem;
  margin-bottom: 14px;
`;
