import styled from 'styled-components';

export const ContainerStyle = styled.div`
  width: 100%;
  height: 4px;
  margin-top: 44px;
  background-color: #f2f2f2;
`;

export const BarStyle = styled.div`
  width: ${(props) => props.quiz_count};
  height: 4px;
  margin-top: 44px;
  border-radius: 0 50px 50px 0;
  background-color: #34aa70;
`;
