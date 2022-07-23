import { atom } from 'recoil';

export const levelState = atom({
  key: 'levelState',
  default: 1,
});

export const answerState = atom({
  key: 'answerState',
  default: 0,
});
