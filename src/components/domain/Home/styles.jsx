import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 99;
  width: 100%;
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextBox = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
`;

export const UserName = styled.span`
  font-family: 'Jalnan';
  font-size: 2.8rem;
  line-height: 3rem;
  color: #fff;
  @media (max-width: 300px) {
    font-size: 1.9rem;
  }
`;

export const Description = styled.span`
  font-family: 'Jalnan';
  font-size: 1.7rem;
  line-height: 3rem;
  color: #fff;
  @media (min-width: 400px) {
    font-size: 2rem;
  }
  @media (max-width: 300px) {
    font-size: 1.2rem;
  }
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
  width: 100%;
  margin-top: 40px;
  font-size: 1.8rem;
  color: #fff;
`;

export const CharacterImageBox = styled.div`
  margin-top: 150px;
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
  margin-bottom: 80px;
`;

export const StartButton = styled.button`
  bottom: 0;
  border: 1px solid #34aa70;
  border-radius: 50px;
  width: 200px;
  height: 50px;
  color: #34aa70;
  font-size: 1.6rem;
  line-height: 2.4rem;
  text-align: center;
  @media (min-width: 400px) {
    width: 230px;
    font-size: 1.8rem;
  }
`;

export const TutorialButton = styled.button`
  font-family: 'AppleGothicNeoL';
  margin-top: 1.5vh;
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: #a0a0a0;
  text-decoration-line: underline;
`;
