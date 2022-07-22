import styled from 'styled-components';

export const Container = styled.button`
  background-color: ${props=>props.active?"#34aa70":"#C0C0C0"};
  border-radius: 10px;
  width: 100%;
  height: 44px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export const Title = styled.text`
  font-size: 1.6rem;
  color: #fff;
`;
