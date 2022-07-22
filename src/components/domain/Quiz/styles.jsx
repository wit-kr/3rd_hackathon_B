import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Picture = styled.img`
  width:100px;
  height:100px;
  margin-top:100px;
  margin-bottom:30px;
`;

export const QuizContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const QuizContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  text{
    font-family:'AppliSDGothicNeoEB00';
    font-weight:400;
    font-size:18px;
    line-height: 30px;
    text-align:center;
    letter-spacing: 0.02em;
    color:#000000;
  }
`;

export const Detail = styled.div`
  display: flex;
  width:130px;
  height:24px;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  text{
    font-family:'AppliSDGothicNeoEB00';
    font-style:'normal';
    font-weight:400;
    font-size:10px;
    line-height:24px;
    color:#A0A0A0;
  }
`;

export const QuizSelect = styled.div`
  display: flex;
  width:83.3%;
  flex-direction: column;
  height:100px;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  border:1px solid #E0E0E0;
  border-radius:50px;
  width:100%;
  height:50px;
  justify-content: center;
  text-align:center;
  margin-bottom:14px;
  text{
    font-family: 'AppleSDGothicNeoM00';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: #000000;
  }
`;