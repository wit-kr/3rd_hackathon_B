/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import {
  Container,
  Form,
  Input,
  LogoBox,
  StartButton,
} from '@/components/domain/Splash/styles';

const Splash = () => (
  <Container>
    <LogoBox>
      <img src="/image/title.svg" alt="logo" />
      <img src="/image/logo.svg" alt="logo" />
    </LogoBox>
    <Form>
      <Input placeholder="닉네임을 입력해주세요" />
    </Form>
    <StartButton>시작하기</StartButton>
  </Container>
);
export default Splash;
