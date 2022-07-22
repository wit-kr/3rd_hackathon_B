import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
`;

export const ScoreImg = styled.img`
  margin-top: 10.5vh;
`;

export const ResultBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 22vh;
`;

export const Description = styled.span`
  font-family: 'AppleSDGothicNeoB';
  font-size: 2.2rem;
  line-height: 3.1rem;
  color: #000;
`;

export const NumberDescription = styled.span`
  font-size: 3.6rem;
  line-height: 5rem;
  color: #34aa70;
`;

export const AnswerButton = styled.button`
  width: 55.5vw;
  max-width: 250px;
  height: 50px;
  border: 1px solid #34aa70;
  border-radius: 50px;
  font-family: 'AppleSDGothicNeoM';
  font-size: 2rem;
  line-height: 2.4rem;
  color: #34aa70;
  text-align: center;
`;

export const HomeButton = styled.button`
  margin-top: 50px;
  margin-bottom: 60px;
  background-color: #34aa70;
  width: 83.3vw;
  max-width: 400px;
  height: 44px;
  border-radius: 10px;
  font-family: 'AppleSDGothicNeoEB';
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: #fff;
  text-align: center;
`;
