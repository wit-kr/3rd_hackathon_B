import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 99;
  width: 100%;
  max-width: 500px;
  height: 100vh;
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
`;

export const TopBox = styled.div`
  background-color: #34aa70;
  border-radius: 0 0 30px 30px;
  width: 100%;
  height: 52vh;
  //height: 400px;
  max-height: 440px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextBox = styled.div`
  //margin-top: 5.8vh;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 78vw;
  max-width: 360px;
`;

export const UserName = styled.span`
  font-family: 'Jalnan';
  font-size: 3rem;
  line-height: 3rem;
  color: #fff;
`;

export const Description = styled.span`
  font-family: 'Jalnan';
  font-size: 1.8rem;
  line-height: 3rem;
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
  width: 78vw;
  max-width: 360px;
  text-align: start;
  //margin-top: 4.6vh;
  margin-top: 30px;
  margin-left: 15px;
  font-size: 1.8rem;
  color: #fff;
`;

export const CharacterImageBox = styled.div`
  margin-top: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CharacterImage = styled.img`
  width: 90vw;
  max-width: 400px;
  height: auto;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //margin-bottom: 10vh;
  margin-bottom: 80px;
`;

export const StartButton = styled.button`
  bottom: 0;
  border: 1px solid #34aa70;
  border-radius: 50px;
  width: 55.5vw;
  max-width: 300px;
  //height: 6.4vh;
  height: 50px;
  color: #34aa70;
  font-size: 1.6rem;
  line-height: 2.4rem;
  text-align: center;
`;

export const TutorialButton = styled.button`
  font-family: 'AppleGothicNeoL';
  margin-top: 1.5vh;
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: #a0a0a0;
  text-decoration-line: underline;
`;
