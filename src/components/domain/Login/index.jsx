/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect, useRef, useState } from 'react';
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
  const [fontColor, setFontColor] = useState('#a0a0a0');
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
    [nickName]
  );

  useEffect(() => {
    if (nickName.trim()) {
      setFontColor('#34aa70');
    } else setFontColor('#a0a0a0');
  }, [nickName]);

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
        <StartButton type="submit" fontColor={fontColor}>
          시작하기
        </StartButton>
        {/* {!nickName || !nickName.trim() ? ( */}
        {/*  <DisabledStartButton */}
        {/*    type="submit" */}
        {/*    disabled={nickName} */}
        {/*    animation={animation} */}
        {/*  > */}
        {/*    시작하기 */}
        {/*  </DisabledStartButton> */}
        {/* ) : ( */}
        {/*  <StartButton type="submit" style={{ color: '#34aa70' }}> */}
        {/*    시작하기 */}
        {/*  </StartButton> */}
        {/* )} */}
      </Form>
    </Container>
  );
};
export default Login;
