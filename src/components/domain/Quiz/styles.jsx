import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 13vh;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QuizImage = styled.img`
  width: 27vw;
  max-width: 150px;
  height: auto;
`;

export const QuizBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
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

export const OButton = styled.button`
  width: 83.3vw;
  max-width: 400px;
  height: 50px;
  border-radius: 50px;
  border: 1px solid
    ${(props) => (props.oClicked === true ? '#34aa70' : '#e0e0e0')};
  text-align: center;
  font-family: 'AppleSDGothicNeoM';
  font-size: 2rem;
  line-height: 2.4rem;
  margin-bottom: 14px;
`;

export const XButton = styled.button`
  width: 83.3vw;
  max-width: 400px;
  height: 50px;
  border-radius: 50px;
  border: 1px solid
    ${(props) => (props.xClicked === true ? '#34aa70' : '#e0e0e0')};
  text-align: center;
  font-family: 'AppleSDGothicNeoM';
  font-size: 2rem;
  line-height: 2.4rem;
  margin-bottom: 14px;
`;

export const NextButton = styled.button`
  width: 82vw;
  max-width: 400px;
  height: 44px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //background-color: #34aa70;
  background-color: ${(props) =>
    props.clicked === true ? '#34aa80' : '#e0e0e0'};
  border-radius: 10px;
  color: #fff;
  font-family: 'AppleSDGothicNeoM';
  font-size: 1.6rem;
  line-height: 2.4rem;
  margin-bottom: 5vh;
`;
