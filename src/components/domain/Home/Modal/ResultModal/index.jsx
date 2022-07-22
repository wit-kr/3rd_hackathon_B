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
      </ItemContainer>
    </Content>
  </>
);

export default ResultModal;
