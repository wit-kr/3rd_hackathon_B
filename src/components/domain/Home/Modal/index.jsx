import {
  Title,
  Header,
  Content,
  Background,
  CloseButton,
} from '@/components/domain/Home/Modal/styles';

// eslint-disable-next-line react/prop-types
const Modal = ({ onClose }) => (
  <>
    <Background onClick={onClose} />
    <Content>
      <Header>
        <Title>ㅜ튜이토러</Title>
        <CloseButton type="button" onClick={onClose}>
          스 엑버튼
        </CloseButton>
      </Header>
    </Content>
  </>
);

export default Modal;
