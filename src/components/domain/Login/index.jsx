/* eslint-disable @next/next/no-img-element */
import { useCallback } from 'react';
import { useRouter } from 'next/router';
import {
  Container,
  DisabledStartButton,
  Form,
  Input,
  LogoBox,
  StartButton,
} from '@/components/domain/Login/styles';
import useInput from '@/hooks/useInput';

const Login = () => {
  const [nickName, onChangeNickname] = useInput('');
  const router = useRouter();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      // eslint-disable-next-line no-useless-return
      if (!nickName || !nickName.trim()) return;
      const storedNickName = localStorage.getItem(nickName);
      if (!storedNickName) {
        localStorage.setItem(nickName, '1');
      }
      router.push(`/home?current-user=${nickName}`);
    },
    [nickName],
  );

  return (
    <Container>
      <LogoBox>
        <img src="/image/title.svg" alt="logo" />
        <img src="/image/logo.svg" alt="logo" />
      </LogoBox>
      <Form onSubmit={onSubmit}>
        <Input
          placeholder="닉네임을 입력해주세요"
          type="text"
          value={nickName}
          onChange={onChangeNickname}
        />
        {!nickName || !nickName.trim() ? (
          <DisabledStartButton type="submit" disabled={nickName}>
            시작하기
          </DisabledStartButton>
        ) : (
          <StartButton type="submit" style={{ color: '#34aa70' }}>
            시작하기
          </StartButton>
        )}
      </Form>
    </Container>
  );
};
export default Login;
