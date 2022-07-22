import {
  Title,
  Header,
  Content,
  Background,
  CloseButton,
  ItemContainer,
} from '@/components/domain/Home/Modal/styles';

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
      <ItemContainer />
    </Content>
  </>
);

export default ResultModal;
