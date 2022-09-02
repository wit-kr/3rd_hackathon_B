import {
  Wrapper,
  Title,
  Header,
  Content,
  Background,
  CloseButton,
  ItemContainer,
} from '@/components/domain/Home/Modal/styles';
import Items from '@/components/domain/Home/Modal/Item';

// eslint-disable-next-line react/prop-types
const Modal = ({ onClose }) => (
  <Wrapper>
    <Background onClick={onClose} />
    <Content>
      <Header>
        <Title>튜토리얼</Title>
        <CloseButton type="button" onClick={onClose}>
          <img src="/image/close.svg" alt="close" />
        </CloseButton>
      </Header>
      <ItemContainer>
        <Items />
      </ItemContainer>
    </Content>
  </Wrapper>
);

export default Modal;
