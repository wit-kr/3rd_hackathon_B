import {
  Title,
  Header,
  Content,
  Background,
  CloseButton,
  ItemContainer,
  Item,
  AnswerTitle,
  AnswerBox,
  Question,
  Answer,
} from '@/components/domain/Home/Modal/ResultModal/styles';

// eslint-disable-next-line react/prop-types
const ResultModal = ({ onClose }) => (
  <>
    <Background onClick={onClose} />
    <Content>
      <Header>
        <Title>정답</Title>
        <CloseButton type="button" onClick={onClose}>
          <img src="/image/close.svg" alt="close" />
        </CloseButton>
      </Header>
      <ItemContainer>
        <Item>
          <AnswerTitle>문제 1</AnswerTitle>
          <AnswerBox>
            <Question>
              일회용 종이컵이나 플라스틱 컵은
              <br />
              대부분 재활용이 된다
            </Question>
            <Answer>
              X, 버려지는 일회용컵 중
              <br />
              재활용되는 비율은 단 1%
              <br />
              나머지는 소각되거나 매립된다
            </Answer>
          </AnswerBox>
        </Item>
        <Item>
          <AnswerTitle>문제 2</AnswerTitle>
          <AnswerBox>
            <Question>
              종이컵에 이물질이 뭍어있는 경우
              <br />
              일반쓰레기로 버린다
            </Question>
            <Answer>
              O, 종이컵 분리수거를 위해서는 이물질
              <br />
              없이 깨끗하게 제거 후에 말려 종이컵만
              <br />
              따로 모아서 분리수거 해야한다
            </Answer>
          </AnswerBox>
        </Item>
        <Item>
          <AnswerTitle>문제 3</AnswerTitle>
          <AnswerBox>
            <Question>
              플라스틱이 가장 많이 쓰이는
              <br />
              분야는 농업이다
            </Question>
            <Answer>
              X, 플라스틱이 가장 많이
              <br />
              사용되는 용도는 포장 및 일회용품이다
              <br />
            </Answer>
          </AnswerBox>
        </Item>
      </ItemContainer>
    </Content>
  </>
);

export default ResultModal;
