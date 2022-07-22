import {
  Container,
  Description,
  Item,
} from '@/components/domain/Home/Modal/Item/styles';

const Items = () => (
  <Container>
    <Item>
      <img src="/image/icons/number1.svg" alt="1" />
      <Description>
        하루 1번만
        <br />
        퀴즈에 참여할 수 있어요
      </Description>
    </Item>
    <Item>
      <img src="/image/icons/number2.svg" alt="2" />
      <Description>
        퀴즈 3문제를 모두 맞춰야
        <br />
        등급이 올라가요
      </Description>
    </Item>
    <Item>
      <img src="/image/icons/number3.svg" alt="3" />
      <Description>
        환경 마스터 숲이 되면
        <br />
        모든 퀴즈는 끝나요
      </Description>
    </Item>
  </Container>
);

export default Items;
