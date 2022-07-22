import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 99;
  width: 100%;
  max-width: 500px;
  height: 500px;
`;

export const TopBox = styled.div`
  background-color: #34aa70;
  border-radius: 0 0 30px 30px;
  width: 100%;
  height: 53vh;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextBox = styled.div`
  margin-top: 5.8vh;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 72vw;
  max-width: 360px;
`;

export const UserName = styled.span`
  font-size: 3rem;
  color: #fff;
`;

export const Description = styled.span`
  font-size: 1.8rem;
  color: #fff;
`;

export const BottomBox = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
`;

export const GradeTitle = styled.p`
  margin-top: 4.6vh;
  font-size: 1.8rem;
  color: #fff;
`;

export const ImageBox = styled.div`
  margin-top: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10vh;
`;

export const StartButton = styled.button`
  bottom: 0;
  border: 1px solid #34aa70;
  border-radius: 50px;
  width: 55.5vw;
  max-width: 300px;
  height: 6.4vh;
  color: #34aa70;
  font-size: 1.6rem;
  text-align: center;
`;

export const TutorialButton = styled.button`
  margin-top: 1.5vh;
  font-size: 1.2rem;
  color: #a0a0a0;
  text-decoration-line: underline;
`;

export const CharacterImage = styled.img`
  width: 92vw;
  max-height: 480px;
  height: auto;
`;
